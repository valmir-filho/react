import './EndScreen.css';

const EndScreen = ({ retry }) => {
    return (
        <div>
            <h1>EndScreen</h1>
            <button onClick={retry}>Reiniciar o jogo!</button>
        </div>
    );
};

export default EndScreen;