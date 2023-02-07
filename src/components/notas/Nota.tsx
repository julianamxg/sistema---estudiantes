import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FunctionComponent } from "react"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import { editarNota } from "../modelos/notas"
import INotas from "../modelos/notas/entidades/INotas"

export interface Notasprops {
    editarNota: (id?: string) => any
    eliminarNota: (id?: string) => any
    nota: INotas
}

export const Nota: FunctionComponent<Notasprops> = ({ editarNota, eliminarNota, nota }) => {
    const eliminarNotaAlert = () => {
        Swal.fire({
            title: `¿Deseas eliminar la calificación de ${nota.estudiante}?`,
            text: "Esta acción no se puede revertir",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    '¡Registro eliminado!',
                    `Has eliminado la calificación de ${nota.estudiante}`,
                    'success'
                )

                eliminarNota(nota.id);

            }
        })
    }


    return (
        <tr
            style={{background: nota.promedio > 30? '#c1ffc7' : '#ffc1c1'}}>
          
            <td>{nota.estudiante}</td>
            <td>{nota.promedio}</td>
            <td >{nota.materia}</td> 
            <td>
                <Link to={`/editar-nota/${nota.id}`}>
                    <button className="botones botonEd">
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                </Link>
            </td>
            <td>
                <button onClick={() => eliminarNotaAlert()} className="botones botonEl">
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </td>
        </tr>
    )
}