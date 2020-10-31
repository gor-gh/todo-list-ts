import React from 'react';
import {TodoItem} from '../../types';
import './Todo.css';

export interface Props {
    todo: TodoItem;
    onTodoToggle: () => void;
    onTodoDelete: () => void;
}

const Todo = ({todo, onTodoToggle, onTodoDelete}: Props) => (
    <div
        className={`todo ${todo.completed ? 'todo-done' : 'todo-process'}`}
        onDoubleClick={onTodoToggle}
    >
        <span className='todo-title'>{todo.title}</span>
        <span>
            <button
                className='todo-remove-button'
                onClick={onTodoDelete}
            >
                &times;
            </button>
        </span>
    </div>
);

export default Todo;