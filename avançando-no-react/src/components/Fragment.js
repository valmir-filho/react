// Não especifico o elemento pai.

const Fragment = ({ propFragment }) => {

    return (
        <>
            <h2>1º título</h2>
            <h3>2º título</h3>
            <h4>{propFragment}</h4>
        </>
    );
};

export default Fragment; 