import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useParams } from "react-router";
import Swal from 'sweetalert2';
import { eliminarEstudiante, getlistaEstudiantes } from '../services/localstorage';



export const Estudiante = ({ estudiante }: any, { setEstudiantes }: any) => {
    const { id, nombres, apellidos, tDocumento, nDocumento, grado, dGrado } = estudiante;

    const eliminarEstudiante2 = () => {
        Swal.fire({
            title: `¿Deseas eliminar a ${nombres}?`,
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
                    `Has eliminado a ${nombres}`,
                    'success'
                  )
                  setTimeout(() => {
                    window.location.reload();
                }, 4000);
                
                eliminarEstudiante(id);
                setEstudiantes(getlistaEstudiantes())
             
            }
          })
       
    }

    return (
        <tr>
            {/* <td>{id}</td> */}
            <td>{nombres}</td>
            <td>{apellidos}</td>
            <td>{tDocumento}</td>
            <td>{nDocumento}</td>
            <td>{grado}</td>
            <td>{dGrado}</td>
            <td>
                <Link to={`/editar-estudiante/${id}`}>
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