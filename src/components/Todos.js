import ToDoItem from "./ToDoItem";
import { memo } from "react";
function Todos({todos}){
    return (
        <ul>
        {todos.map((todo, index) => 
        <ToDoItem todo={todo}  key={index} />)}
      </ul>
    )
}
export default memo(Todos)