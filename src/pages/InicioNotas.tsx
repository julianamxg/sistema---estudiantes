import { RegistrarNotas } from "../components/notas/RegistrarNotas";
import { ListarNotas } from "../components/notas/ListarNotas";
import INotas from "../components/modelos/notas/entidades/INotas";
import { FunctionComponent, useEffect, useState } from "react";
import IMateria from "../components/modelos/materias/entidades/IMateria";
import { addNota, deleteNota, getListaNotas } from "../components/modelos/notas";
import uuid from "react-uuid";
import Swal from "sweetalert2";
import IEstudiante from "../components/modelos/estudiantes/entidades/IEstudiante";
import { getlistaMaterias } from "../components/modelos/materias";
import { getlistaEstudiantes } from "../components/modelos/estudiantes";



const InicioNotas: FunctionComponent = () => {
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
    }, [])

    function guardarNota() {
        let idNota = uuid()
        addNota({ id: idNota, ...nota });
        let listaNotas = [...notas]
        listaNotas.push({ id: idNota, ...nota })
        setNotas(listaNotas)
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

    function listaEstudiantes(): IEstudiante[] {
        return getlistaEstudiantes()
      }
      
      function listaMaterias(): IMateria[] {
        return getlistaMaterias();
      }
    return (
        <div className="App">
            <RegistrarNotas guardarNota={guardarNota} alCambiarValor={alcambiarValor} limpiar={limpiarFormulario} nota={nota} catalogos={{listaEstudiantes : listaEstudiantes(), listaMaterias : listaMaterias()}} />
            <ListarNotas eliminarNota={eliminarNota} notas={notas} />
        </div>
    )
}

export default InicioNotas;