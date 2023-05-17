// React.
import { useState } from 'react';

const HookUseState = () => {
    // UseState: used to manage values.
    let userName = 'João';
    const [name, setName] = useState('Valmir');
    const changeNames = () => {
        userName = 'João Silva';
        setName('Valmir Moro');
    };

    return (
        <div>
            {/* UseState: used to manage values. */}
            <h2>useState</h2>
            <p>Variável: {userName} </p>
            <p>useState: {name} </p>
            <button onClick={changeNames}>Alterar nomes</button>
            <hr />
        </div>
    );
};

export default HookUseState;