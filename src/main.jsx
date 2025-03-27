// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa la API de cliente de React 18
import App from './App.jsx';             // Importa tu componente principal App (asegúrate que se llame App.jsx)
import './index.css';                   // Importa tus estilos globales

// 1. Obtiene el elemento del DOM donde se montará la aplicación React
//    (Asegúrate de que tu public/index.html tenga <div id="root"></div>)
const rootElement = document.getElementById('root');

// 2. Crea un "root" de React usando la nueva API de React 18
const root = ReactDOM.createRoot(rootElement);

// 3. Renderiza tu componente App dentro del root
//    React.StrictMode es opcional pero recomendado para desarrollo,
//    ayuda a detectar problemas potenciales.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);