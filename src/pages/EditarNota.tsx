import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import uuid from "react-uuid";
import Swal from "sweetalert2";
import IEstudiante from "../components/modelos/estudiantes/entidades/IEstudiante";
import IMateria from "../components/modelos/materias/entidades/IMateria";
import INotas from "../components/modelos/notas/entidades/INotas";
import { RegistrarNotas } from "../components/notas/RegistrarNotas";
import { getlistaEstudiantes } from "../components/modelos/estudiantes";
import { getlistaMaterias } from "../components/modelos/materias";
import { editarNota, getNotaById, addNota } from "../components/modelos/notas";



const EditarNota= () => {
    const [inputLectura, setInputLectura] = useState(true)
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


    
    function listaEstudiantes(): IEstudiante[] {
        return getlistaEstudiantes()
      }
      
      function listaMaterias(): IMateria[] {
        return getlistaMaterias();
      }

      const habilitarFormulario = () =>{
        setInputLectura(!inputLectura)
      }

    return (
        <RegistrarNotas guardarNota={guardarNota} alCambiarValor={alcambiarValor} limpiar={limpiarFormulario} nota={nota} catalogos={{listaMaterias: listaMaterias(), listaEstudiantes: listaEstudiantes()}} inputLectura={inputLectura} habilitarFormulario={habilitarFormulario}/>
    )
}

export default EditarNota;