import React from 'react';
import './App.css'
import { ListarEstudiantes } from './components/ListarEstudiantes';
import { RegistrarEstudiante } from './components/RegistrarEstudiante';
import { BotonInicio } from './components/BotonInicio';

function Inicio() {
  return (
    <div className="App">
      <RegistrarEstudiante />
      <ListarEstudiantes />
    </div>
  );
}

export default Inicio;
