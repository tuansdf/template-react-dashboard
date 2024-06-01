import { useDraggable, useDroppable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { CSSProperties } from "react";
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
  } = useDraggable({
    id,
  });
  const { setNodeRef: setDropNodeRef } = useDroppable({
    id,
  });

  const styles: CSSProperties = {
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      className={classes["container"]}
      style={{ ...styles, display: "inline-block", width: "max-content" }}
      ref={(el) => {
        setDropNodeRef(el);
        setDragNodeRef(el);
      }}
      {...listeners}
      {...attributes}
    >
      <div>{title}</div>
      <div>{content}</div>
    </div>
  );
};
