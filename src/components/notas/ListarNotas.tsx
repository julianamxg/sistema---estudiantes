import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'
import INotas from '../modelos/notas/entidades/INotas';
import { FunctionComponent } from 'react';
import { Nota } from './Nota';
import { editarNota } from '../modelos/notas';

export interface ListarNotasProps {
    eliminarNota: (id?: string) => any
    notas: INotas[];
}

export const ListarNotas: FunctionComponent<ListarNotasProps> = ({ eliminarNota, notas }) => {
    return (
            <div className="tabla">
                <div className="encabezadoTabla">
                    <h2>Notas registradas</h2>
                    <button id="botonRecargar"><FontAwesomeIcon icon={faRotateRight} /></button>
                </div>
                {
                    notas.length > 0 ? (
                        <table>
                            <thead>
                                <tr>
                                    <td>Materia</td>
                                    <td>Estudiante</td>
                                    <td>Promedio</td>
                                    <td colSpan={2}>Acciones</td>
                                </tr>
                            </thead>

                            <tbody>
                            {
                                notas.map((nota: INotas) =>
                                  <Nota key={nota.id} nota={nota} editarNota={editarNota} eliminarNota={eliminarNota}/>)}
                        </tbody>
                    </table>
                ) : (
                    <p className="">No hay notas</p>
                )
            }

        </div >
    )
}