import './App.css';
import CarDetails from './components/CarDetails';

function App() {

  const cars = [
    { id: 1, brand: "Fiat", model: "Argo", color: "Yellow", year: 2018, km: 34_553 },
    { id: 2, brand: "VW", model: "Fox", color: "White", year: 2019, km: 41_444 },
    { id: 3, brand: "GM", model: "Corsa", color: "Blue", year: 2009, km: 145_434 },
    { id: 4, brand: "Kia", model: "HB20", color: "Gray", year: 2017, km: 45_434 },
  ];

  return (
    <div>
      <h1>Challenge CSS</h1>
      {cars.map((car) => (<CarDetails key={car.id} brand={car.brand} model={car.model} color={car.color} year={car.year} km={car.km} />))}
    </div>

  );
}

export default App;
