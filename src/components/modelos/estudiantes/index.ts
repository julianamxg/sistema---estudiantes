import uuid from "react-uuid";
import { IPokemon } from "../pokemones/entidades/IPokemon";
import IEstudiante from "./entidades/IEstudiante";

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

export const addEstudiante = async (estudiante: IEstudiante) => {
    try {
        const response = await fetch('https://unpkg.com/pokemons@1.1.0/pokemons.json');
        const pokemones: IPokemon[] = await response.json();

        // Encuentra el objeto de pokemon que coincide con el nombre del avatar seleccionado
        const pokemonSeleccionado = pokemones.find(pokemon => pokemon.name === estudiante.avatar);

        // Si no se encuentra el pokemon, lanza una excepción
        if (!pokemonSeleccionado) {
            throw new Error('No se encontró el pokemon seleccionado.');
        }

        // Guarda la URL de la imagen en el objeto de estudiante
        estudiante.avatar = pokemonSeleccionado.imgnormal;

        const estudiantes = getlistaEstudiantes();
        estudiantes.push({ id: uuid(), ...estudiante });
        localStorage["@estudiantes"] = JSON.stringify(estudiantes);
    } catch (error) {
        console.error(error);
    }
}


export const editarEstudiante = (id?: string, newEstudiante?: any) => {
    let estudiantes = getlistaEstudiantes();
    estudiantes = estudiantes.map((estudiante: IEstudiante) => estudiante.id === id ? newEstudiante : estudiante);
    localStorage["@estudiantes"] = JSON.stringify(estudiantes);
}

export const deleteEstudiante = (id?: string) => {
    let estudiantes = getlistaEstudiantes();
    estudiantes = estudiantes.filter((estudiante: IEstudiante) => estudiante && estudiante.id !== id); localStorage["@estudiantes"] = JSON.stringify(estudiantes);
    estudiantes = localStorage["@estudiantes"] ? JSON.parse(localStorage["@estudiantes"]) : [];
};



