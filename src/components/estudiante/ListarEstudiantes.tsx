
import { useContext, useEffect, useState } from "react"
import { getlistaEstudiantes } from "../../services/datosEstudiante";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'
import { Estudiante } from "./Estudiante";
import EstudianteIn from "../entidades/IEstudiante";


export const ListarEstudiantes = () => {
    const [estudiantes, setEstudiantes] = useState([]);
    //const {lista} = useContext(contexto);
    useEffect(() => {
        setEstudiantes(getlistaEstudiantes());
    }, [])

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
                                estudiantes.map((estudiante: EstudianteIn) =>
                                    <Estudiante estudiante={estudiante} key={estudiante.id} setEstudiantes={setEstudiantes} />)}
                        </tbody>
                    </table>
                ) : (
                    <p className="">No hay estudiantes</p>
                )
            }

        </div >
    )
}