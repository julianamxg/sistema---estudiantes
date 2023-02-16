import { RegistrarMateria } from "../components/materia/RegistrarMateria"
import { ListarMaterias } from "../components/materia/ListarMaterias";
import IMateria from "../components/modelos/materias/entidades/IMateria";
import { useEffect, useState } from "react";
import uuid from "react-uuid";
import { addMateria, deleteMateria, editarMateria, getlistaMaterias, getMateriaById } from "../components/modelos/materias";
import React from "react";
import { Box, Modal } from "@mui/material";

function InicioMateria() {
  const initialState: IMateria = {
    materia: "",
    nombreProfesor: ""
  }
  const [materia, setMateria] = useState<IMateria>(initialState);
  const [materias, setMaterias] = useState<IMateria[]>([]);
  const [inputLectura, setInputLectura] = useState(true)

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(!open)
    setMateria(initialState)
  };

  const handleOpenEditar = (id: string) => {
    setOpen(!open)
    const materia = getMateriaById(id);
    setMateria(materia);
  };

  function guardarMateria(): void {
    if (materia.id) {
      const index = materias.findIndex((n) => n.id === materia.id);
      const nuevasMaterias = [...materias];
      nuevasMaterias[index] = materia;
      setMaterias(nuevasMaterias);
      editarMateria(materia.id, materia);
    }
    else {
      const id = uuid();
      addMateria({ id, ...materia });
      setMaterias([...materias, { id, ...materia }]);
    }
    limpiarFormulario()
  }

  const alcambiarValor = (name: string, value: string) => {
    setMateria({ ...materia, [name]: value })
  }

  const limpiarFormulario = () => {
    setMateria(initialState)
  }

  //listar
  useEffect(() => {
    setMaterias(getlistaMaterias());
  }, [])

  function eliminarMateria(id?: string): void {
    deleteMateria(id);
    let materia = materias.filter((materia: IMateria) => materia && materia.id !== id)
    setMaterias(materia);
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
          <RegistrarMateria guardarMateria={guardarMateria} alCambiarValor={alcambiarValor} materia={materia} limpiar={limpiarFormulario} inputLectura={inputLectura} habilitarFormulario={habilitarFormulario} handleClose={handleOpen} />
        </Box>
      </Modal>
      <ListarMaterias
        eliminarMateria={eliminarMateria}
        materias={materias}
        handleOpen={handleOpen}
        handleOpenEditar={handleOpenEditar} />
    </div>
  );
}

export default InicioMateria;