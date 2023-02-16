import IMateria from '../modelos/materias/entidades/IMateria'
import { FunctionComponent } from 'react'
import { Materia } from './Materia'
import { TableContainer, Button } from "@mui/material";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import AddIcon from '@mui/icons-material/Add';
import { Icon } from '@mui/material';
import { Box } from "@mui/material";
import { styled } from '@mui/material/styles';
import { MenuPrincipal } from '../MenuPrincipal'

export interface ListarMateriasProps {
    eliminarMateria: (id?: string) => any
    materias: IMateria[]
    handleOpen: () => void;
    handleOpenEditar: (id: string) => void;
}

export const ListarMaterias: FunctionComponent<ListarMateriasProps> = ({ eliminarMateria, materias, handleOpen, handleOpenEditar }) => {
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
                background: '#fff',
                boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 5%), 0px 1px 1px 0px rgb(0 0 0 / 0%), 0px 1px 3px 0px rgb(0 0 0 / 12%)',
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
                    <h2>Materias</h2>
                </div>
                {
                    materias.length > 0 ? (
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650, margintOP: '1.5rem', boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 5%), 0px 1px 1px 0px rgb(0 0 0 / 0%), 0px 1px 3px 0px rgb(0 0 0 / 12%)' }} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell align="center">Materia</StyledTableCell>
                                        <StyledTableCell align="center">Profesora</StyledTableCell>
                                        <StyledTableCell align="center" colSpan={2}>Acciones</StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {
                                        materias.map((materia: IMateria) =>
                                            <Materia key={materia.id} eliminarMateria={eliminarMateria} materia={materia} handleOpenEditar={() => handleOpenEditar(materia.id ?? '')} />)}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    ) : (
                        <p className="">No hay materias</p>
                    )

                }
            </Box>
        </>
    )
}