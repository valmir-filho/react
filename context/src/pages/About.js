import './About.css';
// import { useContext } from 'react';
// import { CounterContext } from '../context/CounterContext';
// Refatoração utilizando hook.
import { useCounterContext } from '../hooks/useCounterContext';
// Context mais complexo.
import { useTitleColorContext } from '../hooks/useTitleColorContext';

const About = () => {
    // const { counter } = useContext(CounterContext);
    // Refatoração utilizando hook.
    const { counter } = useCounterContext();
    // Context mais complexo.
    const { color, dispatch } = useTitleColorContext();
    // Alteração do context mais complexo.
    const setTitleColor = (color) => {
        dispatch({ type: color });
    };

    return (
        <div>
            <h1 style={{ color: color }}>About</h1>
            <p>Valor do contador: {counter}</p>
            {/* Alteração do context mais complexo. */}
            <div className="Color">
                <p>Mudar cor do About</p>
                <button id="redbutton" onClick={() => setTitleColor("RED")}>Vermelho</button>
                <button id="bluebutton" onClick={() => setTitleColor("BLUE")}>Azul</button>
                <button id="yellowbutton" onClick={() => setTitleColor("YELLOW")}>Amarelo</button>
                <button id="graybutton" onClick={() => setTitleColor("GRAY")}>Cinza</button>
            </div>
        </div>
    );
};

export default About;