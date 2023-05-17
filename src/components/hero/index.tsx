import { FunctionalComponent } from "preact";
import styles from "./style.module.css";
import { createNoise2D } from "simplex-noise";
import { useCallback, useMemo, useRef } from "preact/hooks";
import { useRAF, useSizeObserver } from "../../utils/hooks";
import { signal } from "@preact/signals";
import { createVars } from "../../utils/components";

const waveHeight = 20;
const waveWidth = 10;
const waveScale = 1 / 200;
const timeScale = 1 / 2000;

const noise = createNoise2D();

const getPath = (
  width: number,
  height: number,
  t: DOMHighResTimeStamp
): string => {
  const segments: string[] = [`M0,0`, `L0,${height}`];
  let x = 0;
  do {
    segments.push(
      `L${x},${height - (noise(x * waveScale, t * timeScale) + 1) * waveHeight}`
    );
    x += waveWidth;
  } while (x < width + waveWidth);
  segments.push(`L${width},0`, `Z`);
  return `path("${segments.join(" ")}")`;
};

const Hero: FunctionalComponent = () => {
  const containerRef = useRef<HTMLDivElement>();
  const [width, height] = useSizeObserver(containerRef);
  const path = useMemo(() => signal(""), []);

  const onFrame = useCallback((t: DOMHighResTimeStamp) => {
    path.value = getPath(width.value, height.value, t);
  }, []);

  const vars = createVars({ waveHeight });

  useRAF(onFrame);

  return (
    <div
      class={styles.container}
      ref={containerRef}
      style={`clip-path: ${path.value}; ${vars}`}
    >
      <div class={styles.content}>
        <h1 class={styles.greeting}>
          Hi! I'm <strong>Klemen</strong>.
        </h1>
      </div>
      <img class={styles.image} src="assets/avatar-test-3.webp" />
    </div>
  );
};

export default Hero;
