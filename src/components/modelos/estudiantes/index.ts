import uuid from "react-uuid";
import IEstudiante from "./entidades/IEstudiante";
//estudiante

export const getlistaEstudiantes = () => {
    if (!localStorage["@estudiantes"]) {
        localStorage["@estudiantes"] = JSON.stringify([]);
    }

    let estudiantes = JSON.parse(localStorage["@estudiantes"])
    return estudiantes;
}

export const getEstudianteById = (id?: string) => {
    const estudiantes = getlistaEstudiantes();
    const estudiante1 = estudiantes.find((estudiante: IEstudiante) => estudiante.id === id)
    return estudiante1;
}


export const addEstudiante = (estudiante: IEstudiante) => {
    const estudiantes = getlistaEstudiantes();
    estudiantes.push({ id: uuid(), ...estudiante });
    localStorage["@estudiantes"] = JSON.stringify(estudiantes)

}

// export const editarEstudiante = (id?: string, newEstudiante?: any) => {
//     let estudiantes = getlistaEstudiantes();
//     estudiantes = estudiantes.filter((estudiante: IEstudiante) => estudiante.id !== id);
//     estudiantes.push(newEstudiante);
//     localStorage["@estudiantes"] = JSON.stringify(estudiantes)

export const editarEstudiante = (id?: string, newEstudiante?: any) => {
    let estudiantes = getlistaEstudiantes();
    estudiantes = estudiantes.map((estudiante: IEstudiante) => estudiante.id === id ? newEstudiante : estudiante);
    localStorage["@estudiantes"] = JSON.stringify(estudiantes);



    // let estudiantes = getlistaEstudiantes();
    // let estudianteAEditar = estudiantes.find((estudiante: IEstudiante) => estudiante.id === id);
    // if (estudianteAEditar) {
    //     Object.assign(estudianteAEditar, newEstudiante);
    // }
    // localStorage["@estudiantes"] = JSON.stringify(estudiantes)

}

export const deleteEstudiante = (id?: string) => {
    let estudiantes = getlistaEstudiantes();
    estudiantes = estudiantes.filter((estudiante: IEstudiante) => estudiante && estudiante.id !== id); localStorage["@estudiantes"] = JSON.stringify(estudiantes);
    estudiantes = localStorage["@estudiantes"] ? JSON.parse(localStorage["@estudiantes"]) : [];

};



