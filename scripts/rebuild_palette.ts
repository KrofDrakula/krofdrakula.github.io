const { readFileSync, writeFileSync } = require("fs");
const { resolve } = require("path");

const source = resolve(__dirname, "../src/style/palette.json");
const dest = resolve(__dirname, "../src/style/palette.css");

const json = JSON.parse(readFileSync(source, "utf-8")) as Record<
  string,
  string[]
>;

const palette: string[] = [":root {"];

for (const [color, values] of Object.entries(json)) {
  palette.push(
    ...values.map((value, idx) => {
      const shade = (9 - idx) * 100;
      return `  --${color}-${shade}: ${value};`;
    })
  );
  palette.push("");
}

palette.push("}");

writeFileSync(dest, palette.join("\n"));
