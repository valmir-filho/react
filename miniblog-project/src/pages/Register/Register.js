// CSS.
import styles from './Register.module.css';
// React.
import { useState, useEffect } from 'react';
// Hook.
import { useAuthentication } from '../../hooks/useAuthentication';

const Register = () => {
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [error, setError] = useState("");
    const { createUser, error: authError, loading } = useAuthentication();
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        const user = {
            displayName,
            email,
            password
        };
        if (password !== confirmPassword) {
            setError("😵‍💫 Erro! As senhas não coincidem!")
            return
        };
        const res = await createUser(user);

        console.log(res);

    };

    useEffect(() => {
        if (authError) {
            setError(authError);
        }
    }, [authError]);

    return (
        <div className={styles.register}>
            <h2>Para postar, faça seu cadastro 😀</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>⌨️ Nome:</span>
                    <input type="text" name="displayName" required placeholder="Insira o seu nome." value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
                </label>
                <label>
                    <span>📧 Email:</span>
                    <input type="email" name="email" required placeholder="Insira o seu email." value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    <span>🔐 Senha:</span>
                    <input type="password" name="password" required placeholder="Insira a sua senha." value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <label>
                    <span>🔐 Confirme a sua senha:</span>
                    <input type="password" name="confirmPassword" required placeholder="Confirme a sua senha." value={confirmPassword} onChange={(e) => setconfirmPassword(e.target.value)} />
                </label>
                {!loading && <button className="btn">Cadastrar</button>}
                {loading && <button className="btn" disabled>Por favor, aguarde...</button>}
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    );
};

export default Register;