import { SortableContext, useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useMemo, useState } from "react";
import TaskCard from "./TaskCard";
import { PiPlusCircleDuotone, PiTrash } from "react-icons/pi";
import { ScrollArea } from "./ui/scroll-bar";

interface Props {
  column: Column;
  updateColumn: (id: Id, title: string) => void;

  createTask: (columnId: Id) => void;
  updateTask: (id: Id, content: string) => void;
  deleteTask: (id: Id) => void;
  tasks: Task[];
}

function ColumnContainer({
  column,
  createTask,
  tasks,
  deleteTask,
  updateTask,
}: Props) {
  const [editMode, setEditMode] = useState(false);

  const tasksIds = useMemo(() => {
    return tasks.map((task) => task.id);
  }, [tasks]);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: "Column",
      column,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="
      bg-dark-700
      opacity-40
      w-[250px]
      h-[500px]
      max-h-[500px]
      rounded
      flex
      flex-col
      "
      ></div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="
  bg-dark-950
  w-[250px]
  h-[500px]
  max-h-[500px]
  rounded
  flex
  flex-col
  "
    >
      {/* Column title */}
      <div
        {...attributes}
        {...listeners}
        className="
        cursor-default
      bg-dark-600
      text-md
      min-h-[60px]
      shadow-md
      shadow-dark-600
      z-20
      rounded
      rounded-b-none
      p-3
      font-bold
      border-columnBackgroundColor
      flex
      items-center
      justify-between
      "
      >
        <div className="flex justify-between items-center w-full">
          <div>{column.title}</div>
          <div
            className="
        flex
        justify-center
        items-center
        bg-dark-700
        px-2
        py-1
        text-sm
        rounded-full
        "
          >
            0
          </div>
        </div>
      </div>

      {/* Column task container */}
      <ScrollArea className="flex flex-grow flex-col  p-2 h-fit">
    <div className="flex flex-grow flex-col  p-2 h-fit gap-2">
        <SortableContext items={tasksIds}>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          ))}
        </SortableContext>

    </div>
      </ScrollArea>
      {/* Column footer */}
      <button
        className="flex gap-2 items-center  rounded-md p-4  hover:text-primary-500 active:bg-dark-950"
        onClick={() => {
          createTask(column.id);
        }}
      >
        <PiPlusCircleDuotone />
        Add task
      </button>
    </div>
  );
}

export default ColumnContainer;
