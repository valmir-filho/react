import './GameScreen.css';

const GameScreen = ({ verifyLetter }) => {
    return (
        <div>
            <h1>GameScreen</h1>
            <button onClick={verifyLetter}>Finalizar o jogo!</button>
        </div>
    );
};

export default GameScreen;