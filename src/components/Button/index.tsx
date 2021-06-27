import { ButtonHTMLAttributes } from "react";
import { ButtonElement } from "./style";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

export function Button({ isOutlined = false, ...props }: ButtonProps) {
  return (
    <ButtonElement className={`button ${isOutlined && "outline"}`} {...props} />
  );
}
