import React from 'react';

function User({ user, onRemove, onToggle }) {
    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'red' : 'black'
                }}
                onClick={() => onToggle(user.id)}
            >
                {user.todo}
            </b>
            &nbsp;
            
            <button onClick={() => onRemove(user.id)}>삭제</button>
            <button onClick={() => onToggle(user.id)}>완료</button>
        </div>
    );
}

function UserList({ users, onRemove, onToggle }) {
    return (
        <div>
            {users.map(user => (
                <User
                    user={user}
                    key={user.id}
                    onRemove={onRemove}
                    onToggle={onToggle}
                />
            ))}
        </div>
    );
}

export default UserList;
