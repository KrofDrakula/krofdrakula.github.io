import { useEffect, useLayoutEffect, useMemo } from "preact/hooks";
import { signal } from "@preact/signals";
import type { RefObject } from "preact";

export const useRAF = (
  frameCallback: (timestamp: DOMHighResTimeStamp) => void
) => {
  useEffect(() => {
    let timerId: number | null;

    const repeater = (t: DOMHighResTimeStamp) => {
      timerId = requestAnimationFrame(repeater);
      try {
        frameCallback(t);
      } catch (err) {
        console.error(err);
      }
    };

    repeater(performance.now());

    return () => {
      cancelAnimationFrame(timerId);
      timerId = null;
    };
  }, [frameCallback]);
};

const observedElements = new WeakMap<
  Element,
  Set<(width: number, height: number) => void>
>();

const ro = new ResizeObserver((entries) => {
  for (const entry of entries) {
    let width: number;
    let height: number;
    if (entry.contentBoxSize) {
      width = entry.contentBoxSize[0].inlineSize;
      height = entry.contentBoxSize[0].blockSize;
    } else {
      width = entry.contentRect.width;
      height = entry.contentRect.height;
    }
    const observers = observedElements.get(entry.target);
    if (observers?.size > 0) {
      for (const observer of observers) {
        try {
          observer(width, height);
        } catch (err) {
          console.log(err);
        }
      }
    }
  }
});

const register = (
  el: Element,
  listener: (width: number, height: number) => void
) => {
  ro.observe(el);
  observedElements.set(
    el,
    (observedElements.get(el) ?? new Set()).add(listener)
  );
};

const unregister = (
  el: Element,
  listener: (width: number, height: number) => void
) => {
  ro.unobserve(el);
  observedElements.get(el)?.delete(listener);
};

export const useSizeObserver = (ref: RefObject<Element>) => {
  const width = useMemo(
    () => signal(ref.current ? ref.current.getBoundingClientRect().width : 0),
    []
  );
  const height = useMemo(
    () => signal(ref.current ? ref.current.getBoundingClientRect().height : 0),
    []
  );

  useLayoutEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const listener = (w: number, h: number) => {
      if (width.value != w) width.value = w;
      if (height.value != h) height.value = h;
    };
    register(el, listener);
    return () => unregister(el, listener);
  }, [ref.current]);

  return [width, height] as const;
};
