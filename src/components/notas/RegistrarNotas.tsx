import { FunctionComponent, useState } from "react"; import IEstudiante from "../modelos/estudiantes/entidades/IEstudiante";
import IMateria from "../modelos/materias/entidades/IMateria";
import INotas from "../modelos/notas/entidades/INotas";
import { TextField, Select, MenuItem, InputLabel, FormControl, Box, Checkbox, FormControlLabel, Grid, Button, IconButton, Alert, Snackbar, AlertTitle } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const estilosIndependientes = {
    background: '#2e7d32',
    color: 'white',
    height: 48,
    padding: '0px 50px'
};

interface CatalogosNotas {
    listaMaterias: IMateria[]
    listaEstudiantes: IEstudiante[]
}

export interface RegistrarNotasProps {
    guardarNota: () => any;
    nota: INotas;
    alCambiarValor: (key: string, value: string) => any
    limpiar: () => any;
    catalogos: CatalogosNotas;
    inputLectura: boolean;
    habilitarFormulario: () => any;
    handleClose: () => void;
}

export const RegistrarNotas: FunctionComponent<RegistrarNotasProps> = ({ guardarNota, nota, alCambiarValor, limpiar, catalogos, inputLectura, habilitarFormulario, handleClose }) => {
    const [showAlert, setShowAlert] = useState(false);
    const [showAlert2, setShowAlert2] = useState(false);
    const [showAlert3, setShowAlert3] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (nota.materia === '' || nota.estudiante === '' || nota.promedio === 0) {
            setShowAlert(true);
            return false;
        }

        if (String(nota.promedio).length !== 2) {
            setShowAlert2(true);
            return false;
        }

        if (nota) {
            setShowAlert3(true);
            setTimeout(() => {
                handleClose();
            }, 1000);
        }
        guardarNota();
    }

    return (

        <Box
            component="form"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: '5rem',
                marginBottom: '2rem',
                background: '#fff',
                marginLeft: '5rem',
                marginRight: '5rem',
                border: '1px solid rgb(224, 224, 224)',
                padding: '2rem',
                alignItems: 'inherit'
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <IconButton
                color="inherit"
                onClick={handleClose}
                aria-label="close"
                sx={{
                    display: 'flex',
                    justifyContent: 'end'
                }}
            >
                <CloseIcon />
            </IconButton>
            <h2>Guardar nota</h2>
            <Grid container spacing={3} >
                <Grid item xs={12} sm={12}>
                    <FormControl
                        variant="filled" sx={{
                            width: '100%',
                            mx: 'auto'
                        }}>
                        <InputLabel color="success" id="demo-simple-select-filled-label" >Materia</InputLabel>
                        <Select
                            fullWidth
                            labelId="demo-simple-select-filled-label"
                            disabled={inputLectura}
                            onChange={(e) => alCambiarValor(e.target.name, e.target.value)}
                            value={nota.materia}
                            name="materia"
                            id=" demo-simple-select-filled materia"
                            color="success"
                        >

                            <MenuItem>Selecciona...</MenuItem>
                            {catalogos.listaMaterias.map((materia) => (

                                <MenuItem key={materia.id} value={materia.materia}>{materia.materia}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} sm={12}>
                    <FormControl variant="filled" sx={{
                        width: '100%',
                        mx: 'auto'
                    }}>
                        <InputLabel color="success" id="demo-simple-select-filled-label">Estudiante</InputLabel>
                        <Select
                            fullWidth
                            labelId="demo-simple-select-filled-label"
                            disabled={inputLectura}
                            onChange={(e) => alCambiarValor(e.target.name, e.target.value)}
                            value={nota.estudiante}
                            name="estudiante"
                            id="demo-simple-select-filled estudiante"
                            color="success"
                        >
                            <MenuItem>Selecciona...</MenuItem>
                            {catalogos.listaEstudiantes.map((estudiante) => (
                                <MenuItem value={estudiante.nombres} key={estudiante.id}>{estudiante.nombres}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>

                </Grid>

                <Grid item xs={12} sm={12}>
                    <TextField
                        sx={{
                            width: '100%',
                            mx: 'auto',
                            marginBottom: '1.5rem'
                        }}
                        disabled={inputLectura}
                        onChange={(e) => alCambiarValor(e.target.name, e.target.value)}
                        value={nota.promedio}
                        type="number"
                        name="promedio"
                        id="filled-basic promedio"
                        color="success"
                        label="Promedio"
                        variant="filled"
                    >

                    </TextField>
                </Grid>
            </Grid>
            <div>
                <Button sx={{ marginTop: '1rem' }} style={estilosIndependientes} disabled={inputLectura} type="submit">Guardar</Button>
            </div>
            <FormControlLabel
                label="Habilitar formulario"
                control={
                    <Checkbox size="small" name="habilitar" id="habilitar" onClick={habilitarFormulario} color="success" />}
            />
            <Snackbar open={showAlert} autoHideDuration={5000} onClose={() => setShowAlert(false)}>
                <Alert severity="error" onClose={() => setShowAlert(false)}>
                    Por favor diligencia todos los campos
                </Alert>
            </Snackbar>

            <Snackbar open={showAlert2} autoHideDuration={5000} onClose={() => setShowAlert2(false)}>
                <Alert severity="warning" onClose={() => setShowAlert2(false)}>
                    El campo "Promedio" debe tener 2 digitos
                </Alert>
            </Snackbar>

            <Snackbar open={showAlert3} autoHideDuration={7000} onClose={() => setShowAlert3(false)}>
                <Alert variant="filled" severity="success" onClose={() => setShowAlert3(false)}>
                    <AlertTitle>Nota guardada </AlertTitle>
                    Se ha registrado la nota — <strong>¡Correctamente!</strong>
                </Alert>
            </Snackbar>
        </Box >

    )
}




