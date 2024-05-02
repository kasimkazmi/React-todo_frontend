import React, { useRef, useState } from "react";
import { useTodo } from "../context";

export default function TodoList({ todo }) {
  const { deleteTodo, updatetodo, toggleTodo } = useTodo();

  const inputRef = useRef(null);
  const [isEdit, setIsedit] = useState(false);
  const [isUpdate, setIsUpdate] = useState(todo.todo);

  return (
    <>
      <div className="flex w-full items-center border-black/10 px-3 py-2 gap-x-3 shadow-l">
        <input
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          type="checkbox"
          className="cursor-pointer whitespace-pre-wrap size-6 scale-150 overflow-wrap-break-word"
        />
        <input
          ref={inputRef}
          type="text"
          onChange={(e) => {
            if (inputRef?.current?.value.length < 3) deleteTodo(todo.id);
            setIsUpdate(e.target.value);
          }}
          value={isUpdate}
          readOnly={!isEdit}
          className={`${
            todo.completed && "border-0 line-through  bg-red-500 outline-none"
          }outline-none text-black w-[500px] rounded-lg p-2 duration-200`}
        />
        <button
          onClick={() => {
            if (todo.completed) return;
            isEdit
              ? updatetodo(isUpdate, todo.id) ?? setIsedit(false)
              : setIsedit(!isEdit);
          }}
          className="text-xl bg-inherit hover:brightness-75 p-2 text-green-500"
        >
          {isEdit ? "Save" : "Edit"}
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="text-xl hover:brightness-75 bg-inherit p-2 text-red-500"
        >
          Delete
        </button>
      </div>
    </>
  );
}
