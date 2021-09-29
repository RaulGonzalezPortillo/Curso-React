const initTodos = [
    {
        id: 1,
        todo: 'Comprar el pan',
        done: false
    }
];

const todoReducer = ( state = initTodos, action ) => {
    if( action?.type === 'add' ) {
        return [...state, action.payload];
    }
    return state;
}

let todos = todoReducer();
console.log(todos);

const newTodo = {
    id: 2,
    todo: 'Aprender React',
    done: false
}

const agregarTodoAction = {
    type: 'add',
    payload: newTodo
}

todos = todoReducer (todos, agregarTodoAction );
console.log(todos);