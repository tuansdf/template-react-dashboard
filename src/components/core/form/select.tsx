import { Select as MSelect, SelectProps } from "antd";

type Props = SelectProps;

export const Select = (props: Props) => {
  return <MSelect {...props} />;
};
