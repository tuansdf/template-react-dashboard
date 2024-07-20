import { Button as AButton, ButtonProps } from "antd";
import { cn } from "~/utils/classnames.ts";
import classes from "./button.module.scss";

type Props = ButtonProps;

export const Button = ({ className, ...props }: Props) => {
  return <AButton className={cn(classes["container"], className)} {...props} />;
};
