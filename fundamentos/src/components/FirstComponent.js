/* Criação de um componente.*/

import MyComponent from "./MyComponent";

const FirstComponent = () => {

    return (
        <div>
            <h1>Meu primeiro componente</h1>
            <MyComponent /> {/* Reaproveitamento de componente*/}
        </div>
    );
};

export default FirstComponent;
