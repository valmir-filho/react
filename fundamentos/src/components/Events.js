// Criação de um evento.

const Events = () => {

    const handleEvent = (e) => {console.log(e)};

    return (
        <div>
            <div>
                <button onClick={handleEvent}>Clique aqui!</button>
            </div>
        </div>
    );
};

export default Events;
