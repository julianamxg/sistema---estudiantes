import uuid from "react-uuid";
import { RegistrarEstudiante } from "../components/estudiante/RegistrarEstudiante";
import IEstudiante from "../components/entidades/IEstudiante";
import { useEffect, useState } from "react";
import { addEstudiante, getEstudianteById } from "../services/datosEstudiante";
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
        let idEstudiante = uuid()
        addEstudiante({ id: idEstudiante, ...estudiante });
        setEstudiantes([...estudiantes, { id: idEstudiante, ...estudiante }])
        
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


