import './MyComponent.css';

const MyComponent = () => {
    return (
        <div>
            <h1>CSS de componente</h1>
            <p>Este é o parágrafo do componente</p>
            <p className="my-comp-paragraph">Este parágrafo também é do componente</p>
        </div>
    );
};

export default MyComponent;