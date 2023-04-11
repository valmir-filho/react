import './App.css';
import MyForm from './components/MyForm';

function App() {

  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm user={{ name: "Valmir", email: "vmcfilho@gmail.com", bio: "Sou desenvolvedor", role: "admin" }} />
    </div>
  );
};

export default App;
