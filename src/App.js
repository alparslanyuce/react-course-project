import {useReducer, useState, useMemo,useCallback } from "react";
import Header from "./components/Header";
import AddToDo from "./components/AddTodo";
import Todos from "./components/Todos";

function reducer(state, action){
  switch (action.type) {
    case 'SET_TODO':
      return{
        ...state,
        todo: action.value
      }
    case 'ADD_TODO':
      return{
        ...state,
        todo: '',
        todos: [
          ...state.todos,
          action.todo
        ]
      }
    case 'SET_SEARCH':
      return {
        ...state,
        search:action.value
      }
  }
}

function App() {

  const [count,setCount] = useState(0)
  const[state, dispatch] = useReducer(reducer, {
    todos: [],
    todo: '',
    search: ''
  })

  const submitHandle = useCallback(e => {
    e.preventDefault()
    dispatch({
      type: 'ADD_TODO',
      todo: state.todo
    })
  }, [state.todo])

  const onChange = useCallback(e=> {
    dispatch({
      type: 'SET_TODO',
      value: e.target.value
    })
  }, [])

  const searchHandle = e=> {
    dispatch({
      type:'SET_SEARCH',
      value: e.target.value
    })
  }

  const filteredTodos = useMemo(() => {
    state.todos.filter(todo => todo.toLocaleLowerCase('TR').includes(state.search.toLocaleLowerCase('TR')))
  },[state.todos, state.search]);
    return (
      
    <>
    <Header />
      <h3>{count}</h3>
      <button onClick= {() => setCount(count =>count +1)}>
       Arttır
      </button>
      <hr />
      <h1>Todo App</h1>
      <input type="text" value={state.search} placeholder="todolarda ara" onChange={searchHandle} />
      <hr />
      <AddToDo onChange={onChange} submitHandle={submitHandle} todo={state.todo} />
    <Todos todos={filteredTodos} />
    </>
 );
}

export default App;
