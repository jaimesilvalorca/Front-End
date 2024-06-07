import { useState } from "react"
import { useGetTodoQuery } from "./store/apis"


export const TodoApp = () => {

    // const {data:todos = [],isLoading} = useGetTodosQuery()

    const [todoId, setTodoId] = useState(1)
    const {data:todo,isLoading} = useGetTodoQuery(todoId)
    console.log(todo)

    const nextTodo = () =>{
        setTodoId(todoId +1 )
    }

    const prevTodo= ()=>{
        if(todoId === 1) return
        setTodoId(todoId-1)
    }


  return (
    <>
    <h1>Todos - RTK QUery</h1>
    <hr />
    <h4>isLoading: {isLoading? 'true' :'false'}</h4>
    <pre>{JSON.stringify(todo)}</pre>
    {/* <ul>
        {todo.map(todo=>(
            
            <li key={todo.id}>
                <strong>{todo.completed ? 'DONE':'PENDING'} </strong>    
                {todo.title}
                </li>
        ))}
    </ul> */}
    <button
    onClick={()=>nextTodo()}
    >
        next Todo
    </button>
    <button
    onClick={()=>prevTodo()}
    >
        prev Todo
    </button>
    </>
  )
}
