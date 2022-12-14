import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"; //me sirve para trabajar con rutas

import './App.css';
import './components/NavBar/NavBar.css';

import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartProvider from './Context/CartContext';
import Checkout from './components/Checkout/Checkout';

////    RESPONSABILIDAD: Renderizar las rutas y los componentes

const App = () => {
  return (
    <div className='container-fluid'>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/category/:categoryId' element={<ItemListContainer />} />
              <Route path='/category' element={<ItemListContainer />} />
              <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
              <Route path='/cart' element={<Cart />}/>
              <Route path='/checkout' element={<Checkout />}/>
            </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App;


//BrowserRouter es un contexto de rutas
//El componente de Contexto "CartProvider" envuelve a "BrowserRouter", para que este último le pase su información como props de children