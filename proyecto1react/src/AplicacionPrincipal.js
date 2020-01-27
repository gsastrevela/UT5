import React, {Component } from 'react'
import Tabla from './Tabla'
import TablaComponentesSimples from './TablaComponentesSimples'
class AplicacionPrincipal extends Component{
    render() {
        return (
            <div className="App">
                <h1>tabla que no utiliza componentes simples</h1>
                <Tabla />
                <h2>tabla creada con un componente de clase que utiliza componentes simples</h2>
                <TablaComponentesSimples />
            </div>
        )
    }



}
export default AplicacionPrincipal