import React, {Component } from 'react'
import Tabla from './Tabla'
import TablaComponentesSimples from './TablaComponentesSimples'
import TablaComponentesSimplesProps from './TablaComponentesSimplesProps'
import TablaComponentesSimplesState from './TablaComponentesSimplesState'
class AplicacionPrincipal extends Component{
    /*objeto para utilizar en state */
    state = {
        personajes: [
            {
                name: 'Payton Hobart',
            },
            {
                name: 'wendy carr',
            },
            {
                name: 'mina',
            },
            {
                name: 'jonathan harker',
            },
            {
                name: 'dracula',
            },
            {
                name: 'Once',
            },
            {
                name: 'Jim Hopper',
            }
        ]
    }

    borrarPersonaje = indice => {
        const { personajes } = this.state;
        this.setState({
            personajes: personajes.filter((personaje, i) => {
                return i !== indice;
            }
            )
        });
    }
    
    render() {
        /* coleccion de objetos con nomenclatura jeison para utilizar en props */
        const actoresactrices = [
            {
                nombre: 'Joel',
                apellidos: 'Edgerton'
            },
            {
                nombre: 'Carmen',
                apellidos: 'Maura',
            },
            {
                nombre: 'Luis',
                apellidos: 'Tosar',
            },
            {
                nombre: 'Jesus',
                apellidos: 'Piquero'
            }

        ]

        /* inicializamos el objeto de personaje */
        const { personajes } = this.state

        return (
            <div className="App">
                <h1>tabla que no utiliza componentes simples</h1>
                <Tabla />
                <h2>tabla creada con un componente de clase que utiliza componentes simples</h2>
                <TablaComponentesSimples />
                <h2>tabla creada mediante un componente de clase que utiliza paso de parametros con pros</h2>
                <TablaComponentesSimplesProps datosActoresActrices={actoresactrices}/>
                <h2>tabla creada con componentes simples con state y que permite eliminar elementos</h2>
                <TablaComponentesSimplesState datosPersonaje={personajes} borrarPersonaje={this.borrarPersonaje}/>
            </div>
        )
    }



}
export default AplicacionPrincipal