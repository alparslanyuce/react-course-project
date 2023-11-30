import { memo } from "react"
function ToDoItem({todo}){
    return(
    <li>
        {todo}
    </li>
    )
}
export default memo(ToDoItem)