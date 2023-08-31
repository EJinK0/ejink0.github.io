import React, { useState, useRef } from 'react';
import './TodoListPage.scss';
import CreateTodo from './CreateTodo';
import TodoList from './TodoList';

function TodoListPage() {
    const [arrayData, setArrayData] = useState([]);

    const [inputs, setInputs] = useState({ todoContent: '' });
    const { todoContent } = inputs;

    const nextId = useRef(0);

    const onChange = e => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };

    const onCreate = () => {
        const today = new Date();
        const month = today.getMonth() + 1;

        const todoItem = {
            id: nextId.current,
            date: today.getFullYear() + '-' + month + '-' + today.getDate(),
            todoContent
        };

        setArrayData(arrayData.concat(todoItem));
        setInputs({ todoContent: '' });
        console.log("id: " + todoItem.id);
        nextId.current += 1;
    };

    const onRemove = id => {
        console.log("onRemove id: " + id);
        setArrayData(arrayData.filter(todoItem => todoItem.id !== id));
    }

    return (
        <div className='todo'>
            <CreateTodo
                todoContent={todoContent}
                onChange={onChange}
                onCreate={onCreate}
            />

            <TodoList
                todos={arrayData}
                onRemove={onRemove}
            />

        </div>
    )
}

export default TodoListPage;
