import uuid from "react-uuid";
import { RegistrarEstudiante } from "../components/estudiante/RegistrarEstudiante";
import IEstudiante from "../components/modelos/estudiantes/entidades/IEstudiante";
import { useEffect, useState } from "react";
import { addEstudiante, editarEstudiante, getEstudianteById } from "../components/modelos/estudiantes";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

function EditarEstudiante() {
    const [estudiantes, setEstudiantes] = useState<IEstudiante[]>([]);
    const [inputLectura, setInputLectura] = useState(true) 
    const [estudiante, setEstudiante] = useState<IEstudiante>({
        nombres: "",
        apellidos: "",
        tDocumento: "",
        nDocumento: 0,
        grado: "",
        dGrado: "''"
    });

    const { id } = useParams();

    useEffect(() => {
        console.log(estudiante)
        cargarEstudiante();
        setInputLectura(!inputLectura)
    }, []);

    function habilitarFormulario(): void{
        setInputLectura(!inputLectura)
      }
    
    const cargarEstudiante = async () => {
        const estudiante = await getEstudianteById(id);
        setEstudiante(estudiante);
    };

    function guardarEstudiante(): void {

        if (estudiante.id) {
            editarEstudiante(estudiante.id, estudiante);
        }
        else {
            let id = uuid();
            addEstudiante({ id, ...estudiante });
            setEstudiantes([...estudiantes, { id, ...estudiante }]);
        }

        if (estudiante) {
            Swal.fire({
                text: `Se ha guardado a ${estudiante.nombres} ${estudiante.apellidos}`,
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
        setEstudiante({ ...estudiante, [name]: value })
    }

    const limpiarFormulario = () => {
        console.log('limpiar')
    }

    return (
        <div className="App">
            <RegistrarEstudiante guardarEstudiante={guardarEstudiante} estudiante={estudiante} alCambiarValor={alcambiarValor} limpiar={limpiarFormulario} inputLectura={inputLectura} habilitarFormulario={habilitarFormulario}/>
        </div>
    );
}

export default EditarEstudiante;

