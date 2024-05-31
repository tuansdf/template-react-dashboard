import { Checkbox, ColorPicker, DatePicker, Form, Input, InputNumber, Radio, Select, TimePicker } from "antd";
import { ComponentProps, ElementType, ReactNode, useId } from "react";
import { ControllerProps, FieldValues, useController } from "react-hook-form";
import { FileUpload } from "~/components/core/form/file-upload.tsx";

const defaultRequiredErrorMessage = "Vui lòng nhập trường bắt buộc";

type FormItemProps = ComponentProps<typeof Form.Item>;

type CommonInputProps<TFV extends FieldValues, TET extends ElementType> = {
  label?: ReactNode;
  required?: boolean;
  showHelp?: boolean;
  showFormItem?: boolean;
  showMargin?: boolean;
  formItemProps?: FormItemProps;
  controllerProps: Omit<ControllerProps<TFV>, "render">;
  component?: TET;
  inputType?: "input" | "checkbox" | "select";
} & ComponentProps<TET>;

export function CommonInputRHF<TFV extends FieldValues, TET extends ElementType>({
  label,
  required,
  showHelp = true,
  showMargin = true,
  showFormItem = true,
  formItemProps,
  component: Component,
  controllerProps: { rules, ...controllerProps },
  onChange: onChangeExternal,
  inputType = "input",
  ...restProps
}: CommonInputProps<TFV, TET>) {
  const id = useId();

  const {
    field: { onChange, value, onBlur },
    fieldState: { error },
  } = useController({
    rules: {
      required: {
        value: !!required,
        message: defaultRequiredErrorMessage,
      },
      ...rules,
    },
    ...controllerProps,
  });

  const errorMessage = error?.message;

  const inputComponent = (
    <Component
      status={errorMessage ? "error" : undefined}
      placeholder="Nhập thông tin"
      style={{ width: "100%" }}
      onBlur={onBlur}
      {...restProps}
      id={id}
      onChange={(...params: IGNORE[]) => {
        // @ts-ignore
        onChangeExternal?.(...params);
        // @ts-ignore
        return onChange(...params);
      }}
      value={inputType === "input" || inputType === "select" ? value : undefined}
      checked={inputType === "checkbox" ? value : undefined}
    />
  );

  return showFormItem ? (
    <Form.Item
      label={label}
      htmlFor={id}
      required={!!required}
      validateStatus={errorMessage ? "error" : undefined}
      help={showHelp ? errorMessage : undefined}
      style={{ marginBottom: !showMargin ? 0 : undefined }}
      {...formItemProps}
      children={inputComponent}
    />
  ) : (
    inputComponent
  );
}

export function InputRHF<TFV extends FieldValues, TET extends ElementType = typeof Input>(
  restProps: CommonInputProps<TFV, TET>,
) {
  return <CommonInputRHF component={Input} maxLength={255} {...restProps} />;
}

export function InputPasswordRHF<TFV extends FieldValues, TET extends ElementType = typeof Input.Password>(
  restProps: CommonInputProps<TFV, TET>,
) {
  return <CommonInputRHF component={Input.Password} {...restProps} />;
}

export function InputNumberRHF<TFV extends FieldValues, TET extends ElementType = typeof InputNumber>(
  restProps: CommonInputProps<TFV, TET>,
) {
  return <CommonInputRHF component={InputNumber} {...restProps} />;
}

export function TextAreaRHF<TFV extends FieldValues, TET extends ElementType = typeof Input.TextArea>(
  restProps: CommonInputProps<TFV, TET>,
) {
  return <CommonInputRHF component={Input.TextArea} maxLength={255} {...restProps} />;
}

export function SelectRHF<TFV extends FieldValues, TET extends ElementType = typeof Select>(
  restProps: CommonInputProps<TFV, TET>,
) {
  return (
    <CommonInputRHF
      component={Select}
      allowClear
      showSearch
      placeholder="Chọn"
      inputType="select"
      filterOption={(input: IGNORE, option: IGNORE) =>
        (String(option?.label) ?? "").toLowerCase().includes(input.toLowerCase())
      }
      {...restProps}
    />
  );
}

export function DateRangePickerRHF<TFV extends FieldValues, TET extends ElementType = typeof DatePicker.RangePicker>(
  restProps: CommonInputProps<TFV, TET>,
) {
  return (
    <CommonInputRHF
      component={DatePicker.RangePicker}
      placeholder={["Từ", "Đến"]}
      needConfirm={!!restProps.showTime}
      showTime={restProps.showTime}
      {...restProps}
    />
  );
}

export function TimeRangePickerRHF<TFV extends FieldValues, TET extends ElementType = typeof TimePicker.RangePicker>(
  restProps: CommonInputProps<TFV, TET>,
) {
  return <CommonInputRHF component={TimePicker.RangePicker} placeholder={["Từ", "Đến"]} {...restProps} />;
}

export function DatePickerRHF<TFV extends FieldValues, TET extends ElementType = typeof DatePicker>(
  restProps: CommonInputProps<TFV, TET>,
) {
  return <CommonInputRHF component={DatePicker} placeholder="Nhập thời gian" {...restProps} />;
}

export function TimePickerRHF<TFV extends FieldValues, TET extends ElementType = typeof DatePicker.TimePicker>(
  restProps: CommonInputProps<TFV, TET>,
) {
  return <CommonInputRHF component={DatePicker.TimePicker} placeholder="Nhập thời gian" {...restProps} />;
}

export function CheckboxRHF<TFV extends FieldValues, TET extends ElementType = typeof Checkbox>(
  restProps: CommonInputProps<TFV, TET>,
) {
  return (
    <CommonInputRHF
      component={Checkbox}
      style={{ marginBottom: "1.5rem" }}
      {...restProps}
      showFormItem={false}
      children={restProps.label}
      inputType="checkbox"
      status={undefined}
      onBlur={undefined}
      placeholder={undefined}
    />
  );
}

export function CheckboxGroupRHF<TFV extends FieldValues, TET extends ElementType = typeof Checkbox.Group>(
  restProps: CommonInputProps<TFV, TET>,
) {
  return (
    <CommonInputRHF
      component={Checkbox.Group}
      style={undefined}
      {...restProps}
      status={undefined}
      onBlur={undefined}
      placeholder={undefined}
    />
  );
}

export function RadioGroupRHF<TFV extends FieldValues, TET extends ElementType = typeof Radio.Group>(
  restProps: CommonInputProps<TFV, TET>,
) {
  return (
    <CommonInputRHF
      component={Radio.Group}
      style={undefined}
      {...restProps}
      status={undefined}
      onBlur={undefined}
      placeholder={undefined}
    />
  );
}

export function FileUploadRHF<TFV extends FieldValues, TET extends ElementType = typeof FileUpload>(
  restProps: CommonInputProps<TFV, TET>,
) {
  return (
    <CommonInputRHF
      component={FileUpload}
      style={undefined}
      {...restProps}
      status={undefined}
      onBlur={undefined}
      placeholder={undefined}
    />
  );
}

export function ColorPickerRHF<TFV extends FieldValues, TET extends ElementType = typeof ColorPicker>(
  restProps: CommonInputProps<TFV, TET>,
) {
  return (
    <CommonInputRHF
      component={ColorPicker}
      showText
      style={undefined}
      {...restProps}
      status={undefined}
      onBlur={undefined}
      placeholder={undefined}
    />
  );
}
