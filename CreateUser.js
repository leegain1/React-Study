import React from 'react';

function CreateUser({ todo, onChange, onCreate }) {
    return (
        <div>
            <input
                name="todo"
                placeholder="할 일을 입력하세요"
                onChange={onChange}
                value={todo}
            />

            <button onClick={onCreate}>추가</button>
        </div>
    );
}

export default CreateUser;
