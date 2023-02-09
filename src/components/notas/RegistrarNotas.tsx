import { FunctionComponent } from "react";import IEstudiante from "../modelos/estudiantes/entidades/IEstudiante";
import IMateria from "../modelos/materias/entidades/IMateria";
 import INotas from "../modelos/notas/entidades/INotas";
import { MenuPrincipal } from "../Menu"
import Swal from "sweetalert2";

interface CatalogosNotas {
    listaMaterias : IMateria[]
    listaEstudiantes : IEstudiante[]
}

export interface RegistrarNotasProps {
    guardarNota: () => any;
    nota: INotas;
    alCambiarValor: (key: string, value: string) => any
    limpiar: () => any;
    catalogos : CatalogosNotas;
    inputLectura: any;
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

        if (String(nota.promedio).length !== 2){
            Swal.fire({
                text: `El campo "Promedio" solo debe tener 2 digitos`,
                icon: 'warning',
            })
            return false;
        }

        guardarNota();
    }

    return (
        <>
            <MenuPrincipal />
            <div className="formulario">
                <form onSubmit={handleSubmit}>
                    <h2>Registrar notas</h2>
                    {/* <Link to={'/'}>Inicio</Link> */}
                    <div className="grupos" >
                        <div className="grupo-input">
                            <label htmlFor="materia">Materia</label>
                            <select disabled={inputLectura} onChange={(e) => alCambiarValor(e.target.name, e.target.value)} value={nota.materia} name="materia" id="materia">
                        
                               <option>Selecciona...</option>
                                {catalogos.listaMaterias.map((materia) => (
                                       
                                    <option key={materia.id}>{materia.materia}</option>
                                ))}
                            </select>

                        </div>
                        <div className="grupo-input">
                            <label htmlFor="estudiante">Estudiante</label>
                            <select disabled={inputLectura} onChange={(e) => alCambiarValor(e.target.name, e.target.value)} value={nota.estudiante} name="estudiante" id="estudiante">
                                <option>Selecciona...</option>
                                {catalogos.listaEstudiantes.map((estudiante) => (
                                    <option key={estudiante.id}>{estudiante.nombres}</option>
                                ))}
                            </select>
                        </div>
                        <div className="grupo-input">
                            <label htmlFor="nota">Nota</label>
                            <input disabled={inputLectura} onChange={(e) => alCambiarValor(e.target.name, e.target.value)} value={nota.promedio} type="number" name="promedio" id="promedio" placeholder="Ingresa el promedio de la materia" />
                        </div>
                        <button disabled={inputLectura} type="submit">Guardar</button>
                        <div className="habilitar">
                        <input className="checkbox" onClick={habilitarFormulario} type="checkbox" name="habilitar" id="habilitar" />
                        {/* <FontAwesomeIcon icon={faCheck} ></FontAwesomeIcon> */}
                        <label htmlFor="habilitar">Habilitar formulario</label>
                    </div>
                    </div>
                </form>
            </div>
        </>
    )
}