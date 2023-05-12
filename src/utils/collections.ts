export const range = function* (
  from: number,
  to: number,
  step?: number
): Generator<number> {
  if (!step) step = from > to ? -1 : 1;
  for (let i = from; i <= to; i += step) yield i;
};
