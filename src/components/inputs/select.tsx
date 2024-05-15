import { Select as MSelect, SelectProps } from "@mantine/core";

type Props = SelectProps;

export const Select = (props: Props) => {
  return <MSelect {...props} />;
};
