import { SubmitHandler, useForm } from "react-hook-form";
import { Button } from "~/components/core/button.tsx";
import { Form } from "~/components/core/form/form.tsx";
import { RichTextEditor } from "~/components/core/form/rich-text-editor.tsx";
import { CheckboxRHF, InputTextRHF, TextAreaRHF } from "~/components/helpers/form/input-rhf.tsx";
import { useReactQuill } from "~/hooks/use-react-quill.tsx";
import fclasses from "~/styles/form.module.scss";

type FormValues = {
  name?: string;
  code?: string;
  checkbox?: boolean;
  description?: string;
};

export const PostCreateForm = () => {
  const { quillRef } = useReactQuill();
  const { control, handleSubmit } = useForm<FormValues>();

  const handleFormSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <Form className={fclasses["container"]} onSubmitCapture={handleSubmit(handleFormSubmit)}>
      <div className={fclasses["row-xl"]}>
        <InputTextRHF controllerProps={{ control, name: "name" }} label="Name" required />
        <InputTextRHF controllerProps={{ control, name: "code" }} label="Code" />
        <CheckboxRHF controllerProps={{ control, name: "checkbox" }} label="Check">check</CheckboxRHF>
      </div>
      <TextAreaRHF controllerProps={{ control, name: "description" }} label="Description" />
      <RichTextEditor quillRef={quillRef} />
      <Button htmlType="submit">Submit</Button>
    </Form>
  );
};
