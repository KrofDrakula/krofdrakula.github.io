import { setFips } from "crypto";

export const range = function* (
  from: number,
  to: number,
  step?: number
): Generator<number> {
  if (!step) step = from > to ? -1 : 1;
  for (let i = from; i <= to; i += step) yield i;
};

export const sample = function* (from: number, to: number, stops: number) {
  const stepSize = (to - from) / (stops - 1);
  for (let i = from; i <= to; i += stepSize) yield i;
};
