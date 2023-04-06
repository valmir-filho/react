const UserDetails = ({ name, age, profession }) => {

    return (
        <div>
            <h2>Detalhes do usuário</h2>
            <ul>
                <li>Nome: {name}</li>
                <li>Idade: {age}</li>
                <li>Profissão: {profession}</li>
            </ul>
            {age >= 18 ?
                <p>
                    O usuário já pode tirar a carteira!
                </p> :
                <p>
                    O usuário não pode tirar a carteira!
                </p>
            }
        </div>
    );
};

export default UserDetails;