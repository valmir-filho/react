// Forma de acesso as propriedades do componente, definida na importação dele no App.js.

const ShowUserName = (props) => {

    return (
        <div>
            <h2>O nome do usuário: {props.name}</h2>
        </div>
    );
};

export default ShowUserName;
