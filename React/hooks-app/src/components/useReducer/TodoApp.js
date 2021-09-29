import React, { useReducer } from 'react'
import { TodoAdd } from './TodoAdd'
import { TodoList } from './TodoList'
import { todoReducer } from './todoReducer'
import './styles.css'

const initTodo = [
    {
        id: new Date().getTime(),
        desc: 'Aprender React',
        done: false
    }
]

export const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, initTodo)

    const handleDelete = (todoId) => {
        const action = {
            type: 'delete',
            payload: todoId
        };

        dispatch(action);
    }

    const handleToggle = (todoId) => {
        const action = {
            type: 'toggle',
            payload:  todoId
        }
        dispatch(action);
    }

    const handleAddTODO = (newTodo) => {
        const action = {
            type: 'add',
            payload: newTodo
        }
        dispatch(action);
    }

    return (
        <div>
            <h1>Todo App ({ todos.length })</h1>
            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={ todos }
                        handleDelete= { handleDelete }
                        handleToggle= { handleToggle}
                    />
                </div>
                <div className="col-5">
                    <TodoAdd handleAddTODO={ handleAddTODO } />
                </div>
            </div>
        </div>
    )
}
