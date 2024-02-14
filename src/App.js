import './App.css';
import ListaDeTareas from './components/ListaDeTareas';
import logofab from './images/fm-line.png';

function App() {
  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img
          src={logofab}
          className='logo'
          alt='logo fab'
        />
      </div>
      <div className='tareas-contenedor-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas/>
      </div>
    </div>
  );
}

export default App;
