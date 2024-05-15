import { ScrollArea as MScrollArea, ScrollAreaProps } from "@mantine/core";
import classes from "./scroll-area.module.scss";

type Props = ScrollAreaProps;
export const ScrollArea = (props: Props) => {
  return (
    <MScrollArea
      classNames={{
        thumb: classes["thumb"],
      }}
      {...props}
    />
  );
};
