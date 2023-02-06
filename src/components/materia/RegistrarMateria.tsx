import { FunctionComponent } from "react";
import IMateria from "../entidades/IMateria";
import { Menu } from "../Menu"
export interface RegistrarMateriaProps{
    guardarMateria: () => any;
    materia: IMateria;
    alCambiarValor: (key: string, value:string) =>any;
    limpiar: () => any
}

export const RegistrarMateria: FunctionComponent<RegistrarMateriaProps> = ({guardarMateria, materia, alCambiarValor, limpiar}) =>{
   
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        limpiar();
        e.preventDefault();
        guardarMateria();
    }
    return(
        <>
        <Menu />
        <div className="formulario materia">
        <form onSubmit={handleSubmit}>
            <h2>Guardar materia</h2>
            <div className="grupos materia" >
                    <div className="grupo-input">
                        <label htmlFor="materia">Materia</label>
                        <input onChange={(e) => alCambiarValor(e.target.name, e.target.value)} value={materia.materia} type="text" name="materia" id="materia" placeholder="Ingresa el nombre de la materia" />
                    </div>
                    <div className="grupo-input">
                        <label htmlFor="nombreProfesor">Nombre del profesor</label>
                        <select onChange={(e) => alCambiarValor(e.target.name, e.target.value)} value={materia.nombreProfesor} name="nombreProfesor" id="nombreProfesor">
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
            <button type="submit">Guardar</button>
        </form>

    </div>
    </>
    )
}