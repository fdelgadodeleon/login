import './App.css';

function App() {
  return (
    <div className="root">
      <div className="container">
        <div className="image-container">
          <img src="/img/foto.jpg" className="image"/>
        </div>
        <div className="form">
          <input placeholder="usuario"/>
          <input placeholder="contraseña"/>
          <button>Iniciar sesión</button>
        </div>
        </div>
    </div>
  );
}

export default App;
