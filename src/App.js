import './App.css';
import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './components/NavBar/NavBar'
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className='container-fluid'>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a Play 4 Win" />
      <ItemCount stock={5} initial={1} onAdd={0} />
    </div>
  )
}

export default App;
