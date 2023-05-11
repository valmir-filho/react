// CSS.
import './App.css';
// React router.
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
// Components.
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';
// Pages.
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Info from './pages/Info';
import Search from './pages/Search';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="App">
      <h1>React Router</h1>
      {/* Utilização do react router. */}
      <BrowserRouter>
        <Navbar />
        {/* Mecanismo de busca. */}
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          { /* Rota dinâmica. */}
          <Route path="/products/:id" element={<Product />} />
          {/* Nested routes. */}
          <Route path="/products/:id/info" element={<Info />} />
          { /* Search. */}
          <Route path="/search" element={<Search />} />
          {/* Redirecionamento de url. */}
          <Route path="/company" element={<Navigate to="/about" />} />
          {/* No match route (página 404). */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;