import { editarEstudiante } from "../modelos/estudiantes";
import { FunctionComponent, useState } from "react";
import IEstudiante from "../modelos/estudiantes/entidades/IEstudiante";
import Button from '@mui/material/Button';
import { TextField, Select, MenuItem, InputLabel, FormControl, Box, Checkbox, FormControlLabel, Grid, Alert, AlertTitle, Snackbar, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { IPokemon } from "../modelos/pokemones/entidades/IPokemon";

const estilosIndependientes = {
    background: '#2e7d32',
    color: 'white',
    height: 48,
    padding: '0px 50px'
};

export interface RegistrarEstudianteProps {
    guardarEstudiante: () => void
    estudiante: IEstudiante
    alCambiarValor: (key: string, value: string) => void
    limpiar: () => void
    inputLectura: boolean
    habilitarFormulario: () => void
    handleClose: () => void;
    listaPokemones: IPokemon[]
}
export const RegistrarEstudiante: FunctionComponent<RegistrarEstudianteProps> = ({ guardarEstudiante, estudiante, alCambiarValor, limpiar, inputLectura, habilitarFormulario, handleClose, listaPokemones }) => {
    const [showAlert, setShowAlert] = useState(false);
    const [showAlert2, setShowAlert2] = useState(false);
    const [showAlert3, setShowAlert3] = useState(false);
    const [showAlert4, setShowAlert4] = useState(false);
    const [showAlert5, setShowAlert5] = useState(false);
    const [showAlert6, setShowAlert6] = useState(false);
    const [showAlert7, setShowAlert7] = useState(false);
    const [showAlert8, setShowAlert8] = useState(false);



    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (estudiante.nombres === '' || estudiante.apellidos === '' || estudiante.tDocumento === '' || estudiante.nDocumento === 0 || estudiante.grado === '' || estudiante.dGrado === '' || estudiante.avatar === '') {
            setShowAlert(true);
            return false;
        }

        if (estudiante.nombres.length > 16 || estudiante.nombres.length < 4) {
            setShowAlert2(true);
            return false;
        }

        if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(estudiante.nombres.valueOf())) {
            setShowAlert3(true);
            return false;
        }

        if (estudiante.apellidos.length > 16 || estudiante.apellidos.length < 4) {
            setShowAlert4(true);
            return false;
        }

        if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(estudiante.apellidos.valueOf())) {
            setShowAlert5(true);
            return false;
        }

        if (estudiante.tDocumento === "") {
            setShowAlert(true);
            return false;
        }

        if (String(estudiante.nDocumento).length !== 10) {
            setShowAlert7(true);
            return false;
        }

        if (estudiante.grado === "") {
            setShowAlert(true);
            return false;
        }

        if (estudiante.dGrado === "") {
            setShowAlert(true);
            return false;
        }

        if (estudiante) {
            setShowAlert8(true);
            setTimeout(() => {
                handleClose();
            }, 1000);
        }

        guardarEstudiante();
        editarEstudiante();
    }

    return (
        <>

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
                    alignItems: 'inherit',


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
                <img src={`https://img.pokemondb.net/sprites/black-white/anim/normal/${estudiante.avatar}.gif`} alt="Avatar" width="50" height="50" />
                <h2>Guardar estudiante</h2>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField sx={{
                            width: '100%',
                            mx: 'auto',

                        }}
                            id="filled-basic nombres"
                            label="Nombres"
                            variant="filled"
                            disabled={inputLectura}
                            onChange={(e) => alCambiarValor(e.target.name, e.target.value)}
                            value={estudiante.nombres}
                            type="text"
                            name="nombres"
                            color="success"
                        />

                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            sx={{
                                width: '100%',
                                mx: 'auto',
                                marginBottom: '1.5rem'
                            }}
                            disabled={inputLectura}
                            value={estudiante.apellidos}
                            type="text"
                            name="apellidos"
                            id="filled-basic apellidos"
                            label="Apellidos"
                            variant="filled"
                            onChange={(e) => alCambiarValor(e.target.name, e.target.value)}
                            color="success"
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <FormControl variant="filled" sx={{
                            width: '100%',
                            mx: 'auto',
                        }}>
                            <InputLabel color="success" id="demo-simple-select-filled-label">Tipo de documento</InputLabel>
                            <Select
                                fullWidth
                                labelId="demo-simple-select-filled-label"
                                id="demo-simple-select-filled tDocumento"
                                disabled={inputLectura}
                                onChange={(e) => alCambiarValor(e.target.name, e.target.value)}
                                value={estudiante.tDocumento}
                                name="tDocumento"
                                color="success"
                            >
                                <MenuItem value="Cedula de ciudadania" >Cedula de ciudadania</MenuItem >
                                <MenuItem value="Tarjeta de identidad" >Tarjeta de identidad</MenuItem >
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            sx={{
                                width: '100%',
                                mx: 'auto',
                                marginBottom: '1.5rem'
                            }}
                            id="filled-basic nDocumento"
                            label="Número de documento"
                            variant="filled"
                            disabled={inputLectura}
                            onChange={(e) => alCambiarValor(e.target.name, e.target.value)}
                            value={estudiante.nDocumento}
                            type="number"
                            name="nDocumento"
                            color="success"
                        />
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={3}>
                        <FormControl variant="filled" sx={{
                            width: '100%',
                            mx: 'auto',
                        }}>
                            <InputLabel color="success" id="demo-simple-select-filled-label">Grado</InputLabel>
                            <Select
                                fullWidth
                                labelId="demo-simple-select-filled-label"
                                disabled={inputLectura}
                                onChange={(e) => alCambiarValor(e.target.name, e.target.value)}
                                value={estudiante.grado}
                                name="grado"
                                id="demo-simple-select-filled grado"
                                color="success"
                            >
                                <MenuItem value="Primero">Primero</MenuItem>
                                <MenuItem value="Segundo">Segundo</MenuItem>
                                <MenuItem value="Tercero">Tercero</MenuItem>
                                <MenuItem value="Cuarto">Cuarto</MenuItem>
                                <MenuItem value="Quinto">Quinto</MenuItem>
                                <MenuItem value="Sexto">Sexto</MenuItem>
                                <MenuItem value="Septimo">Septimo</MenuItem>
                                <MenuItem value="Octavo">Octavo</MenuItem>
                                <MenuItem value="Noveno">Noveno</MenuItem>
                                <MenuItem value="Decimo">Decimo</MenuItem>
                                <MenuItem value="Once">Once</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>

                    <Grid item xs={12} sm={3}>
                        <FormControl variant="filled" sx={{
                            width: '100%',
                            mx: 'auto',
                        }}>
                            <InputLabel color="success" id="demo-simple-select-filled-label">Director de grado</InputLabel>
                            <Select
                                fullWidth
                                labelId="demo-simple-select-filled-label"
                                disabled={inputLectura}
                                onChange={(e) => alCambiarValor(e.target.name, e.target.value)}
                                value={estudiante.dGrado}
                                name="dGrado"
                                id="demo-simple-select-filled grado"
                                color="success"
                            >
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
                    <Grid item xs={12} sm={6}>
                        <FormControl variant="filled" sx={{
                            width: '100%',
                            mx: 'auto',
                        }}>
                            <InputLabel color="success" id="demo-simple-select-filled-label">Avatar</InputLabel>
                            <Select
                                fullWidth
                                labelId="demo-simple-select-filled-label"
                                disabled={inputLectura}
                                name="avatar"
                                id="demo-simple-select-filled avatar"
                                color="success"
                                value={estudiante.avatar}
                                onChange={(e) => alCambiarValor(e.target.name, e.target.value)}
                            >
                                <MenuItem value="">Selecciona...</MenuItem>
                                
                                    {listaPokemones.map((pokemon) => (
                                        <MenuItem value={pokemon.name} key={pokemon.id}>
                                            {pokemon.name}
                                        </MenuItem>
                                    ))}
                               
                            
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
                        El campo "Nombres" debe tener de 4 a 16 caracteres
                    </Alert>
                </Snackbar>

                <Snackbar open={showAlert3} autoHideDuration={5000} onClose={() => setShowAlert3(false)}>
                    <Alert severity="warning" onClose={() => setShowAlert3(false)}>
                        El campo "Nombres" solo debe contener letras
                    </Alert>
                </Snackbar>

                <Snackbar open={showAlert4} autoHideDuration={5000} onClose={() => setShowAlert4(false)}>
                    <Alert severity="warning" onClose={() => setShowAlert4(false)}>
                        El campo "Apellidos" debe tener de 4 a 16 caracteres
                    </Alert>
                </Snackbar>

                <Snackbar open={showAlert5} autoHideDuration={5000} onClose={() => setShowAlert5(false)}>
                    <Alert severity="warning" onClose={() => setShowAlert5(false)}>
                        El campo "Apellidos" solo debe contener letras
                    </Alert>
                </Snackbar>

                <Snackbar open={showAlert6} autoHideDuration={5000} onClose={() => setShowAlert6(false)}>
                    <Alert severity="warning" onClose={() => setShowAlert6(false)}>
                        Por favor selecciona un tipo de documento
                    </Alert>
                </Snackbar>

                <Snackbar open={showAlert7} autoHideDuration={5000} onClose={() => setShowAlert7(false)}>
                    <Alert severity="warning" onClose={() => setShowAlert7(false)}>
                        El campo "Número de documento" debe tener 10 digitos
                    </Alert>
                </Snackbar>



            </Box>
            <Snackbar open={showAlert8} autoHideDuration={7000} onClose={() => setShowAlert8(false)}>
                <Alert variant="filled" severity="success" onClose={() => setShowAlert8(false)}>
                    <AlertTitle>Estudiante guardado</AlertTitle>
                    Se ha registrado el estudiante <strong>¡Correctamente!</strong>
                </Alert>
            </Snackbar>

        </>
    )

}

