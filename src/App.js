import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './components/NavBar/NavBar'
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className='container'>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a Play 4 Win" />
    </div>
  )
}

export default App;
