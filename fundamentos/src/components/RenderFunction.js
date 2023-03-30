const RenderFunction = () => {

    const renderSomething = (x) => {

        if (x) {
            return <h1>Se "x" é verdadeiro, renderizo isso!</h1>
        } else {
            return <h1>Senão isso!</h1>
        }
    };

    return (
        <div>
            {renderSomething(true)}
            {renderSomething(false)}
        </div>
    );
};

export default RenderFunction; 
