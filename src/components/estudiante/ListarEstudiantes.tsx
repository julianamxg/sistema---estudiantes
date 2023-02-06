import { FunctionComponent, useContext, useEffect, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'
import { Estudiante } from "./Estudiante";
import IEstudiante from "../entidades/IEstudiante";

export interface ListarEstudianteProps {
    editarEstudiante: (id?:string) => any
    eliminarEstudiante: (id?:string) => any
    verEstudiante: () => any
    estudiantes: IEstudiante[]
}

export const ListarEstudiantes: FunctionComponent<ListarEstudianteProps> = ({editarEstudiante, eliminarEstudiante, verEstudiante, estudiantes }) => {
    
    const botonRecargar = document.getElementById("botonRecargar");
    botonRecargar?.addEventListener("click", function () {
        window.location.reload();
    });
    return (
        <div className="tabla">
            <div className="encabezadoTabla">
                <h2>Estudiantes registrados</h2>
                <button id="botonRecargar"><FontAwesomeIcon icon={faRotateRight} /></button>
            </div>
            {
                estudiantes.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <td>Nombres</td>
                                <td>Apellidos</td>
                                <td>Tipo de documento</td>
                                <td>Número de documento</td>
                                <td>Grado</td>
                                <td>Directora de grado</td>
                                <td colSpan={2}>Acciones</td>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                estudiantes.map((estudiante: IEstudiante) =>
                                  estudiante?  <Estudiante key={estudiante.id} estudiante={estudiante} editarEstudiante={editarEstudiante} eliminarEstudiante={eliminarEstudiante}/> : null)}
                        </tbody>
                    </table>
                ) : (
                    <p className="">No hay estudiantes</p>
                )
            }

        </div >
    )
}