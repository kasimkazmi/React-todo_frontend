import React, { useState } from "react";
import { useTodo } from "../context";

export default function TodoForm() {
  const [todo, setodo] = useState();
  const {addTodo} = useTodo();


   const handleSubmit = (e) => {
     e.preventDefault();
     if(todo.trim()==="") return;
     addTodo({todo});
     setodo("");
   };
  return (
    <form  onSubmit={handleSubmit}
    className="flex">
      <section className="my-7 flex w-full">
        <input
          onChange={(e) => setodo(e.target.value)}
          type="text"
          placeholder="Write todo."
          className="w-full border
           p-3 outline-none rounded-l-lg
           duration-150 text-black bg-white"
        />

        <button type="submit"
          className="  text-xl bg-green-600
         text-white px-4 py-1  rounded-r-lg"
        >
          Add
        </button>
      </section>
    </form>
  );
}
