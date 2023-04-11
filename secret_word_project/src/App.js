// Importação CSS.
import './App.css';
// Importação React.
import { useCallback, useEffect, useState } from 'react';
// Importação Dados.'
import { wordsList } from './data/words';
// Importação Componentes.
import StartScreen from './components/StartScreen';
import GameScreen from './components/GameScreen';
import EndScreen from './components/EndScreen';

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);
  // Iniciando o jogo.
  const startGame = () => { setGameStage(stages[1].name) };
  // Processamento da letra digitada.
  const verifyLetter = () => { setGameStage(stages[2].name) };
  // Reiniciando o jogo.
  const retry = () => { setGameStage(stages[0].name) };

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && <GameScreen verifyLetter={verifyLetter} />}
      {gameStage === "end" && <EndScreen retry={retry} />}
    </div>
  );
}

export default App;
