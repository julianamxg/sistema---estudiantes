import { FunctionComponent } from "react"
import { Estudiante } from "./Estudiante";
import IEstudiante from "../modelos/estudiantes/entidades/IEstudiante";
import { TableContainer } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from "@mui/material";
import { styled } from '@mui/material/styles';


export interface ListarEstudianteProps {
    editarEstudiante: (id?: string) => any
    eliminarEstudiante: (id?: string) => any
    verEstudiante: () => any
    estudiantes: IEstudiante[]
}

export const ListarEstudiantes: FunctionComponent<ListarEstudianteProps> = ({ editarEstudiante, eliminarEstudiante, verEstudiante, estudiantes }) => {

    const botonRecargar = document.getElementById("botonRecargar");
    botonRecargar?.addEventListener("click", function () {
        window.location.reload();
    });

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
            <Box sx={{
                width: '95%',
                margin: 'auto',
                marginBottom: '1.5rem'
            }}>
                
                {
                    estudiantes.length > 0 ? (
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650, margintOP: '1.5rem' }} aria-label="customized table">
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
                                    {estudiantes.map((estudiante: IEstudiante) => <Estudiante key={estudiante.id} estudiante={estudiante} editarEstudiante={editarEstudiante} eliminarEstudiante={eliminarEstudiante} />)}
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