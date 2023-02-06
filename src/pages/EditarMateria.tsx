import uuid from "react-uuid";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";
import IMateria from "../components/entidades/IMateria";
import { useEffect, useState } from "react";
import { addMateria, editarMateria, getMateriaById } from "../services/datosMateria";
import { RegistrarMateria } from "../components/materia/RegistrarMateria";

function EditarMateria() {
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

    return (
        <div className="App">
            <RegistrarMateria guardarMateria={guardarMateria} materia={materia} alCambiarValor={alcambiarValor} limpiar={limpiarFormulario} />
        </div>
    );
}

export default EditarMateria;

