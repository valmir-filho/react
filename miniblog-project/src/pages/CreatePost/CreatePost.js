// CSS.
import styles from './CreatePost.module.css';
// React.
import { useState } from 'react';
// React router.
import { useNavigate } from 'react-router-dom';
// Hook.
import { useInsertDocument } from '../../hooks/useInsertDocument';
// Context.
import { useAuthValue } from '../../context/AuthContext';

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [image, setImage] = useState("");
    const [body, setBody] = useState("");
    const [tags, setTags] = useState([]);
    const [formError, setFormError] = useState("");
    const { user } = useAuthValue();
    const navigate = useNavigate();
    const { insertDocument, response } = useInsertDocument("posts");
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError("");
        // Validação da imagem.
        try {
            new URL(image);
        } catch (error) {
            setFormError("😵‍💫 Erro! A imagem precisa ser uma URL!");
        }
        // Criação de um array de tags.
        const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());
        // Checagem dos valores.

        if (!title || !image || !tags || !body) {
            setFormError("😵‍💫 Erro! Por favor, preencha todos os campos!");
        }

        console.log(tagsArray);
        console.log({
            title,
            image,
            body,
            tags: tagsArray,
            uid: user.uid,
            createdBy: user.displayName,
        });

        if (formError) return
        insertDocument({
            title,
            image,
            body,
            tags: tagsArray,
            uid: user.uid,
            createdBy: user.displayName,
        });

        // Redireciopnamento para a home.
        navigate("/");
    };

    return (
        <div className={styles.create_post}>
            <h2>Criar post</h2>
            <p>Escreva sobre o que quiser e compartilhe!</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Título:</span>
                    <input
                        type="text"
                        name="text"
                        required
                        placeholder="Insira um título que identifique o seu post."
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </label>
                <label>
                    <span>URL da imagem:</span>
                    <input
                        type="text"
                        name="image"
                        required
                        placeholder="Insira uma imagem que represente o seu post."
                        onChange={(e) => setImage(e.target.value)}
                        value={image}
                    />
                </label>
                <label>
                    <span>Conteúdo:</span>
                    <textarea
                        name="body"
                        required
                        placeholder="Insira um conteúdo para o seu post."
                        onChange={(e) => setBody(e.target.value)}
                        value={body}
                    ></textarea>
                </label>
                <label>
                    <span>Tags:</span>
                    <input
                        type="text"
                        name="tags"
                        required
                        placeholder="Insira tags, separadas por vírgula, para localizar o seu post."
                        onChange={(e) => setTags(e.target.value)}
                        value={tags}
                    />
                </label>
                {!response.loading && <button className="btn">Criar post!</button>}
                {response.loading && (
                    <button className="btn" disabled>Aguarde...</button>
                )}
                {(response.error || formError) && (
                    <p className="error">{response.error || formError}</p>
                )}
            </form>
        </div>
    );
};

export default CreatePost;