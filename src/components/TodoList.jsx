import React from "react";
 
export default function TodoList() {
return (
  <div className="flex w-full items-center border-black/10 px-3 py-2 gap-x-3 shadow-lg text-white">
   <input
    type="checkbox"
    className="cursor-pointer whitespace-pre-wrap size-6 scale-150 overflow-wrap-break-word"
   />
   <input
    type="text"
    className="outline-none text-black w-[500px] rounded-lg p-2 duration-200"
   />
   <button className="text-xl bg-inherit hover:brightness-75 p-2 text-green-500">
    Edit
   </button>
   <button className="text-xl hover:brightness-75 bg-inherit p-2 text-red-500">
    Delete
   </button>
  </div>
);
}