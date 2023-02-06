import React, { useState, useEffect, useContext, createContext, FunctionComponent } from 'react';
import { ListarEstudiantes } from '../components/estudiante/ListarEstudiantes';
import { RegistrarEstudiante } from '../components/estudiante/RegistrarEstudiante';
import { addEstudiante, editarEstudiante, getlistaEstudiantes, deleteEstudiante } from "../services/datosEstudiante";
import IEstudiante from "../components/entidades/IEstudiante";
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

  useEffect(() => {
    setEstudiantes(getlistaEstudiantes());
    console.log(getlistaEstudiantes())
  }, [])

  //registrar
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

  //listar
  function verEstudiante(): void {
    console.log("ver estudiantes")
  }

 

  function eliminarEstudiante(id?: string): void {
    deleteEstudiante(id);
    let est = estudiantes.filter((estudiante: IEstudiante) => estudiante && estudiante.id !== id)
    setEstudiantes(est);
  }
  
  return (
    <div className="App">
      <RegistrarEstudiante guardarEstudiante={guardarEstudiante} estudiante={estudiante} alCambiarValor={alcambiarValor} limpiar={limpiarFormulario} />
      <ListarEstudiantes editarEstudiante={editarEstudiante} eliminarEstudiante={eliminarEstudiante} verEstudiante={verEstudiante} estudiantes={estudiantes} />
    </div>
  );
}

export default InicioEstudiante;