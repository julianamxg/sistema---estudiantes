import uuid from "react-uuid";
import INotas from "./entidades/INotas";

export const getListaNotas = () =>{
    if(!localStorage['@notas']){
        localStorage['@notas'] = JSON.stringify([])
    }

    let notas = JSON.parse(localStorage["@notas"])
    return notas;
}

export const getNotaById = (id?:string) => {
    const notas = getListaNotas();
    const nota1 = notas.find((nota: INotas) => nota.id === id)
    return nota1;
}

export const addNota = (nota: INotas) => {
    const notas = getListaNotas();
    notas.push({ id: uuid(), ...nota});
    localStorage['@notas'] = JSON.stringify(notas)
}

export const editarNota = (id?: string, newNota?: INotas) => {
    let notas = getListaNotas();
    notas = notas.map((nota: INotas) => nota.id === id ? newNota: nota);
    localStorage["@notas"] = JSON.stringify(notas);
}

export const deleteNota = (id?: string) => {
    let notas = getListaNotas();
    notas = notas.filter((nota: INotas) => nota && nota.id !== id); 
    localStorage["@notas"] = JSON.stringify(notas);
    notas = localStorage["@notas"] ? JSON.parse(localStorage["@notas"]) : [];
};