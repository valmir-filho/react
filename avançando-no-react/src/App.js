import './App.css';
import City from './assets/city.jpg';
import { useState } from 'react';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';

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
    </div>
  );
};

export default App;
