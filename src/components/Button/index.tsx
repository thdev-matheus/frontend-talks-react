import { SButton } from "./styles";
import { IButtonProps } from "./types";

export const Button = ({ text, ...rest }: IButtonProps) => {
  return <SButton {...rest}>{text}</SButton>;
};
