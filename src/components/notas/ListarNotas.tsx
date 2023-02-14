import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'
import INotas from '../modelos/notas/entidades/INotas';
import { FunctionComponent } from 'react';
import { Nota } from './Nota';
import { editarNota } from '../modelos/notas';
import { Button, TableContainer, Modal } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AddIcon from '@mui/icons-material/Add';
import { Icon } from '@mui/material';
import { Box } from "@mui/material";
import { styled } from '@mui/material/styles';
import * as React from 'react';
import { RegistrarNotas } from './RegistrarNotas';
import IMateria from '../modelos/materias/entidades/IMateria';
import IEstudiante from '../modelos/estudiantes/entidades/IEstudiante';
import { MenuPrincipal } from '../Menu';

interface CatalogosNotas {
    listaMaterias: IMateria[]
    listaEstudiantes: IEstudiante[]
}

export interface ListarNotasProps {
    eliminarNota: (id?: string) => void
    notas: INotas[];
    guardarNota: () => void;
    nota: INotas;
    alCambiarValor: (key: string, value: string) => void
    limpiar: () => void;
    catalogos: CatalogosNotas;
    inputLectura: boolean;
    habilitarFormulario: () => void;
    open: boolean;
    handleOpen: () => void;
    handleClose: () => void;

}

export const ListarNotas: FunctionComponent<ListarNotasProps> = ({ eliminarNota, notas, guardarNota, nota, alCambiarValor, limpiar, catalogos, inputLectura, habilitarFormulario, open, handleOpen, handleClose }) => {
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.white,
            color: theme.palette.common.black,
            fontWeight: 'bolder',
            borderTop: '1px solid rgba(224, 224, 224, 1)'
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    // const [open, setOpen] = React.useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);

    const style = {
        // position: 'absolute' as 'absolute',
        // top: '50%',
        // left: '50%',
        // transform: 'translate(-50%, -50%)',
        // width: '80%',
        // bgcolor: 'background.paper',
        // border: '2px solid #000',
        // boxShadow: 24,
        // p: 4,
    };


    return (
        <>
            <MenuPrincipal />
            <Box sx={{
                margin: '5rem 1rem',
                padding: '2rem',
                background: '#fff'
            }}>
                <div>
                    <Button color='success' onClick={handleOpen}>
                        <Icon color="success" sx={{
                            paddingBottom: '1rem',
                            paddingRight: '1rem'
                        }}>
                            <AddIcon sx={{ fontSize: 40 }} />

                        </Icon>
                        Agregar
                    </Button>
                    <h2>Notas</h2>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >

                        <Box>

                            <RegistrarNotas guardarNota={guardarNota} alCambiarValor={alCambiarValor} limpiar={limpiar} nota={nota} catalogos={catalogos} inputLectura={inputLectura} habilitarFormulario={habilitarFormulario} handleClose={handleClose} />
                        </Box>
                    </Modal>
                </div>

                {
                    notas.length > 0 ? (
                        <TableContainer>
                            <Table sx={{ minWidth: 650, border: '1px solid rgb(224, 224, 224)', }} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell align="center">Materia</StyledTableCell>
                                        <StyledTableCell align="center">Estudiante</StyledTableCell>
                                        <StyledTableCell align="center">Promedio</StyledTableCell>
                                        <StyledTableCell align="center" colSpan={2}>Acciones</StyledTableCell>
                                    </TableRow>
                                </TableHead>

                                <TableBody>
                                    {
                                        notas.map((nota: INotas) =>
                                            <Nota
                                                key={nota.id}
                                                nota={nota}
                                                editarNota={editarNota}
                                                eliminarNota={eliminarNota}
                                                guardarNota={guardarNota}
                                                alCambiarValor={alCambiarValor}
                                                limpiar={limpiar} 
                                                catalogos={catalogos}
                                                inputLectura={inputLectura}
                                                habilitarFormulario={habilitarFormulario}
                                                open={open}
                                                handleOpen={handleOpen}
                                                handleClose={handleClose} />)}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    ) : (
                        <p className="">No hay notas</p>
                    )
                }

            </Box>
        </>
    )
}


