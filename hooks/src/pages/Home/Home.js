// Hooks.
import HookUseReducer from '../../components/HookUseReducer';
import HookUseState from '../../components/HookUseState';
import HookUseEffect from '../../components/HookUseEffect';

const Home = () => {
    return (
        <div>
            <HookUseState />
            <HookUseReducer />
            <HookUseEffect />
        </div>
    );
};

export default Home
