import React, { useState, useEffect, useContext, createContext } from 'react';
import { ListarEstudiantes } from '../components/estudiante/ListarEstudiantes';
import { RegistrarEstudiante } from '../components/estudiante/RegistrarEstudiante';
import { addEstudiante, editarEstudiante, getlistaEstudiantes, deleteEstudiante } from "../services/datosEstudiante";
import IEstudiante from "../components/entidades/IEstudiante";
import Swal from "sweetalert2";


export const context: any = React.createContext;

function InicioEstudiante() {
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

  //registrar
  function guardarEstudiante(): void {
    addEstudiante(estudiante);
    estudiantes.push(estudiante)
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

  //listar
  useEffect(() => {
    setEstudiantes(getlistaEstudiantes());
  }, [])


  function verEstudiante(): void {
    console.log("ver estudiantes")
  }


  //editar
  // const { setForm } = useForm()

  // const { id } = useParams()

  // const setForm = (newValues: any) => {
  //   setEstudiante(newValues)
  // }

  // useEffect(() => {
  //   if (estudiante.id) {
  //     const estudianteE = getEstudianteById(id);
  //     setForm(estudianteE)
  //   }
  // }, [estudiante.id])


  //eliminar
  // function eliminarEstudiante(id?:string): void {
  //   // console.log("eiminado")
  //   deleteEstudiante(id);
  //   setEstudiantes(getlistaEstudiantes().filter((estudiante:IEstudiante) => estudiante.id !== estudiante.id));

  // }


  // function eliminarEstudiante(id?:string): void {
  //   let estudiantes = getlistaEstudiantes();
  //   setEstudiantes (estudiantes.filter((estudiante:IEstudiante) => estudiante && estudiante.id !== id));
  //   deleteEstudiante(id);
  //   // setEstudiantes(estudiantes.filter((estudiante:IEstudiante) => estudiante.id !== id));
  // }

  function eliminarEstudiante(id?: string): void {
    deleteEstudiante(id);
    setEstudiantes(prevState => prevState.filter((estudiante: IEstudiante) => estudiante && estudiante.id !== id));
  }




  return (

    <div className="App">
      <RegistrarEstudiante guardarEstudiante={guardarEstudiante} estudiante={estudiante} alCambiarValor={alcambiarValor} limpiar={limpiarFormulario} />
      <ListarEstudiantes editarEstudiante={editarEstudiante} eliminarEstudiante={eliminarEstudiante} verEstudiante={verEstudiante} estudiantes={estudiantes} />
    </div>

  );
}

export default InicioEstudiante;