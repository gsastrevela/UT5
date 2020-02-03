import React, {Component } from 'react'
import Tabla from './Tabla'
import TablaComponentesSimples from './TablaComponentesSimples'
import TablaComponentesSimplesProps from './TablaComponentesSimplesProps'
import TablaComponentesSimplesState from './TablaComponentesSimplesState'
/*import personajes from './personajes' */
import Formulario from './Formulario'
class AplicacionPrincipal extends Component{
    /*objeto para utilizar en state */
    /*
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
    */
   /*utilizo un fichero json con los datos de personajes */
  /*
   state = {personajes}
*/ /*dejo la coleccion vacia para rellenarla con un formulario */
state = {personajes: []}

/*metodo para manejar los datos del formulario */
manejarEnvio = personaje => {
     this.setState({personajes: [...this.state.personajes, personaje]});
}

/*metodo para borrar personajes */
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
                <h2>añadir nuevo personaje</h2>
                <Formulario manejarEnvio={this.manejarEnvio} />
            </div>
        )
    }



}
export default AplicacionPrincipal