import { FunctionComponent } from "react"
import { Estudiante } from "./Estudiante";
import IEstudiante from "../modelos/estudiantes/entidades/IEstudiante";
import {TableContainer } from "@mui/material";
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
            <Box>
                <h1></h1>
                {
                    estudiantes.length > 0 ? (
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="customized table">
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
                                    {/* {rows.map((row) => (
                                    <TableRow
                                        key={row.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.calories}</TableCell>
                                        <TableCell align="right">{row.fat}</TableCell>
                                        <TableCell align="right">{row.carbs}</TableCell>
                                        <TableCell align="right">{row.protein}</TableCell>
                                    </TableRow>
                                ))} */}
                                </TableBody>
                            </Table>
                        </TableContainer>

                        // <table>
                        //         <thead>
                        //             <tr>
                        //                 <td>Nombres</td>
                        //                 <td>Apellidos</td>
                        //                 <td>Tipo de documento</td>
                        //                 <td>Número de documento</td>
                        //                 <td>Grado</td>
                        //                 <td>Directora de grado</td>
                        //                 <td colSpan={2}>Acciones</td>
                        //             </tr>
                        //         </thead>

                        //         <tbody>
                        //             {estudiantes.map((estudiante: IEstudiante) => <Estudiante key={estudiante.id} estudiante={estudiante} editarEstudiante={editarEstudiante} eliminarEstudiante={eliminarEstudiante} />)}
                        //         </tbody>
                        //     </table></></>
                    ) : (
                        <p className="">No hay estudiantes</p>
                    )
                }

            </Box >
        </>
    )
}