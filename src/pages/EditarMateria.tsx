import uuid from "react-uuid";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import IMateria from "../components/modelos/materias/entidades/IMateria";
import { useEffect, useState } from "react";
import { addMateria, editarMateria, getMateriaById } from "../components/modelos/materias";
import { RegistrarMateria } from "../components/materia/RegistrarMateria";

function EditarMateria() {
    const [inputLectura, setInputLectura] = useState(true)
    const [materias, setMaterias] = useState<IMateria[]>([]);
    const [materia, setMateria] = useState<IMateria>({
        materia: "",
        nombreProfesor: ""
    });

    const { id } = useParams();
    const cargarMateria = async () => {
        const estudiante = await getMateriaById(id);
        setMateria(estudiante);
    };

    useEffect(() => {
        cargarMateria();
    }, [id]);
    

    function guardarMateria(): void {

        if (materia.id) {
            editarMateria(materia.id, materia);
        }
        else {
            let id = uuid();
            addMateria({ id, ...materia });
            setMaterias([...materias, { id, ...materia }]);
        }

        if (1 === 1) {
            Swal.fire({
              text: `Se ha guardado la materia de ${materia.materia}`,
              icon: 'success',
      
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
        setMateria({ ...materia, [name]: value })
    }

    const limpiarFormulario = () => {
        console.log('limpiar')
    }

    const habilitarFormulario = () =>{
        setInputLectura(!inputLectura)
      }
    
    return (
        <div className="App">
            <RegistrarMateria guardarMateria={guardarMateria} materia={materia} alCambiarValor={alcambiarValor} limpiar={limpiarFormulario} inputLectura={inputLectura} habilitarFormulario={habilitarFormulario}/>
        </div>
    );
}

export default EditarMateria;

