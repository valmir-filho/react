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
    <div className="App">
      <h1>Showroom de Carros</h1>
      <div className="car-container">
        {cars.map((car) => (<CarDetails car={car} />))}
      </div>
    </div>
  );
};

export default App;
