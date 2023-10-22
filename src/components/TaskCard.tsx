import { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { TbEdit, TbTrashX } from "react-icons/tb";
import Tooltip from "./ui/tooltip";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

interface Props {
  task: Task;
  deleteTask: (id: Id) => void;
  updateTask: (id: Id, content: string) => void;
}

function TaskCard({ task, deleteTask, updateTask }: Props) {
  const [mouseIsOver, setMouseIsOver] = useState(false);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    },
    disabled: false,
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
        opacity-30
      bg-dark-500 p-2.5 h-[80px] min-h-[80px] items-center flex text-left rounded-xl  border-primary-500  cursor-grab relative
      "
      />
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-dark-700 relative group p-2.5   w-[220px]
      h-[80px] min-h-[80px] items-center flex text-left rounded  hover:ring-primary-950 cursor-grab  task"
    >
      <p className="my-auto h-[90%] w-full overflow-y-auto overflow-x-hidden truncate line-clamp-2 whitespace-pre-wrap">
        {task.content}
      </p>
      <div className="hidden group-hover:flex relative bg-dark-300 px-1 h-full rounded  flex-col justify-evenly items-center ">
        <Tooltip direction="right" className="cursor-pointer" name="Edit">
          <Sheet>
            <SheetTrigger>
              <TbEdit />
            </SheetTrigger>
            <SheetContent side={"right"} className=""></SheetContent>
          </Sheet>
        </Tooltip>
        <Tooltip direction="right" className="cursor-pointer" name="Delete">
          <TbTrashX />
        </Tooltip>
      </div>
    </div>
  );
}

export default TaskCard;
