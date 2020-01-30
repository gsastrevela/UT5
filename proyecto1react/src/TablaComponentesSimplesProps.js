import React,{ Component } from "react";

const TablaCabecera = () => {
    return (
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Apellidos</th>
            </tr>
        </thead>
    )
}
const TablaCuerpo = props => {
    const filasDeDatos = props.datosActoresActrices.map((fila,indice) =>{
        return ( /* return del metodo map */
            <tr key={indice}>
                <td>{fila.nombre}</td>
                <td>{fila.apellidos}</td>

            </tr>
        )
    }
    )
    return ( /*return del componente TablaCuerpo */
        <tbody>
            {filasDeDatos}
        </tbody>
    )
}



class TablaComponentesSimplesProps extends Component {
    render() {
        const {datosActoresActrices} = this.props /* utilizo props pasados al componente desde la aplicacion principal */
        return (
            <table>
                <TablaCabecera />
                <TablaCuerpo datosActoresActrices={datosActoresActrices} />
            </table>
        )
    }
}


export default TablaComponentesSimplesProps