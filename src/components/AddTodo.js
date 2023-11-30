import { memo } from "react"
function AddToDo({submitHandle, onChange, todo  }){
    return(
    <form onSubmit={submitHandle}>
        <input type="text" value={todo} onChange={onChange} />
        <button disable={!todo} type="submit">Ekle</button>
    </form>
    )
}
export default memo(AddToDo)