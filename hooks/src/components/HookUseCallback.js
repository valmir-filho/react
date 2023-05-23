// React.
import { useCallback, useState } from 'react';
// Component.
import List from './List';

const HookUseCallback = () => {
    const [counter, setCounter] = useState(0);
    const getItemsFromDataBase = useCallback(() => { return ['a', 'b', 'c', 'd', 'e'] }, []);

    return (
        <div>
            <h2>useCallback</h2>
            <List getItems={getItemsFromDataBase} />
            <button onClick={() => setCounter(counter + 1)}>Alterar!</button>
            <p>{counter}</p>
            <hr />
        </div>
    );
};

export default HookUseCallback;