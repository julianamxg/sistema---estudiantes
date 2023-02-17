import { useState, useEffect } from 'react';
import { ListarEstudiantes } from '../components/estudiante/ListarEstudiantes';
import { RegistrarEstudiante } from '../components/estudiante/RegistrarEstudiante';
import { addEstudiante, getlistaEstudiantes, deleteEstudiante, editarEstudiante, getEstudianteById } from "../components/modelos/estudiantes";
import IEstudiante from "../components/modelos/estudiantes/entidades/IEstudiante";
import uuid from 'react-uuid';
import { Box, Modal } from '@mui/material';
import React from 'react';
import { IPokemon } from '../components/modelos/pokemones/entidades/IPokemon';

const InicioEstudiante = () => {
  const initialState: IEstudiante = {
    nombres: "",
    apellidos: "",
    tDocumento: "",
    nDocumento: 0,
    grado: "",
    dGrado: "",
    avatar: ""
  }
  const [estudiante, setEstudiante] = useState<IEstudiante>(initialState);
  const [estudiantes, setEstudiantes] = useState<IEstudiante[]>([]);
  const [inputLectura, setInputLectura] = useState(true)
  const [listaPokemones, setListaPokemones] = useState<IPokemon[]>([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((data) => {
        setListaPokemones(data.results);
      });
    setEstudiantes(getlistaEstudiantes());
  }, []);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(!open)
    setEstudiante(initialState)
  };

  const handleOpenEditar = (id: string) => {
    setOpen(!open)
    const estudiante = getEstudianteById(id);
    setEstudiante(estudiante);
  };

  const habilitarFormulario = () => {
    setInputLectura(!inputLectura)
  }

  function guardarEstudiante(): void {
    if (estudiante.id) {
      const index = estudiantes.findIndex((n) => n.id === estudiante.id);
      const nuevosEstudiantes = [...estudiantes];
      nuevosEstudiantes[index] = estudiante;
      setEstudiantes(nuevosEstudiantes);
      editarEstudiante(estudiante.id, estudiante);
    }
    else {
      const id = uuid();
      addEstudiante({ id, ...estudiante });
      setEstudiantes([...estudiantes, { id, ...estudiante }]);
    }
    limpiarFormulario();
  }

  const alcambiarValor = (name: string, value: string) => {
    setEstudiante({ ...estudiante, [name]: value })
  }

  const limpiarFormulario = () => {
    setEstudiante(initialState)
  }

  function eliminarEstudiante(id?: string): void {
    deleteEstudiante(id);
    let est = estudiantes.filter((estudiante: IEstudiante) => estudiante && estudiante.id !== id)
    setEstudiantes(est);
  }


  return (
    <div className="App">
      <Modal
        open={open}
        onClose={handleOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          overflowY: 'scroll'
        }}
      >
        <Box>
          <RegistrarEstudiante guardarEstudiante={guardarEstudiante} estudiante={estudiante} alCambiarValor={alcambiarValor} limpiar={limpiarFormulario} inputLectura={inputLectura} habilitarFormulario={habilitarFormulario} handleClose={handleOpen} listaPokemones={listaPokemones} />
        </Box>
      </Modal>
      <ListarEstudiantes
        editarEstudiante={editarEstudiante}
        eliminarEstudiante={eliminarEstudiante}
        estudiantes={estudiantes}
        handleOpen={handleOpen}
        handleOpenEditar={handleOpenEditar}
      />
    </div>
  );
}

export default InicioEstudiante;