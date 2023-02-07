import { RegistrarNotas } from "../components/notas/RegistrarNotas";
import { ListarNotas } from "../components/notas/ListarNotas";
import INotas from "../components/entidades/INotas";
import { FunctionComponent, useEffect, useState } from "react";
import IMateria from "../components/entidades/IMateria";
import { addNota, deleteNota, getListaNotas } from "../services/datosNotas";
import uuid from "react-uuid";
import Swal from "sweetalert2";
import IEstudiante from "../components/entidades/IEstudiante";
import { getlistaMaterias } from "../services/datosMateria";
import { getlistaEstudiantes } from "../services/datosEstudiante";


export interface CatalogosNotas {
    listaMaterias: IMateria[]
    listaEstudiantes: IEstudiante[]
}

const InicioNotas: FunctionComponent<CatalogosNotas> = ({ listaEstudiantes, listaMaterias }) => {
    const initialState: INotas = {
        estudiante: "",
        materia: "",
        promedio: 0
    }
    const [nota, setNota] = useState<INotas>(initialState);
    const [notas, setNotas] = useState<INotas[]>([]);

    //listar
    useEffect(() => {
        setNotas(getListaNotas());
        listaMaterias = getlistaMaterias();
        listaEstudiantes = getlistaEstudiantes()
    }, [])

    function guardarNota() {
        let idNota = uuid()
        addNota({ id: idNota, ...nota });
        notas.push({ id: idNota, ...nota })
        setNotas(notas)
        if (1 === 1) {
            Swal.fire({
                text: `Se ha guardado la nota de ${nota.estudiante} en la materia de ${nota.materia} con un promedio de ${nota.promedio}`,
                icon: 'success',

            })
        }
        else {
            Swal.fire({
                text: `No se pudo guardar al usuario`,
                icon: 'error',
            })
        }
    }

    const alcambiarValor = (name: string, value: string) => {
        setNota({ ...nota, [name]: value })
    }

    const limpiarFormulario = () => {
        setNota(initialState)
    }


    function eliminarNota(id?: string): void {
        deleteNota(id);
        let nota = notas.filter((nota: INotas) => nota && nota.id !== id)
        setNotas(nota);
    }


    return (
        <div className="App">
            <RegistrarNotas guardarNota={guardarNota} alCambiarValor={alcambiarValor} limpiar={limpiarFormulario} nota={nota} catalogos={{listaMaterias, listaEstudiantes}} />
            <ListarNotas eliminarNota={eliminarNota} notas={notas} />
        </div>
    )
}

export default InicioNotas;