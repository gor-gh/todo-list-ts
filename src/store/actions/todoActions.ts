import * as constants from '../../constants';

export interface AddTodo {
    type: constants.ADD_TODO;
    title: string;
}

export interface RemoveTodo {
    type: constants.REMOVE_TODO;
    id: symbol;
}

export interface ToggleTodo {
    type: constants.TOGGLE_TODO;
    id: symbol;
}

export type TodoAction = AddTodo | RemoveTodo | ToggleTodo;

export function addTodo(title: string): AddTodo {
    return {
        type: constants.ADD_TODO,
        title
    }
}

export function removeTodo(id: symbol): RemoveTodo {
    return {
        type: constants.REMOVE_TODO,
        id
    }
}

export function toggleTodo(id: symbol): ToggleTodo {
    return {
        type: constants.TOGGLE_TODO,
        id
    }
}