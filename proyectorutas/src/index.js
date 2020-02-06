import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";

const Aplicacion = () => ( 
<div>
     <h1>Manejo de rutas en React</h1>
      <nav>
           <Link to="/">Inicio</Link>{" "} 
           <Link to="AcercaDe">Acerca de</Link>
     </nav>
      <Router>
         <Inicio path="/" />
          <AcercaDe path="/AcercaDe" />
     </Router>
     
 </div>
 );

 const Inicio = () => (
     <div>
         <h2>Estas en inicio</h2>
     </div>
 );
 const AcercaDe = () => (
    <div> 
        <h2>Estás en Acerca de</h2>
         </div>
 );
 render (
     <Aplicacion />, document.getElementById("root")
 );