import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import Swal from 'sweetalert2';
import IEstudiante from '../modelos/estudiantes/entidades/IEstudiante';
import { FunctionComponent } from 'react';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export interface EstudianteProps {
    editarEstudiante: (id?: string) => any
    eliminarEstudiante: (id?: string) => any
    estudiante: IEstudiante;
    handleOpenEditar: (id?: string) => void
}


export const Estudiante: FunctionComponent<EstudianteProps> = ({ editarEstudiante, eliminarEstudiante, estudiante, handleOpenEditar }) => {

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

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.grey[400],
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    return (
        <StyledTableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <StyledTableCell align="center">{estudiante.nombres}</StyledTableCell>
            <StyledTableCell align="center">{estudiante.apellidos}</StyledTableCell>
            <StyledTableCell align="center">{estudiante.tDocumento}</StyledTableCell>
            <StyledTableCell align="center">{estudiante.nDocumento}</StyledTableCell>
            <StyledTableCell align="center">{estudiante.grado}</StyledTableCell>
            <StyledTableCell align="center">{estudiante.dGrado}</StyledTableCell>
            <StyledTableCell align="center" ><img src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${estudiante.avatar}.gif`} alt="Avatar" width="50" height="50" /></StyledTableCell>
            <StyledTableCell align="center">
                <Button color="success" onClick={() => handleOpenEditar(estudiante.id ?? '')}>
                    <FontAwesomeIcon icon={faPenToSquare} />
                </Button>
            </StyledTableCell>
            <StyledTableCell align="center">
                <Button onClick={() => eliminarEstudiante2()} color="error">
                    <FontAwesomeIcon icon={faTrash} />
                </Button>
            </StyledTableCell>
        </StyledTableRow >
    )
} 