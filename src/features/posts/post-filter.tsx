import { IconAdjustments } from "@tabler/icons-react";
import { Button, Drawer, Form, Input, Select } from "antd";
import { Controller, SubmitHandler, useFormContext } from "react-hook-form";
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
      <Button icon={<IconAdjustments size="1rem" stroke={1.5} />} onClick={drawerActions.open}></Button>

      <Drawer onClose={drawerActions.close} open={isDrawerOpen} title="Filter">
        <Form layout="vertical" onSubmitCapture={handleSubmit(handleFormSubmit)}>
          <Form.Item label="Title">
            <Controller
              control={control}
              name="title"
              render={({ field: { value, onChange } }) => {
                return <Input type="text" value={value} onChange={onChange} />;
              }}
            />
          </Form.Item>
          <Form.Item label="Body">
            <Controller
              control={control}
              name="body"
              render={({ field: { value, onChange } }) => {
                return <Input type="text" value={value} onChange={onChange} />;
              }}
            />
          </Form.Item>
          <Form.Item label="Favs">
            <Controller
              control={control}
              name="favs"
              render={({ field: { value, onChange } }) => {
                return (
                  <Select
                    value={value}
                    onChange={onChange}
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
                );
              }}
            />
          </Form.Item>
          <Button htmlType="submit">Search</Button>
        </Form>
      </Drawer>
    </>
  );
};
