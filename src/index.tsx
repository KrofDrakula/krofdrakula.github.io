import { Route, Router } from "preact-router";
// Code-splitting is automated for `routes` directory
import Home from "./routes/home";
import "./style/index.css";
import { useState } from "preact/hooks";
import { ColorTheme, Theme } from "./utils/contexts";

export default function App() {
  const [theme, setTheme] = useState<Theme | null>(null);
  return (
    <ColorTheme.Provider value={{ theme, setTheme }}>
      <Router>
        <Route path="/" component={Home} />
      </Router>
    </ColorTheme.Provider>
  );
}
