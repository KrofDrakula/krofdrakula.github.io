import type { FunctionalComponent } from "preact";
import styles from "./style.module.css";
import { createVars } from "../../utils/components";

interface Props {
  minWidth?: string | number;
  gap?: string | number;
}

const Grid: FunctionalComponent<Props> = ({
  children,
  gap,
  minWidth = 240,
}) => {
  const style = createVars({ gap, minWidth });
  return (
    <div class={styles.container} style={style}>
      {children}
    </div>
  );
};

export default Grid;
