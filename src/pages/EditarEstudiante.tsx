import uuid from "react-uuid";
import { RegistrarEstudiante } from "../components/estudiante/RegistrarEstudiante";
import IEstudiante from "../components/entidades/IEstudiante";
import { useEffect, useState } from "react";
import { addEstudiante, editarEstudiante, getEstudianteById } from "../services/datosEstudiante";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

function EditarEstudiante() {
    const [estudiantes, setEstudiantes] = useState<IEstudiante[]>([]);
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
        const cargarEstudiante = async () => {
            const estudiante = await getEstudianteById(id);
            setEstudiante(estudiante);
        };

        cargarEstudiante();
    }, [id]);

    function guardarEstudiante(): void {
        // if (estudiante.id) {
        //     estudiantes = estudiantes.filter((estudiante:IEstudiante) => estudiante.id !== id);
        //   }

        // addEstudiante({ id, ...estudiante });
        // setEstudiantes([...estudiantes, { id, ...estudiante }])
        // estudiante.id ? editarEstudiante(estudiante.id, estudiante) : addEstudiante(estudiante);

        let id = uuid();
        if (estudiante.id) {
            editarEstudiante(estudiante.id, estudiante);
          } else {
            let id = uuid();
            addEstudiante({ id, ...estudiante });
            setEstudiantes([...estudiantes, { id, ...estudiante }]);
          }
          
          


        if (1 === 1) {
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
            <RegistrarEstudiante guardarEstudiante={guardarEstudiante} estudiante={estudiante} alCambiarValor={alcambiarValor} limpiar={limpiarFormulario} />
        </div>

    );
}

export default EditarEstudiante;

