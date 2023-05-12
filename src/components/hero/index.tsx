import { FunctionalComponent } from "preact";
import styles from "./style.module.css";

const Hero: FunctionalComponent = () => (
  <div class={styles.container}>
    <h1>
      Hello, I'm <strong>Klemen</strong>.
    </h1>
  </div>
);

export default Hero;
