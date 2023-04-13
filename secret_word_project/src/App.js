import { useCallback, useEffect, useState } from "react";

// Importação dos componentes.
import StartScreen from "./components/StartScreen";
import Game from "./components/Game";
import GameOver from "./components/GameOver";

// Importação do CSS.
import "./App.css";

// Importação dos dados.
import { wordsList } from "./data/words";

const stages = [
  { id: 1, name: "start" },
  { id: 2, name: "game" },
  { id: 3, name: "end" },
];

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name);
  const [words] = useState(wordsList);
  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);
  const pickWordAndCategory = useCallback(() => {
    // Escolha randômica das categorias.
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)];
    // Escolha randômica das palavras.
    const word = words[category][Math.floor(Math.random() * words[category].length)];

    return { category, word };
  }, [words]);
  // Início do jogo.
  const startGame = useCallback(() => {
    // Limpeza das letras.
    clearLettersStates();
    // Escolha da palavra.
    const { category, word } = pickWordAndCategory();
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((l) => l.toLowerCase());
    setPickedCategory(category);
    setPickedWord(word);
    setLetters(wordLetters);
    setGameStage(stages[1].name);
  }, [pickWordAndCategory]);
  // Processo de entrada da letra.
  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toLowerCase();
    // Checagem se a letra já foi utilizada.
    if (
      guessedLetters.includes(normalizedLetter) ||
      wrongLetters.includes(normalizedLetter)
    ) {
      return;
    }
    // Processo de inclusão da letra advinhada ou perda de uma chance.
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        letter,
      ]);
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter,
      ]);
      setGuesses((actualGuesses) => actualGuesses - 1);
    }
  };
  // Reinício do jogo.
  const retry = () => {
    setScore(0);
    setGuesses(3);
    setGameStage(stages[0].name);
  };
  // Limpeza das letras.
  const clearLettersStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  };
  // Checagem do término das chances.
  useEffect(() => {
    if (guesses === 0) {
      // Fim do jogo e reinício de todos os estados.
      clearLettersStates();
      setGameStage(stages[2].name);
    }
  }, [guesses]);
  // Checagem das condições de vitória.
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];
    // Condição de vitória.
    if (guessedLetters.length === uniqueLetters.length) {
      // Adição dos pontos.
      setScore((actualScore) => (actualScore += 100));
      // Reinício do jogo com uma nova palavra.
      startGame();
    }
  }, [guessedLetters, letters, startGame]);

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen startGame={startGame} />}
      {gameStage === "game" && (
        <Game
          verifyLetter={verifyLetter}
          pickedWord={pickedWord}
          pickedCategory={pickedCategory}
          letters={letters}
          guessedLetters={guessedLetters}
          wrongLetters={wrongLetters}
          guesses={guesses}
          score={score}
        />
      )}
      {gameStage === "end" && <GameOver retry={retry} score={score} />}
    </div>
  );
}

export default App;
