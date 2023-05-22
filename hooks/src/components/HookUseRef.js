// React.
import { useEffect, useState, useRef } from 'react';

const HookUseRef = () => {
    // UseRef: create a value reference.
    const numberRef = useRef(0);
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    useEffect(() => {
        numberRef.current += 1;
    });
    // UseRef and DOM.
    const inputRef = useRef();
    const [text, setText] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        setText('');
        inputRef.current.focus();
    };

    return (
        <div>
            <h2>useRef</h2>
            {/* UseRef: create a value reference. */}
            <p>O componente renderizou: {numberRef.current} vezes.</p>
            <p>Counter 1: {counter1}</p>
            <button onClick={() => setCounter1(counter1 + 1)}>Contador 1</button>
            <p>Counter 2: {counter2}</p>
            <button onClick={() => setCounter2(counter2 + 1)}>Contador 2</button>
            {/* UseRef and =DOM. */}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    ref={inputRef}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <input type="submit" value="Enviar" />
            </form>
            <hr />
        </div>
    )
}

export default HookUseRef;