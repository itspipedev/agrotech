import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
/*estilos*/
/*estilos login*/
import "./modules/login/styles/global.css";
/*estilos cultivo*/
import "./modules/cultivos/style.css"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



