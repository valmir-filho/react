// Alteração do valor do contexto.
import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

const ChangeCounter = () => {
    const { counter, setCounter } = useContext(CounterContext);

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>Adicionar valor ao contador</button>
        </div>
    );
};

export default ChangeCounter;