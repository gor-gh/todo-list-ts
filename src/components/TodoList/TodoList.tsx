import React from 'react';
import {TodoItem} from "../../types";
import Todo from '../../containers/Todo';
import AddTodo from "../../containers/AddTodo";
import './TodoList.css';

export interface Props {
    todos: TodoItem[];
}

const TodoList = ({todos}: Props) => (
  <div className='todo-list'>
    <h1 className='todo-list-heading'>Todos</h1>
    <div>
        {
            todos.map((todo, index) => (
                <Todo key={index} todo={todo} />
            ))
        }
    </div>
    <AddTodo />
  </div>
);

export default TodoList;