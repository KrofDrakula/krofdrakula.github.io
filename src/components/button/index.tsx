import type { FunctionalComponent, JSX } from "preact";
import styles from "./style.module.css";

export enum Variant {
  Primary = "primary",
  Secondary = "secondary",
}

type Props = {
  variant?: Variant;
  onClick?: JSX.DOMAttributes<HTMLButtonElement>["onClick"];
};

const Button: FunctionalComponent<Props> = ({
  variant = Variant.Primary,
  onClick,
  children,
}) => (
  <button class={[styles.button, styles[variant]].join(" ")} onClick={onClick}>
    {children}
  </button>
);

export default Button;
