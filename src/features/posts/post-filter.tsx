import { ActionIcon, Button, Drawer, MultiSelect, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconAdjustments } from "@tabler/icons-react";
import { Controller, SubmitHandler, useFormContext } from "react-hook-form";
import { Select } from "~/components/inputs/select.tsx";
import { useSearchContext } from "~/context/search-context.tsx";

type FormValues = {
  title?: string;
  body?: string;
  favs?: string[];
};

export const PostFilter = () => {
  const [isDrawerLoading, drawerActions] = useDisclosure(false);
  const { setSearchQuery } = useSearchContext();
  const { register, handleSubmit } = useFormContext<FormValues>();

  const handleFormSubmit: SubmitHandler<FormValues> = (data) => {
    setSearchQuery(data);
  };

  return (
    <>
      <ActionIcon onClick={drawerActions.open}>
        <IconAdjustments size="1rem" stroke={1.5} />
      </ActionIcon>

      <Drawer
        offset={8}
        radius="md"
        opened={isDrawerLoading}
        onClose={drawerActions.close}
        title="Filter"
        position="right"
      >
        <form
          onSubmit={handleSubmit(handleFormSubmit)}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <TextInput {...register("title")} label="Title" placeholder="Input placeholder" />
          <TextInput {...register("body")} label="Content" placeholder="Input placeholder" />
          <Select
            checkIconPosition="left"
            data={["React", "Angular", "Svelte", "Vue"]}
            label="Control check icon"
            placeholder="Pick value"
            defaultValue="React"
          />
          <Controller
            name="favs"
            render={({ field: { value, onChange } }) => {
              return (
                <MultiSelect
                  value={value}
                  onChange={onChange}
                  label="Your favorite libraries"
                  placeholder="Pick value"
                  data={[
                    {
                      value: "1",
                      label: "React",
                    },
                    {
                      value: "2",
                      label: "Angular",
                    },
                  ]}
                />
              );
            }}
          />
          <Button type="submit">Search</Button>
        </form>
      </Drawer>
    </>
  );
};
