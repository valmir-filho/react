// CSS.
import styles from './About.module.css';
// React router.
import { Link } from 'react-router-dom';

const About = () => {

    return (
        <div className={styles.about}>
            <h2>Projeto Mini <span>Blog</span></h2>
            <p>Desenvolvido com React no front-end e Firebase no back-end.</p>
            <Link to="/posts/create" className="btn">Criar post!</Link>
        </div>
    );
};

export default About;