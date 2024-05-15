import { Table } from "@mantine/core";
import { Post } from "~/types/post.type.ts";

type Props = {
  data: Post[];
};
export const PostTable = ({ data }: Props) => {
  return (
    <div
      style={{
        overflow: "auto",
        maxHeight: "var(--table-height)",
      }}
    >
      <Table stickyHeader>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>ID</Table.Th>
            <Table.Th>User ID</Table.Th>
            <Table.Th>Title</Table.Th>
            <Table.Th>Body</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {data.map((element) => (
            <Table.Tr key={element.id}>
              <Table.Td>{element.id}</Table.Td>
              <Table.Td>{element.userId}</Table.Td>
              <Table.Td>{element.title}</Table.Td>
              <Table.Td>{element.body}</Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </div>
  );
};
