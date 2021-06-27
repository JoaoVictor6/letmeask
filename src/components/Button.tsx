import { ButtonHTMLAttributes } from "react";
import "../styles/button.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export function Button({ isOutlined = false, ...props }: ButtonProps) {
  return <button className={`button ${isOutlined && "outline"}`} {...props} />;
}
