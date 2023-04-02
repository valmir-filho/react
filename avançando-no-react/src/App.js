import './App.css';
import City from './assets/city.jpg';
import { useState } from 'react';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetailsWithoutDestructuring from './components/CarDetailsWithoutDestructuring';
import CarDetailsWithDestructuring from './components/CarDetailsWithoutDestructuring';
import Fragment from './components/Fragment';
import Container from './components/Container';

function App() {

  const name = "Valmir";
  const [userName] = useState("Valmir");

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
      <CarDetailsWithoutDestructuring brand="VW" km={100_000} color="Azul" />  {/* Adição de mais de uma prop. sem o "destructuring" */}
      <CarDetailsWithDestructuring brand="VW" km={100_000} color="Azul" />  {/* Adição de mais de uma prop. com o "destructuring" */}
      <Fragment propFragment="teste" />
      <Container>
        <p>E este é o conteúdo</p>
      </Container>
    </div>
  );
};

export default App;
