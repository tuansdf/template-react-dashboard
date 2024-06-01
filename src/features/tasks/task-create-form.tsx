import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Form, FormItem, RichTextEditor } from "~/components/core";
import { TextInputRHF, TextAreaRHF } from "~/components/helpers/form/input-rhf.tsx";
import { useReactQuill } from "~/hooks/use-react-quill.tsx";
import fclasses from "~/styles/form.module.scss";

type FormValues = {
  name?: string;
  code?: string;
  checkbox?: boolean;
  description?: string;
};

export const TaskCreateForm = () => {
  const { quillRef } = useReactQuill();
  const { control, handleSubmit } = useForm<FormValues>();

  const handleFormSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <Form className={fclasses["container"]} onSubmitCapture={handleSubmit(handleFormSubmit)}>
      <div className={fclasses["row-xl"]}>
        <TextInputRHF controllerProps={{ control, name: "name" }} label="Name" required />
        <TextInputRHF controllerProps={{ control, name: "code" }} label="Code" />
      </div>
      <TextAreaRHF controllerProps={{ control, name: "description" }} label="Description" />
      <FormItem label="Content" required>
        <RichTextEditor quillRef={quillRef} />
      </FormItem>
      <Button htmlType="submit">Submit</Button>
    </Form>
  );
};
