// CSS.
import './App.css';
// React router.
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// Hook.
import { HookUseContext } from './components/HookUseContext';
// Pages.
import Home from './pages/Home/Home';
import About from './pages/About/About';

function App() {
  return (
    <div className="App">
      <HookUseContext>
        <h1>Hooks</h1>
        <BrowserRouter>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </BrowserRouter>
      </HookUseContext>
    </div>
  );
}

export default App;
