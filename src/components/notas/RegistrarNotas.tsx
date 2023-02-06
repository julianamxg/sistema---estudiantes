import { FunctionComponent } from "react";import IEstudiante from "../entidades/IEstudiante";
import IMateria from "../entidades/IMateria";
 import INotas from "../entidades/INotas";
import { ListarEstudiantes } from "../estudiante/ListarEstudiantes";
import { Menu } from "../Menu"

interface CatalogosNotas {
    listaMaterias : IMateria[]
    listaEstudiantes : IEstudiante[]
}

export interface RegistrarNotasProps {
    guardarNota: () => any;
    nota: INotas;
    alCambiarValor: (key: string, value: string) => any
    limpiar: () => any;
    catalogos : CatalogosNotas
}

export const RegistrarNotas: FunctionComponent<RegistrarNotasProps> = ({ guardarNota, nota, alCambiarValor, limpiar, catalogos }) => {
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
                                {catalogos.listaMaterias.map((materia) => (
                                       
                                    <option key={materia.id}>{materia.materia}</option>
                                ))}
                            </select>

                        </div>
                        <div className="grupo-input">
                            <label htmlFor="estudiante">Estudiante</label>
                            <select onChange={(e) => alCambiarValor(e.target.name, e.target.value)} value={nota.estudiante} name="estudiante" id="estudiante">
                                <option>Selecciona...</option>
                                {catalogos.listaEstudiantes.map((estudiante) => (
                                    <option key={estudiante.id}>{estudiante.nombres}</option>
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