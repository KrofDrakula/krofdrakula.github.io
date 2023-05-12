import type { FunctionalComponent } from "preact";
import styles from "./style.module.css";

const Background: FunctionalComponent = () => (
  <div class={styles.background}>
    <div class={styles.overlay} />
  </div>
);

export default Background;
