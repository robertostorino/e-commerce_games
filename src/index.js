import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './firebase/config'  //importo el archivo de configuración de firebase

import './styles.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
)