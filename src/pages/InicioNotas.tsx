import { RegistrarNotas } from "../components/notas/RegistrarNotas";
import { ListarNotas } from "../components/notas/ListarNotas";
import INotas from "../components/modelos/notas/entidades/INotas";
import { FunctionComponent, useEffect, useState } from "react";
import IMateria from "../components/modelos/materias/entidades/IMateria";
import { addNota, deleteNota, editarNota, getListaNotas, getNotaById } from "../components/modelos/notas";
import uuid from "react-uuid";
import IEstudiante from "../components/modelos/estudiantes/entidades/IEstudiante";
import { getlistaMaterias } from "../components/modelos/materias";
import { getlistaEstudiantes } from "../components/modelos/estudiantes";
import React from "react";
import { Alert, Box, Modal, Snackbar } from "@mui/material";



const InicioNotas: FunctionComponent = () => {
    const initialState: INotas = {
        estudiante: "",
        materia: "",
        promedio: 0
    }

    const [inputLectura, setInputLectura] = useState(true)
    const [nota, setNota] = useState<INotas>(initialState);
    const [notas, setNotas] = useState<INotas[]>([]);
    const [idNotaEditar, setIdNotaEditar] = useState<string>("");

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(!open)
        setNota(initialState)
    };

    const handleOpenEditar = (id: string) => {
        setOpen(!open)
        const nota = getNotaById(id);
        setNota(nota);
    };

    useEffect(() => {
        setNotas(getListaNotas());
    }, [])

    function guardarNota() {
        if (nota.id) {
            const index = notas.findIndex((n) => n.id === nota.id);
            const nuevasNotas = [...notas];
            nuevasNotas[index] = nota;
            setNotas(nuevasNotas);
            editarNota(nota.id, nota);
        }
        else {
            const id = uuid();
            addNota({ id, ...nota });
            setNotas([...notas, { id, ...nota }]);
        }
        limpiarFormulario();
    }



    const alcambiarValor = (name: string, value: string) => {
        setNota({ ...nota, [name]: value })
    }

    const limpiarFormulario = () => {
        setNota(initialState)
    }


    function eliminarNota(id?: string): void {
        deleteNota(id);
        let nota = notas.filter((nota: INotas) => nota && nota.id !== id)
        setNotas(nota);
    }

    function listaEstudiantes(): IEstudiante[] {
        return getlistaEstudiantes()
    }

    function listaMaterias(): IMateria[] {
        return getlistaMaterias();
    }

    const habilitarFormulario = () => {
        setInputLectura(!inputLectura)
    }

    return (
        <div className="App">
            <Modal
                open={open}
                onClose={handleOpen}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box>
                    <RegistrarNotas guardarNota={guardarNota} alCambiarValor={alcambiarValor} limpiar={limpiarFormulario} nota={nota} catalogos={{ listaEstudiantes: listaEstudiantes(), listaMaterias: listaMaterias() }} inputLectura={inputLectura} habilitarFormulario={habilitarFormulario} handleClose={handleOpen} />
                </Box>
            </Modal>
            <ListarNotas
                eliminarNota={eliminarNota}
                notas={notas}
                nota={nota}
                handleOpen={handleOpen}
                handleOpenEditar={handleOpenEditar}

            />
        </div>
    )
}

export default InicioNotas;


