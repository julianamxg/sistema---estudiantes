import { FunctionComponent } from "react"
import { Estudiante } from "./Estudiante";
import IEstudiante from "../modelos/estudiantes/entidades/IEstudiante";
import { Button, TableContainer } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from "@mui/material";
import { styled } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import { Icon } from '@mui/material';
import { MenuPrincipal } from "../MenuPrincipal";

export interface ListarEstudianteProps {
    editarEstudiante: (id?: string) => void
    eliminarEstudiante: (id?: string) => void
    estudiantes: IEstudiante[]
    handleOpen: () => void;
    handleOpenEditar: (id: string) => void;
}

export const ListarEstudiantes: FunctionComponent<ListarEstudianteProps> = ({ editarEstudiante, eliminarEstudiante, estudiantes, handleOpen, handleOpenEditar }) => {
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
                    <h2>Estudiantes</h2>
                </div>
                {
                    estudiantes.length > 0 ? (
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650, border: '1px solid rgb(224, 224, 224)', }} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell align="center">Nombres</StyledTableCell>
                                        <StyledTableCell align="center">Apellidos</StyledTableCell>
                                        <StyledTableCell align="center">Tipo de documento</StyledTableCell>
                                        <StyledTableCell align="center">Número de documento</StyledTableCell>
                                        <StyledTableCell align="center">Grado</StyledTableCell>
                                        <StyledTableCell align="center">Director de grado</StyledTableCell>
                                        <StyledTableCell colSpan={2} align="center">Acciones</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {estudiantes.map((estudiante: IEstudiante) => <Estudiante key={estudiante.id} estudiante={estudiante} editarEstudiante={editarEstudiante} eliminarEstudiante={eliminarEstudiante} handleOpenEditar={() => handleOpenEditar(estudiante.id ?? '')} />)}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    ) : (
                        <p className="">No hay estudiantes</p>
                    )
                }

            </Box >
        </>
    )
}