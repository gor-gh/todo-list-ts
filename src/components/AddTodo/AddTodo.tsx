import React, {useState} from 'react';
import './AddTodo.css';

export interface Props {
    addTodo: (title: string) => void;
}

const AddTodo = ({addTodo}: Props) => {
    const [title, setTitle] = useState('');
    return (
        <div className='add-todo-form-container'>
            <form
                onSubmit={e => {
                    e.preventDefault();
                    addTodo(title);
                    setTitle('');
                }}
            >
                <input
                    className='add-todo-input'
                    type="text"
                    onChange={e => setTitle(e.target.value)}
                    value={title}
                />
                <input
                    className='add-todo-submit'
                    type="submit"
                    value='Add Todo'/>
            </form>
        </div>
    )
}

export default AddTodo;