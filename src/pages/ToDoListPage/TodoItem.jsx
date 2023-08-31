import React, { useState } from 'react';

function TodoItem({ todoItem, onRemove }) {
    const [isChecked, setIsChecked] = useState(false);

    const handleClickRadioButton = e => {
        console.log("handleClickRadioButton?? : " + e.target.value);
        setIsChecked(e.target.value);
    };

    return (
        <div className='todoItem'>
            <input className='radiobtn' type='radio' onChange={handleClickRadioButton} />
            <div>
                <div>
                    {todoItem.date}
                </div>
                <div className={`item-text ${isChecked ? "checked" : ""}`}>
                    {todoItem.todoContent}
                </div>
            </div>
            {isChecked && <button type="button" className='deletebtn' onClick={() => onRemove(todoItem.id)}>X</button>}
        </div>
    );
}

export default TodoItem;