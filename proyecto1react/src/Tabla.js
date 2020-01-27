import React,{ Component } from "react";

class Tabla extends Component {
    render(){
        return(
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                    </tr>
                </thead>
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
            </table>
        )
    }
}
export default Tabla