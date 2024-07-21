import { Drawer as ADrawer, DrawerProps } from "antd";
import classes from "./drawer.module.scss";

type Props = { withPadding?: boolean } & DrawerProps;

export const Drawer = ({ withPadding = true, ...props }: Props) => {
  return (
    <ADrawer
      {...props}
      classNames={{
        mask: classes["mask"],
        content: classes["content"],
        body: !withPadding ? classes["body"] : undefined,
      }}
    />
  );
};
