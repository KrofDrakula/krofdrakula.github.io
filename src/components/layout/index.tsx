import { FunctionalComponent } from "preact";
import styles from "./style.module.css";

export const types = {
  hero: styles.hero,
} as const;

const Layout: FunctionalComponent = ({ children }) => (
  <div class={styles.layout}>{children}</div>
);

export default Layout;
