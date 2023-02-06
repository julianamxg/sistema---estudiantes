import { FunctionComponent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import uuid from "react-uuid";
import Swal from "sweetalert2";
import IEstudiante from "../components/entidades/IEstudiante";
import IMateria from "../components/entidades/IMateria";
import INotas from "../components/entidades/INotas";
import { RegistrarNotas } from "../components/notas/RegistrarNotas";
import { editarNota, getNotaById, addNota } from "../services/datosNotas";


interface CatalogosNotas {
    listaMaterias: IMateria[]
    listaEstudiantes: IEstudiante[]
}

const EditarNota:FunctionComponent<CatalogosNotas> = ({listaEstudiantes, listaMaterias}) => {
    const [notas, setNotas] = useState<INotas[]>([]);
    const [nota, setNota] = useState<INotas>({
        estudiante: "",
        materia: "",
        promedio: 0
    });


    const { id } = useParams();
    const cargarNota = async () => {
        const nota = await getNotaById(id);
        setNota(nota)
    }


    useEffect(() => {
        cargarNota();
    }, [id]);


 
    function guardarNota(): void {

        if (nota.id) {
            editarNota(nota.id, nota);
        }
        else {
            let id = uuid();
            addNota({ id, ...nota });
            setNotas([...notas, { id, ...nota }]);
        }

        if (1 === 1) {
            Swal.fire({
                text: `Se ha guardado la nota de ${nota.estudiante} en la materia ${nota.materia} con promedio ${nota.promedio}`,
                icon: 'success'
      
            })
          }
          else {
            Swal.fire({
              text: `No se pudo guardar la materia`,
              icon: 'error',
            })
          }
    }

    const alcambiarValor = (name: string, value: string) => {
        setNota({ ...nota, [name]: value })
    }

    const limpiarFormulario = () => {
        console.log('limpiar')
    }


    

    return (
        <RegistrarNotas guardarNota={guardarNota} alCambiarValor={alcambiarValor} limpiar={limpiarFormulario} nota={nota} catalogos={{listaMaterias, listaEstudiantes}}/>
    )
}

export default EditarNota;