import { useContext, useEffect } from "preact/hooks";
import { ColorTheme } from "../../utils/contexts";
import { FunctionalComponent } from "preact";

const ThemeSelector: FunctionalComponent = () => {
  const { theme, setTheme } = useContext(ColorTheme);
  useEffect(() => {
    document.body.className = theme ?? "";
  }, [theme]);
  return (
    <div>
      <label>
        <input
          type="radio"
          name="theme"
          value={null}
          onInput={() => setTheme(null)}
          checked={!theme}
        />{" "}
        Clear theme
      </label>
      <label>
        <input
          type="radio"
          name="theme"
          value="light"
          onInput={() => setTheme("light")}
          checked={theme == "light"}
        />{" "}
        Light
      </label>
      <label>
        <input
          type="radio"
          name="theme"
          value="dark"
          onInput={() => setTheme("dark")}
          checked={theme == "dark"}
        />{" "}
        Dark
      </label>
    </div>
  );
};

export default ThemeSelector;
