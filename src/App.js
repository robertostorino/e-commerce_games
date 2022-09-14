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
          <Route exact path="/" element={<ItemListContainer greeting="Bienvenido a Play 4 Win" />} />
          <Route exact path="/category/:category" element={<ItemListContainer />} />
          <Route exact path="/category" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

{/* <ItemListContainer greeting="Bienvenido a Play 4 Win" /> */}

export default App;
