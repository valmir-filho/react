import './App.css';
import MyComponent from './components/MyComponent';

function App() {

  const n = 6;

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
    </div>
  );
}

export default App;
