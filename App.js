import React, { useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function App() {
    const [inputs, setInputs] = useState({
        todo: '',
        // email: ''
    });
    const { todo, email } = inputs;
    const onChange = e => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };
    const [users, setUsers] = useState([
        // {
        //     id: 1,
        //     username: 'velopert',
        //     email: 'public.velopert@gmail.com',
        //     active: true
        // },
        // {
        //     id: 2,
        //     username: 'tester',
        //     email: 'tester@example.com',
        //     active: false
        // },
        // {
        //     id: 3,
        //     username: 'liz',
        //     email: 'liz@example.com',
        //     active: false
        // }
    ]);

    const nextId = useRef(4);
    const onCreate = () => {
        const user = {
            id: nextId.current,
            todo

        };
        setUsers(users.concat(user));

        setInputs({
            todo: '',
            // email: ''
        });
        nextId.current += 1;
    };

    const onRemove = id => {

        setUsers(users.filter(user => user.id !== id));
    };
    const onToggle = id => {
        setUsers(
            users.map(user =>
                user.id === id ? { ...user, active: !user.active } : user
            )
        );
    };
    return (
        <>
            <CreateUser
                todo={todo}
                // email={email}
                onChange={onChange}
                onCreate={onCreate}
            />
            <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
        </>
    );
}

export default App;
