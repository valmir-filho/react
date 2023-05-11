import { useState } from 'react';
import './MyForm.css';

const MyForm = ({ user }) => {

    // Gerenciamento de dados.
    const [name, setName] = useState(user ? user.name : "");  // Controlled inputs.
    const [email, setEmail] = useState(user ? user.email : "");
    const [bio, setBio] = useState(user ? user.bio : "");
    const [role, setRole] = useState(user ? user.role : "");
    const handleName = (e) => { setName(e.target.value) };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando o formulário");
        console.log(name, email, bio, role);
        // Reset de formulários.
        setName("");
        setEmail("");
        setBio("");
    };

    return (
        <div>
            {/* Criação de formulário. */}
            <form onSubmit={handleSubmit}>  {/* Envio de formulário. */}
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} value={name} />
                </div>
                {/* Label envolvendo input. */}
                <label>
                    <span>Email:</span>
                    {/* Simplificação da manipulação do state. */}
                    <input type="email" name="email" placeholder="Digite o seu email" onChange={(e) => setEmail(e.target.value)} value={email} />
                </label>
                {/* Text area. */}
                <label>
                    <span>Bio:</span>
                    <textarea name="bio" placeholder="Descrição do usuário" onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
                </label>
                {/* Select. */}
                <label>
                    <span>Função no sistema</span>
                    <select name="role" onChange={(e) => setRole(e.target.value)} value={role}>
                        <option value="user">Usuário</option>
                        <option value="editor">Editor</option>
                        <option value="admin">Administrador</option>
                    </select>
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div >
    );
};

export default MyForm;