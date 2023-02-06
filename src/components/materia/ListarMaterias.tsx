import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'
import IMateria from '../entidades/IMateria'
import { FunctionComponent } from 'react'
import { Materia } from './Materia'

export interface ListarMateriasProps {
    eliminarMateria:(id?:string) => any
    materias: IMateria[]
}

export const ListarMaterias: FunctionComponent<ListarMateriasProps> = ({ eliminarMateria, materias }) => {
    return (
        <div className="tabla">
            <div className="encabezadoTabla">
                <h2>Materias registradas</h2>
                <button id="botonRecargar"><FontAwesomeIcon icon={faRotateRight} /></button>
            </div>
            {
                materias.length > 0 ? (
                    <table>
                        <thead>
                            <tr>
                                <td>Materia</td>
                                <td>Profesora</td>
                                <td colSpan={2}>Acciones</td>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                materias.map((materia: IMateria) =>
                                    materia ? <Materia key={materia.id} eliminarMateria={eliminarMateria} materia={materia} /> : null)}
                        </tbody>
                    </table>
                ) : (
                    <p className="">No hay materias</p>
                )

            }
        </div>
    )
}