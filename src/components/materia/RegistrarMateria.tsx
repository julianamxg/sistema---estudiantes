import { FunctionComponent } from "react";
import IMateria from "../modelos/materias/entidades/IMateria";
import { MenuPrincipal } from "../Menu"
import Swal from "sweetalert2";
import Button from '@mui/material/Button';
import { TextField, Select, MenuItem, InputLabel, FormControl, Box, Checkbox, FormControlLabel, Grid } from "@mui/material";

export interface RegistrarMateriaProps {
    guardarMateria: () => any;
    materia: IMateria;
    alCambiarValor: (key: string, value: string) => any;
    limpiar: () => any;
    inputLectura: any;
    habilitarFormulario: () => any

}

export const RegistrarMateria: FunctionComponent<RegistrarMateriaProps> = ({ guardarMateria, materia, alCambiarValor, limpiar, inputLectura, habilitarFormulario }) => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (materia.materia === '' || materia.nombreProfesor === '') {
            Swal.fire({
                text: `Por favor diligencia todos los campos`,
                icon: 'error',
            })
            return false;
        }

        if (materia.materia.length < 5 || materia.materia.length > 15) {
            Swal.fire({
                text: `El campo "Materia" debe tener de 5 a 15 caracteres`,
                icon: 'warning',
            })
            return false;
        }

        if (!/^[a-zA-Z]+$/.test(materia.materia.valueOf())) {
            Swal.fire({
                text: `El campo "Materia" solo debe contener letras`,
                icon: 'warning',
            });
            return false;
        }

        //validación de nombre de profesor
        if (materia.nombreProfesor === "1") {
            Swal.fire({
                text: `Por favor selecciona el nombre del profesor`,
                icon: 'warning',
            });
            return false;
        }

        guardarMateria();
    }
    return (
        <>
            <MenuPrincipal />
            <Box component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: '5rem',
                    marginBottom: '2rem',
                    background: '#fff',
                    marginLeft: '5rem',
                    marginRight: '5rem',
                    border: '1px solid rgb(224, 224, 224)',
                    padding: '3rem',
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <h2>Guardar materia</h2>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            sx={{
                                width: '100%',
                                mx: 'auto',
                                marginBottom: '1.5rem'
                            }}
                            disabled={inputLectura}
                            onChange={(e) => alCambiarValor(e.target.name, e.target.value)}
                            value={materia.materia}
                            type="text"
                            name="materia"
                            id="filled-basic materia"
                            variant="filled"
                            color="success"
                        ></TextField>

                    </Grid>
                    <Grid item xs={6} sm={6}>
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
                                id="demo-simple-select-filled nombreProfesor">
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

                    <Button disabled={inputLectura} type="submit">Guardar</Button>
                    <FormControlLabel
                        label="Habilitar formulario"
                        control={
                            <Checkbox size="small" name="habilitar" id="habilitar" onClick={habilitarFormulario} color="success" />}
                    />
                </Grid>
            </Box>
        </>
    )
}