import { editarEstudiante } from "../modelos/estudiantes";
import { FunctionComponent } from "react";
import { Menu } from "../Menu";
import IEstudiante from "../modelos/estudiantes/entidades/IEstudiante";
import Swal from "sweetalert2";

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

        if (!/^[a-zA-Z]+$/.test(estudiante.nombres.valueOf())) {
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

        if (!/^[a-zA-Z\s]+$/.test(estudiante.apellidos.valueOf())) {
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
            <Menu />
            <div className="formulario" id="formulario">
                <form onSubmit={handleSubmit}>
                    <h2>Guardar estudiante</h2>
                    <div className="grupos" >
                        <div className="grupo">
                            <div className="grupo-input">
                                <label htmlFor="nombres">Nombres</label>
                                <input disabled={inputLectura} onChange={(e) => alCambiarValor(e.target.name, e.target.value)} value={estudiante.nombres} type="text" name="nombres" id="nombres" placeholder="Ingresa los nombres" />
                            </div>

                            <div className="grupo-input">
                                <label htmlFor="apellidos">Apellidos</label>
                                <input
                                    onChange={(e) => {
                                        const { target: { name, value } } = e;
                                        alCambiarValor(name, value);
                                    }}
                                    disabled={inputLectura}
                                    value={estudiante.apellidos}
                                    type="text"
                                    name="apellidos"
                                    id="apellidos"
                                    placeholder="Ingresa los apellidos"
                                />

                            </div>
                        </div>
                        <div className="grupo">
                            <div className="grupo-input">
                                <label htmlFor="tDocumento">Tipo de documento</label>
                                <select disabled={inputLectura} onChange={(e) => alCambiarValor(e.target.name, e.target.value)} value={estudiante.tDocumento} name="tDocumento" id="tDocumento">
                                    <option value={1}>Selecciona...</option>
                                    <option>Cedula de ciudadania</option>
                                    <option>Tarjeta de identidad</option>
                                </select>

                            </div>

                            <div className="grupo-input">
                                <label htmlFor="nDocumento">Número de documento</label>
                                <input disabled={inputLectura} onChange={(e) => alCambiarValor(e.target.name, e.target.value)} value={estudiante.nDocumento} type="number" name="nDocumento" id="nDocumento" placeholder="Ingresa el número de documento" />
                            </div>
                        </div>
                        <div className="grupo">
                            <div className="grupo-input">
                                <label htmlFor="grado">Grado</label>
                                <select disabled={inputLectura} onChange={(e) => alCambiarValor(e.target.name, e.target.value)} value={estudiante.grado} name="grado" id="grado">
                                    <option value={1}>Selecciona...</option>
                                    <option>Primero</option>
                                    <option>Segundo</option>
                                    <option>Tercero</option>
                                    <option>Cuarto</option>
                                    <option>Quinto</option>
                                    <option>Sexto</option>
                                    <option>Septimo</option>
                                    <option>Octavo</option>
                                    <option>Noveno</option>
                                    <option>Decimo</option>
                                    <option>Once</option>
                                </select>
                            </div>

                            <div className="grupo-input">
                                <label htmlFor="dGrado">Director de grado</label>
                                <select disabled={inputLectura} onChange={(e) => alCambiarValor(e.target.name, e.target.value)} value={estudiante.dGrado} name="dGrado" id="dGrado">
                                    <option value={1}>Selecciona...</option>
                                    <option>Sandra Roncancio</option>
                                    <option>Luis Rodriguez</option>
                                    <option>Paola Sanchez</option>
                                    <option>Tatiana Galindo</option>
                                    <option>Luna Perez</option>
                                    <option>Claudia Lopez</option>
                                    <option>Felipe Romero</option>
                                    <option>Laura Martinez</option>
                                    <option>Maria Rodriguez</option>
                                    <option>Carolina Forero</option>
                                    <option>Carla Rodriguez</option>
                                </select>
                            </div>
                        </div>
                    </div>
                   
                    <button disabled={inputLectura} className="botonGuardar" type="submit">Guardar</button>
                    <div className="habilitar">
                        <input className="checkbox" onClick={habilitarFormulario} type="checkbox" name="habilitar" id="habilitar" />
                        <label htmlFor="habilitar">Habilitar formulario</label>
                    </div>
                </form>
            </div>
        </>
    )

}

