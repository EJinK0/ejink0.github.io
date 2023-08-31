import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onRemove }) {
    return (
        <div className='todo-list'>
            {todos.map(todoItem => (
                <TodoItem todoItem={todoItem} key={todoItem.id} onRemove={onRemove} />
            ))}
        </div>
    );
}

export default TodoList;