import { SettingOutlined } from "@ant-design/icons";
import { Button, Drawer, Form } from "antd";
import { SubmitHandler, useFormContext } from "react-hook-form";
import { InputRHF, SelectRHF } from "~/components/inputs/input-rhf.tsx";
import { useSearchContext } from "~/context/search-context.tsx";
import { useDisclosure } from "~/hooks/use-toggle.tsx";

type FormValues = {
  title?: string;
  body?: string;
  favs?: string[];
};

export const PostFilter = () => {
  const [isDrawerOpen, drawerActions] = useDisclosure(false);
  const { setSearchQuery } = useSearchContext();
  const { control, handleSubmit } = useFormContext<FormValues>();

  const handleFormSubmit: SubmitHandler<FormValues> = (data) => {
    setSearchQuery(data);
  };

  return (
    <>
      <Button icon={<SettingOutlined size={16} />} onClick={drawerActions.open}></Button>

      <Drawer onClose={drawerActions.close} open={isDrawerOpen} title="Filter">
        <Form layout="vertical" onSubmitCapture={handleSubmit(handleFormSubmit)}>
          <InputRHF controllerProps={{ control, name: "title" }} label="Title" />
          <InputRHF controllerProps={{ control, name: "body" }} label="Body" />
          <SelectRHF
            controllerProps={{ control, name: "favs" }}
            label="Favs"
            options={[
              {
                label: "A",
                value: "A",
              },
              {
                label: "B",
                value: "B",
              },
              {
                label: "C",
                value: "C",
              },
            ]}
          />
          <Button htmlType="submit">Search</Button>
        </Form>
      </Drawer>
    </>
  );
};
