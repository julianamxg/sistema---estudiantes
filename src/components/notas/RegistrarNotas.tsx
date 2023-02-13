import { FunctionComponent } from "react"; import IEstudiante from "../modelos/estudiantes/entidades/IEstudiante";
import IMateria from "../modelos/materias/entidades/IMateria";
import INotas from "../modelos/notas/entidades/INotas";
import { MenuPrincipal } from "../Menu"
import Swal from "sweetalert2";
import { TextField, Select, MenuItem, InputLabel, FormControl, Box, Checkbox, FormControlLabel, Grid, Button } from "@mui/material";

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
}

export const RegistrarNotas: FunctionComponent<RegistrarNotasProps> = ({ guardarNota, nota, alCambiarValor, limpiar, catalogos, inputLectura, habilitarFormulario }) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        // limpiar();
        e.preventDefault();

        if (nota.materia === '' || nota.estudiante === '' || nota.promedio === 0) {
            Swal.fire({
                text: `Por favor diligencia todos los campos`,
                icon: 'error',
            })
            return false;
        }

        if (String(nota.promedio).length !== 2) {
            Swal.fire({
                text: `El campo "Promedio" solo debe tener 2 digitos`,
                icon: 'warning',
            })
            return false;
        }

        guardarNota();
    }

    return (

        <Box
            component="form"
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

            <h2>Registrar notas</h2>
            <Grid container spacing={3}>
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

                                <MenuItem key={materia.id}>{materia.materia}</MenuItem>
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
                                <MenuItem key={estudiante.id}>{estudiante.nombres}</MenuItem>
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

        </Box >

    )
}