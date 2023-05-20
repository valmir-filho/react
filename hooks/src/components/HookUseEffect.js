// React.
import { useEffect, useState } from 'react';

const HookUseEffect = () => {
    // UseEffect without dependencies.
    useEffect(() => {
        console.log('Estou sendo executado.');
    });
    const [number, setNumber] = useState(1);
    const changeSomething = () => { setNumber(number + 1) };
    // UseEffect with empty dependencies array.
    useEffect(() => {
        console.log('Serei executado apenas uma vez!')
    }, []);

    return (
        <div>
            <h2>useEffect</h2>
            <p>Número: {number}</p>
            <button onClick={changeSomething}>Executar!</button>
            <hr />
        </div>
    );
};

export default HookUseEffect;
