import { FunctionComponent } from "react";import IEstudiante from "../entidades/IEstudiante";
import IMateria from "../entidades/IMateria";
 import INotas from "../entidades/INotas";
import { Menu } from "../Menu"

let estudiantes = localStorage.getItem("@estudiantes");
let estudiantesArray: IEstudiante[] = [];
if (estudiantes) {
    try {
        estudiantesArray = JSON.parse(estudiantes);
    } catch (error) {
        console.error("No se pudo parsear el JSON de estudiantes", error);
    }
}
let materias = localStorage.getItem("@materias");
let materiasArray: IMateria[] = [];
if (materias) {
    materiasArray = JSON.parse(materias);
    
}





export interface RegistrarNotasProps {
    guardarNota: () => any;
    nota: INotas;
    alCambiarValor: (key: string, value: string) => any
    limpiar: () => any;
}
export const RegistrarNotas: FunctionComponent<RegistrarNotasProps> = ({ guardarNota, nota, alCambiarValor, limpiar }) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        limpiar();
        e.preventDefault();
        guardarNota();
    }

 
    return (
        <>
            <Menu />
            <div className="formulario">
                <form onSubmit={handleSubmit}>
                    <h2>Registrar notas</h2>
                    {/* <Link to={'/'}>Inicio</Link> */}
                    <div className="grupos" >
                        <div className="grupo-input">
                            <label htmlFor="materia">Materia</label>
                            <select onChange={(e) => alCambiarValor(e.target.name, e.target.value)} value={nota.materia} name="materia" id="materia">
                        
                               <option>Selecciona...</option>
                                {materiasArray.map((materias) => (
                                       
                                    <option key={materias.id}>{materias.materia}</option>
                                ))}
                            </select>

                        </div>
                        <div className="grupo-input">
                            <label htmlFor="estudiante">Estudiante</label>
                            <select onChange={(e) => alCambiarValor(e.target.name, e.target.value)} value={nota.estudiante} name="estudiante" id="estudiante">
                                <option>Selecciona...</option>
                                {estudiantesArray.map((estudiantes) => (
                                    <option key={estudiantes.id}>{estudiantes.nombres}</option>
                                ))}
                            </select>
                        </div>
                        <div className="grupo-input">
                            <label htmlFor="nota">Nota</label>
                            <input onChange={(e) => alCambiarValor(e.target.name, e.target.value)} value={nota.promedio} type="number" name="promedio" id="promedio" placeholder="Ingresa el promedio de la materia" />
                        </div>
                        <button type="submit">Guardar</button>
                    </div>
                </form>
            </div>
        </>
    )
}