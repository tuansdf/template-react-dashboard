import { DndContext, DndContextProps } from "@dnd-kit/core";
import { useState } from "react";
import { TaskLaneItem } from "~/features/tasks/task-lane-item.tsx";
import { arrayToMove } from "~/utils/array.util.ts";
import classes from "./task-lane.module.scss";

const allTasks: Task[] = [
  {
    id: 1,
    title: "Task 1",
    content: "Task content 1",
  },
  {
    id: 2,
    title: "Task 2",
    content: "Task content 2",
  },
  {
    id: 3,
    title: "Task 3",
    content: "Task content 3",
  },
  {
    id: 4,
    title: "Task 4",
    content: "Task content 4",
  },
  {
    id: 5,
    title: "Task 5",
    content: "Task content 5",
  },
];

type Task = {
  id: number;
  title: string;
  content: string;
};

type Props = {
  tasks: Task[];
};

export const TaskLane = () => {
  const [tasks, setTasks] = useState(allTasks);

  const handleDragStart: DndContextProps["onDragStart"] = (event) => {
    console.log(event.active.id);
  };

  const handleDragEnd: DndContextProps["onDragEnd"] = (event) => {
    const fromItem = event.active;
    const toItem = event.over;
    if (!toItem || !fromItem) return;
    const fromIndex = tasks.findIndex((item) => item.id === fromItem.id);
    const toIndex = tasks.findIndex((item) => item.id === toItem.id);
    if (!fromIndex || !toIndex || fromIndex === toIndex) return;
    setTasks((prev) => {
      return arrayToMove(prev, fromIndex, toIndex);
    });
  };

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className={classes["container"]}>
        {tasks.map((item) => {
          return <TaskLaneItem id={item.id} title={item.title} content={item.content} key={item.id} />;
        })}
      </div>
    </DndContext>
  );
};
