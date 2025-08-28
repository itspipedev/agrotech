import type { ComponentPropsWithoutRef } from "react";

type ImageProps = ComponentPropsWithoutRef<'img'>;
function Image(props: ImageProps) { return <img {...props} />; }

export default Image;