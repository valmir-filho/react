// CSS.
import './App.css';
// React router.
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components.
import NavBar from './components/NavBar';
// Pages.
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
};

export default App;
