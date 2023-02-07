import uuid from "react-uuid";
import IMateria from "./entidades/IMateria";

export const getlistaMaterias = () => {
    if (!localStorage["@materias"]) {
        localStorage["@materias"] = JSON.stringify([]);
    }

    let materias = JSON.parse(localStorage["@materias"])
    return materias;
}

export const getMateriaById = (id?: string) => {
    const materias = getlistaMaterias();
    const materia1 = materias.find((materia: IMateria) => materia.id === id)
    return materia1;
}

export const addMateria = (materia: IMateria) => {
    const materias = getlistaMaterias();
    materias.push({ id: uuid(), ...materia });
    localStorage["@materias"] = JSON.stringify(materias)

}

export const editarMateria = (id?: string, newMateria?: any) => {
    let materias = getlistaMaterias();
    materias = materias.map((materia: IMateria) => materia.id === id ? newMateria : materia);
    localStorage["@materias"] = JSON.stringify(materias);

}

export const deleteMateria = (id?: string) => {
    let materias = getlistaMaterias();
    materias = materias.filter((materia: IMateria) => materia && materia.id !== id); 
    localStorage["@materias"] = JSON.stringify(materias);
    materias = localStorage["@materias"] ? JSON.parse(localStorage["@materias"]) : [];
};