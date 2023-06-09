// Importação do componente criado.

// components
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';
import Events from './components/Events';
import FunctionInEvents from './components/FunctionInEvents';
import RenderFunction from './components/RenderFunction';
import Challenge from './components/Challenge';

// styles - CSS
import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpressions />
      <MyComponent />
      <Events />
      <FunctionInEvents />
      <RenderFunction />
      <Challenge />
    </div>
  );
}

export default App;
