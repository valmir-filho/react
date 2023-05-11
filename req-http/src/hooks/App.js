import './App.css';
import { useState, useEffect } from 'react';
// Importação hook customizado.
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products";
// Simulação erro.
// const url = "http://localhost:3003/products";

function App() {
  const [products, setProducts] = useState([]);
  // Hook customizado.
  const { data: items, httpConfig, loading, error } = useFetch(url);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  // Resgate de dados.
  // useEffect(() => {
  // async function fetchData() {
  // const res = await fetch(url);
  // const data = await res.json();
  // setProducts(data);
  // };
  // fetchData();
  // }, []);

  // Adição de dados.
  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = {
      name,
      price,
    };
    // const res = await fetch(url, {
    // method: "POST",
    // headers: {
    // "Content-Type": "application/json"
    // },
    // body: JSON.stringify(product),
    // });

    // Carregamento de dados dinâmico.
    // const addedProduct = await res.json();
    // setProducts((prevProducts) => [...prevProducts, addedProduct]);

    // Refatoração do post.
    httpConfig(product, "POST");

    // Reset dos states.
    setName("");
    setPrice("");
  };

  // Exclusão de dados.
  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  };

  return (
    <div className="App">
      <h1>Lista de Produtos</h1>
      {/* Loading. */}
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      {!error && (
        <ul>
          {items && items.map((product) => (
            <li key={product.id}>
              {product.name} - R${product.price}
              {/* Exclusão de dados. */}
              <button onClick={() => handleRemove(product.id)}>Excluir</button>
            </li>
          ))}
        </ul>
      )}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Preço(R$):
            <input type="number" value={price} price="price" onChange={(e) => setPrice(e.target.value)} />
          </label>
          {/* State de loading no post. */}
          {loading && <input type="submit" disable value="Aguarde" />}
          {!loading && <input type="submit" value="Adicionar Produto" />}
        </form>
      </div>
    </div >
  );
};

export default App;