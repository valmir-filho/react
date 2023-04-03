import './App.css';
import City from './assets/city.jpg';
import { useState } from 'react';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetailsWithoutDestructuring from './components/CarDetailsWithoutDestructuring';
import CarDetailsWithDestructuring from './components/CarDetailsWithDestructuring';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';

function App() {

  const name = "Valmir";
  const [userName] = useState("Valmir");
  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarelo", newCar: true, km: 0 },
    { id: 2, brand: "Renault", color: "Branco", newCar: false, km: 45_450 },
    { id: 3, brand: "GM", color: "Preto", newCar: false, km: 33_345 },
  ];
  const [message, setMessage] = useState("");
  const handleMessage = (msg) => {
    setMessage(msg);
  };

  function showMessage() {
    console.log("Evento do componente pai!")
  }

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      <div>
        {/* Adicionando imagem em public */}
        <img src="paisagem.jpg" alt="Paisagem" />
      </div>
      {/* Imagem em assets */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      <ShowUserName name="Valmir" />  {/* Uma forma de adicionar propriedade. */}
      <ShowUserName name={name} />  {/* Outra forma de adicionar propriedade. */}
      <ShowUserName name={userName} />  {/* Outra forma de adicionar propriedade. */}
      <CarDetailsWithoutDestructuring brand="VW" km={100_000} color="Azul" />  {/* Adição de mais de uma prop. sem o "destructuring". */}
      <CarDetailsWithDestructuring brand="VW" km={100_000} color="Azul" />  {/* Adição de mais de uma prop. com o "destructuring". */}
      {/* Reaproveitamento de componentes. */}
      <CarDetailsWithDestructuring brand="VW" km={100_000} color="Azul" newCar={false} />
      <CarDetailsWithDestructuring brand="Ford" km={0} color="Vermelho" newCar={true} />
      <CarDetailsWithDestructuring brand="Fiat" km={45_000} color="Branco" newCar={false} />
      {/* Loop em array de objetos. */}
      {cars.map((car) => (<CarDetailsWithDestructuring key={car.id} brand={car.brand} color={car.color} km={car.km} newCar={car.newCar} />))}
      <Fragment propFragment="teste" />
      <Container>
        <p>E este é o conteúdo</p>
      </Container>
      {/* Execução de função. */}
      <ExecuteFunction myFunction={showMessage} />
      {/* Elevação de state (state lift). */}
      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
    </div>
  );
};

export default App;
