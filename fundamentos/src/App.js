// Importação do componente criado.

// components
import FirstComponent from './components/FisrtComponent';
import TemplateExpressions from './components/TemplateExpressions';

// styles - CSS
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FirstComponent />
      <TemplateExpressions />
    </div>
  );
}

export default App;
