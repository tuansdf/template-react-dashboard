import { Avatar as AAvatar, AvatarProps } from "antd";
import { useMemo } from "react";
import classes from "./avatar.module.scss";

type Props = { name?: string } & AvatarProps;

export const Avatar = ({ children, name, ...props }: Props) => {
  const initial = useMemo(() => {
    return name
      ?.split(" ")
      .map((text) => text[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  }, [name]);

  return (
    <AAvatar {...props}>
      <span className={classes["name"]}>{initial}</span>
    </AAvatar>
  );
};
