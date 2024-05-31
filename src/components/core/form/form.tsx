import { Form as FormM, FormProps } from "antd";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<FormProps>;

export const Form = (props: Props) => {
  return <FormM layout="vertical" {...props} />;
};
