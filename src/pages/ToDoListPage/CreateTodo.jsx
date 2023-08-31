import React from 'react';

function CreateTodo({ todoContent, onChange, onCreate }) {
    return (
        <div className='new-todo'>
            <input className='new-todo-inp' name="todoContent" placeholder="Add Task" onChange={onChange} value={todoContent} />
            <button className='new-todo-btn' onClick={onCreate}>Add</button>
        </div>
    );
}

export default CreateTodo;