import { useForm } from "../hooks/useFormEstudiante";
import React, { useState, useEffect, useContext, createContext } from 'react';
import { ListarEstudiantes } from '../components/estudiante/ListarEstudiantes';
import { RegistrarEstudiante } from '../components/estudiante/RegistrarEstudiante';
import { RegistrarEstudianteProps } from "../components/estudiante/RegistrarEstudiante";
import EstudianteIn from '../components/entidades/IEstudiante';
import { addEstudiante, getEstudianteById, editarEstudiante, getlistaEstudiantes } from "../services/datosEstudiante";
import { useParams } from "react-router-dom";
import IEstudiante from "../components/entidades/IEstudiante";
import { Estudiante } from "../components/estudiante/Estudiante";

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


  useEffect(() => {
    setEstudiante(getlistaEstudiantes());
  }, [])

  function guardarEstudiante(): void {
    console.log("Estudiante guardado")
  }
  const { setForm } = useForm()
  const { id } = useParams()

  useEffect(() => {
    if (id) {
      const estudiante = getEstudianteById(id);
      setForm(estudiante)
    }
  }, [id])

  const alcambiarValor = (key: string, value: string) => {
    setEstudiante({ ...estudiante, [key]: value })
  }

  const limpiarFormulario = () => {
    setEstudiante(initialState)
  }

  return (

    <div className="App">
      <RegistrarEstudiante guardarEstudiante={guardarEstudiante} estudiante={estudiante} alCambiarValor={alcambiarValor} limpiar={limpiarFormulario} />
      <ListarEstudiantes  />
    </div>

  );
}

export default InicioEstudiante;
