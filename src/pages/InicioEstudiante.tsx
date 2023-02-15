import { useState, useEffect} from 'react';
import { ListarEstudiantes } from '../components/estudiante/ListarEstudiantes';
import { RegistrarEstudiante } from '../components/estudiante/RegistrarEstudiante';
import { addEstudiante, editarEstudiante, getlistaEstudiantes, deleteEstudiante } from "../components/modelos/estudiantes";
import IEstudiante from "../components/modelos/estudiantes/entidades/IEstudiante";
import Swal from "sweetalert2";
import uuid from 'react-uuid';


const InicioEstudiante = () => {
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
  const [inputLectura, setInputLectura] = useState(true)


  useEffect(() => {
    setEstudiantes(getlistaEstudiantes());
  }, [])

  const habilitarFormulario = () =>{
    setInputLectura(!inputLectura)
  }

  function guardarEstudiante(): void {
    let idEstudiante = uuid()
    addEstudiante({ id: idEstudiante, ...estudiante });
    let listaEstudiantes = [...estudiantes]
    listaEstudiantes.push({ id: idEstudiante, ...estudiante })
    setEstudiantes(listaEstudiantes)
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
    limpiarFormulario();
  }

  const alcambiarValor = (name: string, value: string) => {
    setEstudiante({ ...estudiante, [name]: value })
  }

  const limpiarFormulario = () => {
    setEstudiante(initialState)
  }

  function eliminarEstudiante(id?: string): void {
    deleteEstudiante(id);
    let est = estudiantes.filter((estudiante: IEstudiante) => estudiante && estudiante.id !== id)
    setEstudiantes(est);
  }

  return (
    <div className="App">
      <RegistrarEstudiante guardarEstudiante={guardarEstudiante} estudiante={estudiante} alCambiarValor={alcambiarValor} limpiar={limpiarFormulario} inputLectura={inputLectura} habilitarFormulario={habilitarFormulario}/>
      {inputLectura ? <></> :<ListarEstudiantes editarEstudiante={editarEstudiante} eliminarEstudiante={eliminarEstudiante} estudiantes={estudiantes} />}
    </div>
  );
}

export default InicioEstudiante;