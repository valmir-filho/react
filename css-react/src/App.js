import './App.css';
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {

  const n = 6;
  const redTitle = false;

  return (
    <div className="App">
      {/* CSS global. */}
      <h1>React com CSS</h1>
      {/* CSS de componente. */}
      <MyComponent />
      <p>Este parágrafo é do App.js</p>
      {/* Inline CSS. */}
      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>Este elemento foi estilizado por meio do inline</p>
      {/* Inline dinâmico CSS. */}
      <h2 style={n < 10 ? ({ color: "purple" }) : ({ color: "pink" })}>CSS dinâmico</h2>
      <h2 style={n > 10 ? ({ color: "purple" }) : ({ color: "pink" })}>CSS dinâmico</h2>
      {/* Classe dinâmica. */}
      <h2 className={redTitle ? "redTitle" : "title"}>Este título terá classe dinâmica</h2>
      {/* CSS modules. */}
      <Title />
    </div>
  );
}

export default App;
