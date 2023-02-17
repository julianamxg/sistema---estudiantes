import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";
import Swal from "sweetalert2";
import IMateria from "../modelos/materias/entidades/IMateria"
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

export interface MateriaProps {
    eliminarMateria: (id?: string) => any
    materia: IMateria;
    handleOpenEditar: (id?: string) => void
}

export const Materia: FunctionComponent<MateriaProps> = ({ eliminarMateria, materia, handleOpenEditar }) => {
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
                eliminarMateria(materia.id);

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
            sx={{ '&:last-child td, &:last-child th': { border: 'none' } }}
        >
            <StyledTableCell align="center">{materia.materia}</StyledTableCell>
            <StyledTableCell align="center">{materia.nombreProfesor}</StyledTableCell>
            <StyledTableCell align="center">
                <Button color="success" onClick={() => handleOpenEditar(materia.id ?? '')}>
                    <FontAwesomeIcon icon={faPenToSquare} />
                </Button>
            </StyledTableCell>
            <StyledTableCell align="center">
                <Button onClick={() => eliminarMateriaAlert()} color="error">
                    <FontAwesomeIcon icon={faTrash} />
                </Button>
            </StyledTableCell>
        </StyledTableRow>
    )
} 