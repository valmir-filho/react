// Criação do context.
import { createContext, useState } from 'react';

export const CounterContext = createContext();

// Criação do provider.
// Children encaspula o elemento e permite o uso dentro de um outro componente.
export const CounterContextProvider = ({ children }) => {
    const [counter, setCounter] = useState(5);

    return (
        <CounterContext.Provider value={{ counter, setCounter }}>
            {children}
        </CounterContext.Provider>
    );
};