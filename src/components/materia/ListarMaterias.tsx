import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'
export const ListarMaterias = () => {
    return (
        <div className="tabla">
            <div className="encabezadoTabla">
                <h2>Materias registradas</h2>
                <button id="botonRecargar"><FontAwesomeIcon icon={faRotateRight} /></button>
            </div>
            <table>
                <thead>
                    <tr>
                        <td>Materia</td>
                        <td>Profesora</td>
                        <td colSpan={2}>Acciones</td>
                    </tr>
                </thead>

                <tbody>

                </tbody>
            </table>
        </div >
    )
}