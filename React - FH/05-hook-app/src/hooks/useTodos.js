import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReducer"


const initialState = []

const init = () => {
    return JSON.parse(localStorage.getItem('todos',)) || []
}

export const useTodos = () => {
    

    const [todos, dispatch] = useReducer(todoReducer, initialState,init)

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos))
        console.log(todos)

    }, [todos])
    

    const handleNewTodo = (todo) => {
        const action = {
            type:'[TODO] Add Todo',
            payload:todo
        }
        dispatch(action)
    }

    const handleDeleteTodo = (id)=>{
        dispatch({
            type:'[TODO] Remove Todo',
            payload:id
        })
    }
    const handleToggleTodo = (id)=>{
        dispatch({
            type:'[TODO] Toggle Todo',
            payload:id
        })
    }

    const todosCount = ()=>{
        return todos.length

    }

    const pendingTodosCount = ()=>{
        return todos.filter(todo=>!todo.done).length

    }

    return{
        todos,
        todosCount,
        pendingTodosCount,
        handleDeleteTodo,
        handleToggleTodo,
        handleNewTodo
    }
}