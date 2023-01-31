import uuid from "react-uuid";
import IEstudiante from "../components/entidades/IEstudiante";
//estudiante
import { Estudiante } from "../components/estudiante/Estudiante";

export const getlistaEstudiantes = ()=>{
    if(!localStorage["@estudiantes"]){
        localStorage["@estudiantes"] = JSON.stringify([]);
    }

    let estudiantes = JSON.parse(localStorage["@estudiantes"])
    return estudiantes;
}

export const getEstudianteById = (id?:string) => {
    const estudiantes = getlistaEstudiantes();
    const estudiante = estudiantes.find((estudiante:IEstudiante) => estudiante.id === id)
    return estudiante;
}


export const addEstudiante = (estudiante:IEstudiante) =>{
    const estudiantes = getlistaEstudiantes();
    estudiantes.push({id: uuid(), ...estudiante});
    localStorage["@estudiantes"] = JSON.stringify(estudiantes)
    
}

export const editarEstudiante = (id?:string, newEstudiante?:any) => {
    let estudiantes = getlistaEstudiantes();
    estudiantes = estudiantes.filter((estudiante:IEstudiante) => estudiante.id !== id);
    estudiantes.push(newEstudiante);
    localStorage["@estudiantes"] = JSON.stringify(estudiantes)
}

export const eliminarEstudiante = (id?:string) => {
    let estudiantes = getlistaEstudiantes();
    estudiantes = estudiantes.filter((estudiante:IEstudiante) => estudiante.id !== id);
    localStorage["@estudiantes"] = JSON.stringify(estudiantes);

}


