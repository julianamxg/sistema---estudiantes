import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FunctionComponent } from "react"
import Swal from "sweetalert2"
import INotas from "../modelos/notas/entidades/INotas"
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import {  Button} from '@mui/material';

export interface Notasprops {
    editarNota: (id?: string) => any
    eliminarNota: (id?: string) => any
    nota: INotas;
    handleOpenEditar: (id?:string) => void
}

export const Nota: FunctionComponent<Notasprops> = ({ editarNota, eliminarNota, nota, handleOpenEditar }) => {
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

 

    const backgroundColor = nota.promedio < 30 ? "#e5c9c9" : nota.promedio > 45 ? "#cae7cc" : undefined;


    return (
        <TableRow
            sx={{
                border: 0,
                background: backgroundColor
            }} 
    >
            <TableCell align="center">{nota.materia}</TableCell>
            <TableCell align="center">{nota.estudiante}</TableCell>
            <TableCell align="center">{nota.promedio}</TableCell>
            <TableCell align="center">
                    <Button color="success" onClick={() =>handleOpenEditar(nota.id ?? '')} >
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </Button>
            </TableCell>
            <TableCell align="center">
                <Button onClick={() => eliminarNotaAlert()} color="error">
                    <FontAwesomeIcon icon={faTrash} />
                </Button>
            </TableCell>
        </TableRow >
    )
}