import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './firebase/config'  //importo el archivo de configuración de firebase

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)