import { useState } from 'react';

const ConditionalRender = () => {

    const [x] = useState(true);
    const [name] = useState("Pedro");

    return (
        <div>
            <h1>Isso será exibido?</h1>
            {/* Condicional simples.*/}
            {x && <p>Se x for true, sim!</p>}
            {/* Condicional composta.*/}
            {name === "Valmir" ?
                (<div>
                    <p>O nome é Valmir</p>
                </div>) :
                (<div>
                    <p>O nome não é Valmir</p>
                </div>)
            }
        </div >
    );
};

export default ConditionalRender;
