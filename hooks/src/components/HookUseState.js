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
    // UseState and input.
    const [age, setAge] = useState(18);
    const handleSubmit = (e) => {
        e.preventDefault();
        // Send to an API.
        console.log(age);
    };

    return (
        <div>
            {/* UseState: used to manage values. */}
            <h2>useState</h2>
            <p>Variável: {userName} </p>
            <p>useState: {name} </p>
            <button onClick={changeNames}>Alterar nomes</button>
            {/* UseState and input. */}
            <p>Digite a sua idade:</p>
            <form onSubmit={handleSubmit}>
                {/* Controlled input. */}
                <input type='text' value={age} onChange={e => setAge(e.target.value)} />
                <input type='submit' value='Enviar' />
                <p>Você tem {age} anos.</p>
            </form>
            <hr />
        </div>
    );
};

export default HookUseState;
