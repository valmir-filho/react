import { useState } from 'react';

const ListRender = () => {

    const [list] = useState(["Valmir", "Audi", "Dudu"]);

    const [users] = useState([
        { id: 1, name: "Valmir", age: 43 },
        { id: 123121, name: "Marcia", age: 66 },
        { id: 23423423, name: "Pedro", age: 44 },
    ]);

    return (
        <div>
            <ul>
                {list.map((item, i) => (<li key={i}>{item}</li>))}
            </ul>
            <ul>
                {users.map((user) => <li key={user.id}>{user.name} - {user.age}</li>)}
            </ul>
        </div >
    );
};

export default ListRender;
