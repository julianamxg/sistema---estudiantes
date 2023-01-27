import uuid from "react-uuid";
import { Estudiante } from "../components/Estudiante";

export const getlistaEstudiantes = () => {
    if(!localStorage["@estudiantes"]){
        localStorage["@estudiantes"] = JSON.stringify([]);
    }

    let estudiantes = JSON.parse(localStorage["@estudiantes"])
    return estudiantes;
}

type EstudianteId = {
    id: string,
    nombres: string,
    apellidos: string,
    tDocumento: string,
    nDocumento: number,
    grado: string,
    dGrado: string
}

export const getEstudianteById = (id:string) => {
    const estudiantes = getlistaEstudiantes();
    const estudiante = estudiantes.find((estudiante:EstudianteId) => estudiante.id === id)
    return estudiante;
}

type Estudiante = {
    nombres: string,
    apellidos: string,
    tDocumento: string,
    nDocumento: number,
    grado: string,
    dGrado: string
}
export const addEstudiante = (estudiante:Estudiante) =>{
    const estudiantes = getlistaEstudiantes();
    estudiantes.push({id: uuid(), ...estudiante});
    localStorage["@estudiantes"] = JSON.stringify(estudiantes)
    
}

export const editarEstudiante = (id:string, newEstudiante:any) => {
    let estudiantes = getlistaEstudiantes();
    estudiantes = estudiantes.filter((estudiante:EstudianteId) => estudiante.id !== id);
    estudiantes.push(newEstudiante);
    localStorage["@estudiantes"] = JSON.stringify(estudiantes)
}

export const eliminarEstudiante = (id:string) => {
    let estudiantes = getlistaEstudiantes();
    estudiantes = estudiantes.filter((estudiante:EstudianteId) => estudiante.id !== id);
    localStorage["@estudiantes"] = JSON.stringify(estudiantes);
    
    

}
