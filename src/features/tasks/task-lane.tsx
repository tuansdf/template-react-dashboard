import { DndContext, DndContextProps, DragOverlay } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { useMemo, useState } from "react";
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

export const TaskLane = () => {
  const [activeId, setActiveId] = useState<number | string | undefined | null>(undefined);
  const [tasks, setTasks] = useState(allTasks);

  const activeTask = useMemo(() => {
    return tasks.find((item) => String(item.id) === String(activeId));
  }, [activeId, tasks]);

  const handleDragStart: DndContextProps["onDragStart"] = (event) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd: DndContextProps["onDragEnd"] = (event) => {
    const fromItem = event.active;
    const toItem = event.over;
    const fromIndex = tasks.findIndex((item) => item.id === fromItem.id);
    const toIndex = tasks.findIndex((item) => item.id === toItem?.id);
    setTasks((prev) => {
      return arrayToMove(prev, fromIndex, toIndex);
    });
  };

  return (
    <DndContext onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        <div className={classes["container"]}>
          {tasks.map((item) => {
            return <TaskLaneItem id={item.id} title={item.title} content={item.content} key={item.id} />;
          })}
        </div>
      </SortableContext>
      <DragOverlay>
        {!!activeId && !!activeTask && (
          <TaskLaneItem
            id={activeTask?.id || ""}
            title={activeTask?.title}
            content={activeTask.content}
            key={activeTask.id}
          />
        )}
      </DragOverlay>
    </DndContext>
  );
};
