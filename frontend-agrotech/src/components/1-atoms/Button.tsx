import type { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button">;
function Button({ children, ...props }: ButtonProps) {
  return <button {...props}>{children}</button>;
}

export default Button;
