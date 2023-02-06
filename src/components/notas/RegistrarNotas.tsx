import { FunctionComponent } from "react";
import INotas from "../entidades/INotas";
import { Menu } from "../Menu"



export interface RegistrarNotasProps{
    guardarNota: ()=> any;
    nota: INotas;
    alCambiarValor: (key: string, value: string) => any
    limpiar: () => any;
}

export const RegistrarNotas: FunctionComponent<RegistrarNotasProps> = ({ guardarNota, nota, alCambiarValor, limpiar }) => {
   const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
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
                                <option>Matematicas</option>
                                <option>Español</option>
                            </select>
                        </div>

                        <div className="grupo-input">
                            <label htmlFor="estudiante">Estudiante</label>
                            <select onChange={(e) => alCambiarValor(e.target.name, e.target.value)} value={nota.estudiante}  name="estudiante" id="estudiante">
                                <option >Selecciona...</option>
                                <option>Jenny</option>
                                <option>Juliana</option>
                            </select>
                        </div>

                        <div className="grupo-input">
                            <label htmlFor="nota">Nota</label>
                            <input onChange={(e) => alCambiarValor(e.target.name, e.target.value)} value={nota.promedio} type="number" name="promedio" id="promedio" placeholder="Ingresa el promedio de la materia" />
                            
                        </div>
                    </div>
                    <button type="submit">Guardar</button>
                </form>

            </div>
        </>
    )
}