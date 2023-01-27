import { useForm } from "../hooks/useForm";
import { addEstudiante, getEstudianteById, editarEstudiante } from "../services/localstorage";
import Swal from "sweetalert2";
import { Link, useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { BotonInicio } from "./BotonInicio";

export const RegistrarEstudiante = () => {
    const { id } = useParams()
    const { inputs, handleInputChange, handleOptionChange, resetearForm, setForm } = useForm()

    useEffect(() => {
        if (id) {
            const estudiante = getEstudianteById(id);
            setForm(estudiante)
        }
    }, [id])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        resetearForm();
        id ? editarEstudiante(id, inputs) : addEstudiante(inputs);
        if (inputs) {
            Swal.fire({
                text: `Se ha guardado a ${inputs.nombres} ${inputs.apellidos}`,
                icon: 'success',
                
            })
            setTimeout(() => {
                window.location.reload();
            }, 3000);
        }
        else {
            Swal.fire({
                text: `No se pudo guardar al usuario`,
                icon: 'error',
            })
        }
    }
    return (
        <>
            <BotonInicio />
            <div className="formulario">
                <form onSubmit={handleSubmit}>
                    <h2>Registrar estudiante</h2>
                    {/* <Link to={'/'}>Inicio</Link> */}
                    <div className="grupos" >
                        <div className="grupo">
                            <div className="grupo-input">
                                <label htmlFor="nombres">Nombres</label>
                                <input onChange={handleInputChange} value={inputs.nombres} type="text" name="nombres" id="nombres" placeholder="Ingresa los nombres" />
                            </div>

                            <div className="grupo-input">
                                <label htmlFor="apellidos">Apellidos</label>
                                <input onChange={handleInputChange} value={inputs.apellidos} type="text" name="apellidos" id="apellidos" placeholder="Ingresa los apellidos" />
                            </div>
                        </div>
                        <div className="grupo">
                            <div className="grupo-input">
                                <label htmlFor="tDocumento">Tipo de documento</label>
                                <select onChange={handleOptionChange} value={inputs.tDocumento} name="tDocumento" id="tDocumento">
                                    <option>Selecciona...</option>
                                    <option>Cedula de ciudadania</option>
                                    <option>Tarjeta de identidad</option>
                                </select>
                            </div>

                            <div className="grupo-input">
                                <label htmlFor="nDocumento">Número de documento</label>
                                <input onChange={handleInputChange} value={inputs.nDocumento} type="number" name="nDocumento" id="nDocumento" placeholder="Ingresa el número de documento" />
                            </div>
                        </div>
                        <div className="grupo">
                            <div className="grupo-input">
                                <label htmlFor="grado">Grado</label>
                                <select onChange={handleOptionChange} value={inputs.grado} name="grado" id="grado">
                                    <option>Selecciona...</option>
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
                                <select onChange={handleOptionChange} value={inputs.dGrado} name="dGrado" id="dGrado">
                                    <option>Selecciona...</option>
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
                    <button type="submit">Guardar</button>
                </form>

            </div>
        </>
    )

}