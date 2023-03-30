import { useState } from 'react';

const ListRender = () => {

    const [list] = useState(["Valmir", "Audi", "Dudu"]);
    const [users, setUsers] = useState([
        { id: 1, name: "Valmir", age: 43 },
        { id: 2, name: "Marcia", age: 66 },
        { id: 3, name: "Pedro", age: 44 },
    ]);
    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);
        setUsers((prevUsers) => {
            console.log(prevUsers);
            return prevUsers.filter((user) => randomNumber !== user.id)
        });
    };

    return (
        <div>
            <ul>
                {list.map((item, i) => (<li key={i}>{item}</li>))}
            </ul>
            <ul>
                {users.map((user) => <li key={user.id}>{user.name} - {user.age}</li>)}
            </ul>
            <button onClick={deleteRandom}>Delete random user</button>
        </div >
    );
};

export default ListRender;
