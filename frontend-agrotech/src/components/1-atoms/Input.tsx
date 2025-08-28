import type { ComponentPropsWithoutRef } from "react";

type InputProps = ComponentPropsWithoutRef<'input'>;
function Input(props: InputProps) { return <input {...props} />; }

export default Input;
