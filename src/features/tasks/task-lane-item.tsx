import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { CSSProperties } from "react";
import { Card } from "~/components/core/card.tsx";
import classes from "./task-lane-item.module.scss";

type Props = {
  id: string | number;
  title: string;
  content: string;
};

export const TaskLaneItem = ({ id, title, content }: Props) => {
  const {
    attributes,
    listeners,
    transform,
    setNodeRef: setDragNodeRef,
    transition,
    isDragging,
  } = useSortable({
    id,
  });

  const styles: CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Card
      title={title}
      size="small"
      style={{ ...styles, opacity: isDragging ? "0.5" : undefined }}
      ref={setDragNodeRef}
      {...listeners}
      {...attributes}
      className={classes["container"]}
    >
      {content}
    </Card>
  );
};
