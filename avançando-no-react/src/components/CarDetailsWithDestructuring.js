const CarDetailsWithDestructuring = ({ brand, km, color }) => {

    return (
        <div>
            <h2>Detalhes do carro</h2>
            <ul>
                <li>Marca: {brand}</li>
                <li>KM: {km}</li>
                <li>Cor: {color}</li>
            </ul>
        </div>
    );
};

export default CarDetailsWithDestructuring;