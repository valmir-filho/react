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
        console.log('Serei executado apenas uma vez!');
    }, []);
    // UseEffect with values in the dependencies array.
    const [anotherNumber, setAnotherNumber] = useState(0);
    useEffect(() => {
        console.log('Serei executado apenas quando o anotherNumber muda!');
    }, [anotherNumber]);
    
    return (
        <div>
            <h2>useEffect</h2>
            <p>Número: {number}</p>
            <button onClick={changeSomething}>Executar!</button>
            <p>Another Number: {anotherNumber}</p>
            <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Mudar o anotherNumber!</button>
            <hr />
        </div>
    );
};

export default HookUseEffect;
