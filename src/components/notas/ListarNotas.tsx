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
import { MenuPrincipal } from '../MenuPrincipal';


export interface ListarNotasProps {
    eliminarNota: (id?: string) => void
    notas: INotas[];
    nota: INotas;
    handleOpen: () => void;
    handleOpenEditar: (id: string) => void;

}

export const ListarNotas: FunctionComponent<ListarNotasProps> = ({ eliminarNota, notas, nota, handleOpen , handleOpenEditar}) => {


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
                    <h2>Notas</h2>
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
                                            <Nota key={nota.id} nota={nota} editarNota={editarNota} eliminarNota={eliminarNota} handleOpenEditar={() => handleOpenEditar(nota.id ?? '')} />)}
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