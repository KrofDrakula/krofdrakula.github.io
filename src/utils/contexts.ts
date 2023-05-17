import { createContext } from "preact";
import type { StateUpdater } from "preact/hooks";

export type Theme = "light" | "dark";

export const ColorTheme = createContext<{
  theme: Theme | null;
  setTheme: StateUpdater<Theme | null>;
}>(null);
