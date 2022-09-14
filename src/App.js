import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import './components/NavBar/NavBar'
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from "react-router-dom"; //me sirve para trabajar con rutas

function App() {
  return (
    <div className='container-fluid'>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenido a Play 4 Win" />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/category" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
