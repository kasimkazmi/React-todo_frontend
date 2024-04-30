import { useState } from "react";
import { TodoForm ,TodoList} from "./components/";
import { TodoPrvoider } from "./context";



export default function App() {
const [todos, setTodos] = useState([])
console.log(todos,"todos");
const addTodo=(todo)=>
{
setTodos ((prev)=> [...prev, {id:Date.now(), ...todo, completed :false} ])

}
  return (

    <TodoPrvoider  value={{todos, addTodo}}>
    <div className=" bg-gray-900 ">
      <div className=" w-full h-screen  max-w-xl
       mx-auto text-white">
        <TodoForm />
        <TodoList />
      </div>
    </div>
  </TodoPrvoider>

  );

}
