import { editarEstudiante } from "../modelos/estudiantes";
import { FunctionComponent } from "react";
import { MenuPrincipal } from "../Menu";
import IEstudiante from "../modelos/estudiantes/entidades/IEstudiante";
import Swal from "sweetalert2";
import Button from '@mui/material/Button';
import { TextField, Select, MenuItem, InputLabel, FormControl, Divider, Box, Container, Checkbox, FormControlLabel } from "@mui/material";
import { width } from "@mui/system";
// import '../../App.css'

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
}

export const RegistrarEstudiante: FunctionComponent<RegistrarEstudianteProps> = ({ guardarEstudiante, estudiante, alCambiarValor, limpiar, inputLectura, habilitarFormulario }) => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (estudiante.nombres === '' || estudiante.apellidos === '' || estudiante.tDocumento === '' || estudiante.nDocumento === 0 || estudiante.grado === '' || estudiante.dGrado === '') {
            Swal.fire({
                text: `Por favor diligencia todos los campos`,
                icon: 'error',
            })
            return false;
        }

        if (estudiante.nombres.length > 16 || estudiante.nombres.length < 4) {
            Swal.fire({
                text: `El campo "Nombres" debe tener de 4 a 16 caracteres`,
                icon: 'warning',
            })
            return false;
        }

        if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(estudiante.nombres.valueOf())) {
            Swal.fire({
                text: `El campo "Nombres" solo debe contener letras`,
                icon: 'warning',
            });
            return false;
        }

        if (estudiante.apellidos.length > 16 || estudiante.apellidos.length < 4) {
            Swal.fire({
                text: `El campo "Apellidos" debe tener de 4 a 16 caracteres`,
                icon: 'warning',
            })
            return false;
        }

        if (!/^[a-zA-ZÀ-ÿ\s]+$/.test(estudiante.apellidos.valueOf())) {
            Swal.fire({
                text: `El campo "Apellidos" solo debe contener letras`,
                icon: 'warning',
            });
            return false;
        }

        if (estudiante.tDocumento === "1") {
            Swal.fire({
                text: `Por favor selecciona un tipo de documento`,
                icon: 'warning',
            })
            return false;
        }

        if (String(estudiante.nDocumento).length !== 10) {
            Swal.fire({
                text: `El campo "Número de documento" debe tener 10 digitos`,
                icon: 'warning',
            })
            return false;
        }

        if (estudiante.grado === "1") {
            Swal.fire({
                text: `Por favor selecciona un grado`,
                icon: 'warning',
            })
            return false;
        }

        if (estudiante.dGrado === "1") {
            Swal.fire({
                text: `Por favor selecciona un director de grado`,
                icon: 'warning',
            })
            return false;
        }

        guardarEstudiante();
        editarEstudiante();
    }

    return (
        <>
            <MenuPrincipal />
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { width: '60ch' },
                    // margin: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: '5rem',
                    background: '#fff',
                    marginLeft: '5rem',
                    marginRight: '5rem',
                    border: '1px solid rgb(224, 224, 224)',
                    paddingTop: '3rem',
                    paddingBottom: '3rem'
                }}
                noValidate
                autoComplete="off"
                onSubmit={handleSubmit}
            >
                <h2>Guardar estudiante</h2>
                <div>
                    <FormControl>
                        <TextField sx={{
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                  borderBottomColor: '#000',
                                }},
                            m: 1,
                            width: '60ch',
                            
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
                    </FormControl>

                    <FormControl variant="filled"  >
                        <TextField
                            sx={{ m: 1, width: '60ch' }}
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
                    </FormControl>
                </div>
                <div>
                    <FormControl variant="filled" >
                        <InputLabel color="success" id="demo-simple-select-filled-label">Tipo de documento</InputLabel>
                        <Select
                            sx={{ m: 1, width: '60ch' }}
                            fullWidth
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled tDocumento"
                            disabled={inputLectura}
                            onChange={(e) => alCambiarValor(e.target.name, e.target.value)}
                            value={estudiante.tDocumento}
                            name="tDocumento"
                            color="success"
                        >
                            <MenuItem value={1}>Selecciona...</MenuItem >
                            <MenuItem value="Cedula de ciudadania" >Cedula de ciudadania</MenuItem >
                            <MenuItem value="Tarjeta de identidad" >Tarjeta de identidad</MenuItem >
                        </Select>
                    </FormControl>


                    <FormControl variant="filled" >
                        <TextField
                            sx={{ m: 1, width: '60ch' }}
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
                    </FormControl>
                </div>

                <div>
                    <FormControl variant="filled" >
                        <InputLabel color="success" id="demo-simple-select-filled-label">Grado</InputLabel>
                        <Select
                            sx={{ m: 1, width: '60ch' }}
                            disabled={inputLectura}
                            onChange={(e) => alCambiarValor(e.target.name, e.target.value)}
                            value={estudiante.grado}
                            name="grado"
                            id="grado"
                            color="success"
                        >
                            <MenuItem value={1}>Selecciona...</MenuItem>
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

                    <FormControl variant="filled" >
                        <InputLabel color="success" id="demo-simple-select-filled-label">Director de grado</InputLabel>
                        <Select
                            sx={{ m: 1, width: '60ch' }}
                            disabled={inputLectura}
                            onChange={(e) => alCambiarValor(e.target.name, e.target.value)}
                            value={estudiante.dGrado}
                            name="dGrado"
                            id="dGrado"
                            color="success"
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
                </div>
                <div >
                    <Button sx={{ marginTop: '1rem' }} style={estilosIndependientes} disabled={inputLectura} type="submit">Guardar</Button>
                </div>
                <FormControlLabel
                    label="Habilitar formulario"
                    control={
                        <Checkbox size="small" name="habilitar" id="habilitar" onClick={habilitarFormulario} color="success" />}
                />


            </Box>

        </>
    )

}

