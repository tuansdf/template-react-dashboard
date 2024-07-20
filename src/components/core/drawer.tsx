import { Drawer as ADrawer, DrawerProps } from "antd";
import classes from "./drawer.module.scss";

type Props = DrawerProps;

export const Drawer = (props: Props) => {
  return (
    <ADrawer
      {...props}
      classNames={{
        mask: classes["mask"],
        content: classes["content"],
        body: classes["body"],
      }}
    />
  );
};
