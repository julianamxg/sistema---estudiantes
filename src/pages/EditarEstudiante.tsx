import uuid from "react-uuid";
import { RegistrarEstudiante } from "../components/estudiante/RegistrarEstudiante";
import IEstudiante from "../components/entidades/IEstudiante";
import { useEffect, useState } from "react";
import { addEstudiante, getEstudianteById } from "../services/datosEstudiante";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

function EditarEstudiante() {
    const initialState: IEstudiante = {
        nombres: "",
        apellidos: "",
        tDocumento: "",
        nDocumento: 0,
        grado: "",
        dGrado: "''"
    }
    const [estudiante, setEstudiante] = useState<IEstudiante>(initialState);
    const [estudiantes, setEstudiantes] = useState<IEstudiante[]>([]);

    const { id } = useParams()

    useEffect(() => {
        if (estudiante.id) {
            const estudiante = getEstudianteById(id);
            setForm(estudiante)
        }
    }, [estudiante.id])

    function guardarEstudiante(): void {
        let idEstudiante = uuid()
        addEstudiante({ id: idEstudiante, ...estudiante });
        estudiantes.push({ id: idEstudiante, ...estudiante })
        setEstudiantes(estudiantes)
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
        setEstudiante(initialState)
    }
    return (

        <div className="App">
            <RegistrarEstudiante guardarEstudiante={guardarEstudiante} estudiante={estudiante} alCambiarValor={alcambiarValor} limpiar={limpiarFormulario} />
        </div>

    );
}

export default EditarEstudiante;

function setForm(estudiante: any) {
    throw new Error("Function not implemented.");
}
