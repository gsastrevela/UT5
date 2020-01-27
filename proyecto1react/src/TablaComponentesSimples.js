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
const TablaCuerpo = () =>{
    return (
        <tbody>
            <tr>
                <td>Jesus</td>
                <td>Piquero</td>
            </tr>
            <tr>
                <td>paco</td>
                <td>martinez</td>
            </tr>
            <tr>
                <td>luis</td>
                <td>tosar</td>
            </tr>
            <tr>
                <td>chloe</td>
                <td>grace</td>
            </tr>
        </tbody>
    )
}
class TablaCompomemtesSimples extends Component {
    render() {
        return(
            <table>
                <TablaCabecera />
                <TablaCuerpo />
            </table>
        )
    }
}
export default TablaCompomemtesSimples