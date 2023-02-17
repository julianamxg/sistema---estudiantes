import { FunctionComponent, useState } from "react";
import IMateria from "../modelos/materias/entidades/IMateria";
import Button from '@mui/material/Button';
import { TextField, Select, MenuItem, InputLabel, FormControl, Box, Checkbox, FormControlLabel, Grid, IconButton, Snackbar, Alert, AlertTitle } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

const estilosIndependientes = {
    background: '#2e7d32',
    color: 'white',
    height: 48,
    padding: '0px 50px'
};

export interface RegistrarMateriaProps {
    guardarMateria: () => any;
    materia: IMateria;
    alCambiarValor: (key: string, value: string) => any;
    limpiar: () => any;
    inputLectura: any;
    habilitarFormulario: () => any
    handleClose: () => void;
}

export const RegistrarMateria: FunctionComponent<RegistrarMateriaProps> = ({ guardarMateria, materia, alCambiarValor, limpiar, inputLectura, habilitarFormulario, handleClose }) => {
    const [showAlert, setShowAlert] = useState(false);
    const [showAlert2, setShowAlert2] = useState(false);
    const [showAlert3, setShowAlert3] = useState(false);
    const [showAlert4, setShowAlert4] = useState(false);


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (materia.materia === '' || materia.nombreProfesor === '') {
            setShowAlert(true);
            return false;
        }

        if (materia.materia.length < 5 || materia.materia.length > 15) {
            setShowAlert2(true);
            return false;
        }

        if (!/^[a-zA-Z]+$/.test(materia.materia.valueOf())) {
            setShowAlert3(true);
            return false;
        }

        if (materia) {
            setShowAlert4(true);
            setTimeout(() => {
                handleClose();
            }, 1000);
        }


        guardarMateria();
    }
    return (
        <>

            <Box component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'inherit',
                    marginTop: '5rem',
                    marginBottom: '2rem',
                    background: '#fff',
                    marginLeft: '5rem',
                    marginRight: '5rem',
                    border: '1px solid rgb(224, 224, 224)',
                    padding: '2rem',
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
                <h2>Guardar materia</h2>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            sx={{
                                width: '100%',
                                mx: 'auto',
                            }}
                            disabled={inputLectura}
                            onChange={(e) => alCambiarValor(e.target.name, e.target.value)}
                            value={materia.materia}
                            type="text"
                            name="materia"
                            id="filled-basic materia"
                            variant="filled"
                            label='Materia'
                            color="success"
                        ></TextField>

                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <FormControl variant="filled" sx={{
                            width: '100%',
                            mx: 'auto'
                        }}>
                            <InputLabel color="success" id="demo-simple-select-filled-label">Nombre del profesor</InputLabel>
                            <Select
                                fullWidth
                                labelId="demo-simple-select-filled-label"
                                disabled={inputLectura}
                                onChange={(e) => alCambiarValor(e.target.name, e.target.value)}
                                value={materia.nombreProfesor}
                                name="nombreProfesor"
                                id="demo-simple-select-filled nombreProfesor"
                                color='success'
                            >
                                <MenuItem value={1}>Selecciona...</MenuItem>
                                <MenuItem value="Sandra Roncancio">Sandra Roncancio</MenuItem>
                                <MenuItem value="Luis Rodriguez">Luis Rodriguez</MenuItem>
                                <MenuItem value="Paola Sanchez">Paola Sanchez</MenuItem>
                                <MenuItem value="Tatiana Galindo">Tatiana Galindo</MenuItem>
                                <MenuItem value="Luna Perez">Luna Perez</MenuItem>
                                <MenuItem value="Claudia Lopez">Claudia Lopez</MenuItem>
                                <MenuItem value="Felipe Romero">Felipe Romero</MenuItem>
                                <MenuItem value="Laura Martinez">Laura Martinez</MenuItem>
                                <MenuItem value="Maria Rodriguez">Maria Rodriguez</MenuItem>
                                <MenuItem value="Carolina Forero">Carolina Forero</MenuItem>
                                <MenuItem value="Carla Rodriguez">Carla Rodriguez</MenuItem>
                            </Select>
                        </FormControl>
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
                        El campo "Materia" debe tener de 5 a 15 caracteres
                    </Alert>
                </Snackbar>

                <Snackbar open={showAlert3} autoHideDuration={5000} onClose={() => setShowAlert3(false)}>
                    <Alert severity="warning" onClose={() => setShowAlert3(false)}>
                        El campo "Materia" solo debe contener letras
                    </Alert>
                </Snackbar>

                <Snackbar open={showAlert4} autoHideDuration={7000} onClose={() => setShowAlert4(false)}>
                <Alert variant="filled" severity="success" onClose={() => setShowAlert4(false)}>
                    <AlertTitle>Estudiante guardado</AlertTitle>
                    Se ha registrado el estudiante <strong>¡Correctamente!</strong>
                </Alert>
            </Snackbar>

            </Box>
        </>
    )
}