import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import './components/NavBar/NavBar'
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className='container-fluid'>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a Play 4 Win" />
      <ItemDetailContainer />
    </div>
  )
}

export default App;
