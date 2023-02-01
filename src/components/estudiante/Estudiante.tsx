import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import IEstudiante from '../entidades/IEstudiante';
import { FunctionComponent } from 'react';

export interface EstudianteProps {
    editarEstudiante: (id?:string) => any
    eliminarEstudiante: (id?:string) => any
    estudiante : IEstudiante
}

export const Estudiante:FunctionComponent<EstudianteProps> = ( {editarEstudiante,eliminarEstudiante, estudiante}) => {

    const eliminarEstudiante2 = () => {
        Swal.fire({
            title: `¿Deseas eliminar a ${estudiante.nombres}?`,
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
                    `Has eliminado a ${estudiante.nombres}`,
                    'success'
                  )
                  
                debugger
                eliminarEstudiante(estudiante.id);
                console.log(estudiante.id)
                
            }
          })
       
    }

    return (
        <tr>
            {/* <td>{id}</td> */}
            <td>{estudiante.nombres}</td>
            <td>{estudiante.apellidos}</td>
            <td>{estudiante.tDocumento}</td>
            <td>{estudiante.nDocumento}</td>
            <td>{estudiante.grado}</td>
            <td>{estudiante.dGrado}</td>
            <td>
                <Link to={`/editar-estudiante/${estudiante.id}`}>
                    <button className="botones botonEd">
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                </Link>
            </td>
            <td>
                <button onClick={() => eliminarEstudiante2()} className="botones botonEl">
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            </td>
        </tr>
    )
} 