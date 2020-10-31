import {TodoAction} from '../actions/todoActions';
import {TodoItem} from '../../types';
import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from '../../constants';

export function todos(state: TodoItem[] = [], action: TodoAction): TodoItem[] | [] {
    switch (action.type) {
        case ADD_TODO:
            return [...state, {
                id: Symbol(state.length),
                title: action.title,
                completed: false
            }];
        case REMOVE_TODO:
            return state.filter((todo: TodoItem) => todo.id !== action.id);
        case TOGGLE_TODO:
            return state.map((todo: TodoItem) => {
                if(action.id === todo.id){
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                } else {
                    return todo;
                }
            });
        default: return state;
    }
}

