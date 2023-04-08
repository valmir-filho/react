import './CarDetails.css';

const CarDetails = ({ brand, model, color, year, km }) => {

    return (
        <div>
            <p>CarDetails</p>
            <ul>
                <li>Marca: {brand}</li>
                <li>Modelo: {model}</li>
                <li>Cor: {color}</li>
                <li>Ano: {year}</li>
                <li>Km: {km}</li>
            </ul>
        </div>
    );
};

export default CarDetails;
