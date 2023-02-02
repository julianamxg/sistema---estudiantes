import { useForm } from "../../hooks/useFormEstudiante";
import { addEstudiante, editarEstudiante } from "../../services/datosEstudiante";
import { FunctionComponent } from "react";
import { BotonInicio } from "../BotonInicio";
import IEstudiante from "../entidades/IEstudiante";

export interface RegistrarEstudianteProps {
    guardarEstudiante: () => any
    estudiante: IEstudiante
    alCambiarValor: (key: string, value: string) => any
    limpiar: () => any
}

export const RegistrarEstudiante: FunctionComponent<RegistrarEstudianteProps> = ({ guardarEstudiante, estudiante, alCambiarValor, limpiar }) => {
    // const { id } = useParams()
    const { handleInputChange, handleOptionChange, resetearForm, setForm } = useForm()

    // useEffect(() => {
    //     if (estudiante.id) {
    //         const estudiante = getEstudianteById(id);
    //         setForm(estudiante)
    //     }
    // }, [estudiante.id])


    //evento de vista
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        limpiar()
        e.preventDefault();
        // resetearForm();
        guardarEstudiante();
        editarEstudiante();
        // estudiante.id ? editarEstudiante(estudiante.id, estudiante) : addEstudiante(estudiante);
    }
    return (
        <>
            <BotonInicio />
            <div className="formulario">
                <form onSubmit={handleSubmit}>
                    <h2>Registrar estudiante</h2>
                    <div className="grupos" >
                        <div className="grupo">
                            <div className="grupo-input">
                                <label htmlFor="nombres">Nombres</label>
                                <input onChange={(e) => alCambiarValor(e.target.name, e.target.value)} value={estudiante.nombres} type="text" name="nombres" id="nombres" placeholder="Ingresa los nombres" />
                            </div>

                            <div className="grupo-input">
                                <label htmlFor="apellidos">Apellidos</label>
                                <input
                                    onChange={(e) => {
                                        const { target: { name, value } } = e;
                                        alCambiarValor(name, value);
                                    }}
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
                                <select onChange={(e) => alCambiarValor(e.target.name, e.target.value)} value={estudiante.tDocumento} name="tDocumento" id="tDocumento">
                                    <option>Selecciona...</option>
                                    <option>Cedula de ciudadania</option>
                                    <option>Tarjeta de identidad</option>
                                </select>
                            </div>

                            <div className="grupo-input">
                                <label htmlFor="nDocumento">Número de documento</label>
                                <input onChange={(e) => alCambiarValor(e.target.name, e.target.value)} value={estudiante.nDocumento} type="number" name="nDocumento" id="nDocumento" placeholder="Ingresa el número de documento" />
                            </div>
                        </div>
                        <div className="grupo">
                            <div className="grupo-input">
                                <label htmlFor="grado">Grado</label>
                                <select onChange={(e) => alCambiarValor(e.target.name, e.target.value)} value={estudiante.grado} name="grado" id="grado">
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
                                <select onChange={(e) => alCambiarValor(e.target.name, e.target.value)} value={estudiante.dGrado} name="dGrado" id="dGrado">
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

