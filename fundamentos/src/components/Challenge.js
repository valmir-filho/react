const Challenge = () => {

    const valor1 = 10;
    const valor2 = 20;

    return (
        <div>
            <p>O Valor 1 é: {valor1}</p>
            <p>O valor 2 é: {valor2}</p>
            <button onClick={() => console.log(valor1 + valor2)}>Clique aqui para somar os dois valores</button>
        </div >
    );
};

export default Challenge;
