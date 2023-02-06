import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import IMateria from "../entidades/IMateria"

export interface MateriaProps {
    eliminarMateria: (id?: string) => any
    materia: IMateria;
}

export const Materia: FunctionComponent<MateriaProps> = ({ eliminarMateria, materia }) => {
    const eliminarMateriaAlert = () => {
        Swal.fire({
            title: `¿Deseas eliminar la materia de ${materia.materia}?`,
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
                    `Has eliminado la materia ${materia.materia}`,
                    'success'
                )

                // debugger
                eliminarMateria(materia.id);

            }
        })
    }
    return (
        <tr>
            <td>{materia.materia}</td>
            <td>{materia.nombreProfesor}</td>
            <td>
                <Link to={`/editar-materia/${materia.id}`}>
                    <button className="botones botonEd">
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                </Link>
            </td>
            <td>
                <button onClick={() => eliminarMateriaAlert()} className="botones botonEl">
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </td>
        </tr>
    )
} 