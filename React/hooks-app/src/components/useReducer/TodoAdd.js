import React from 'react'
import { useForm } from '../../hooks/useForm'

export const TodoAdd = ({ handleAddTODO }) => {
    const [ formValues, handleInputChange, reset ] = useForm({ description: '' })
    const { description } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();

        if( description.trim().length <= 1 ) return;

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        handleAddTODO(newTodo);
        reset();
    }

    return (
        <div>
            <h4>Add TODO</h4>
            <hr />
            <form onSubmit={ handleSubmit }>
                <input 
                    type="text"
                    name="description"
                    className="form-control"
                    autoComplete="off"
                    onChange={ handleInputChange }
                    value={ description }
                />
                <div className="d-grid mt-2">
                    <button
                        className="btn btn-outline-primary"
                        type="submit"
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    )
}
