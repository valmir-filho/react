const CarDetailsWithoutDestructuring = (props) => {

    return (
        <div>
            <h2>Detalhes do carro</h2>
            <ul>
                <li>Marca: {props.brand}</li>
                <li>KM: {props.km}</li>
                <li>Cor: {props.color}</li>
            </ul>
        </div>
    );
};

export default CarDetailsWithoutDestructuring;