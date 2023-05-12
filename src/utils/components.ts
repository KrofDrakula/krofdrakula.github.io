export const cssValue = (x: number | string) =>
  typeof x == "number" ? `${x}px` : x;

export const snakeCase = (str: string) =>
  str.replace(/(?<!^)[A-Z]/g, (s) => `_${s.toLowerCase()}`);

export const dashCase = (str: string) =>
  str.replace(/(?<!^)[A-Z]/g, (s) => `-${s.toLowerCase()}`);

export const createVars = (
  vars: Record<string, string | number | undefined>
) => {
  const result: string[] = [];
  for (const [varname, value] of Object.entries(vars)) {
    if (typeof value == "undefined") continue;
    result.push(`--${dashCase(varname)}:${cssValue(value)};`);
  }
  return result.join(";");
};
