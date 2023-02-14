import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { FunctionComponent } from "react"
import { Link } from "react-router-dom"
import Swal from "sweetalert2"
import INotas from "../modelos/notas/entidades/INotas"
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Box, Button, Modal } from '@mui/material';
import { styled } from '@mui/material/styles';
import { RegistrarNotas } from "./RegistrarNotas"
import IMateria from "../modelos/materias/entidades/IMateria"
import IEstudiante from "../modelos/estudiantes/entidades/IEstudiante"

interface CatalogosNotas {
    listaMaterias: IMateria[]
    listaEstudiantes: IEstudiante[]
}

export interface Notasprops {
    editarNota: (id?: string) => any
    eliminarNota: (id?: string) => any
    guardarNota: () => void;
    nota: INotas;
    alCambiarValor: (key: string, value: string) => void
    limpiar: () => void;
    catalogos: CatalogosNotas;
    inputLectura: boolean;
    habilitarFormulario: () => void;
    open: boolean;
    handleOpen: () => void;
    handleClose: () => any;

}

export const Nota: FunctionComponent<Notasprops> = ({
    editarNota,
    eliminarNota,
    guardarNota,
    nota,
    alCambiarValor,
    limpiar,
    catalogos,
    inputLectura,
    habilitarFormulario,
    open,
    handleOpen,
    handleClose
}) => {
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



    const backgroundColor = nota.promedio > 30 ? "#cae7cc" : "#e5c9c9";


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
                {/* <Link to={`/editar-nota/${nota.id}`}> */}
                <Button color="success" onClick={() => handleOpen()}>
                    <FontAwesomeIcon icon={faPenToSquare} />
                </Button>
                {/* </Link> */}

                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >

                    <Box>
                        <RegistrarNotas
                            guardarNota={guardarNota}
                            alCambiarValor={alCambiarValor}
                            limpiar={limpiar}
                            nota={nota}
                            catalogos={catalogos}
                            inputLectura={inputLectura}
                            habilitarFormulario={habilitarFormulario}
                            handleClose={handleClose} />
                    </Box>
                </Modal>

            </TableCell>
            <TableCell align="center">
                <Button onClick={() => eliminarNotaAlert()} color="error">
                    <FontAwesomeIcon icon={faTrash} />
                </Button>
            </TableCell>
        </TableRow >
    )
}


