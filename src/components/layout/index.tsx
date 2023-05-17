import { ComponentChildren, FunctionalComponent } from "preact";
import styles from "./style.module.css";

interface Props {
  hero: ComponentChildren;
}

const Layout: FunctionalComponent<Props> = ({ hero, children }) => {
  return (
    <div class={styles.layout}>
      {hero ? <header class={styles.hero}>{hero}</header> : null}
      <main class={styles.content}>{children}</main>
    </div>
  );
};

export default Layout;
