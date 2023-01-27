import React from 'react';
import './App.css'
import { ListarEstudiantes } from './components/ListarEstudiantes';
import { RegistrarEstudiante } from './components/RegistrarEstudiante';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from './Inicio';
import { BotonInicio } from './components/BotonInicio';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/editar-estudiante/:id" element={<RegistrarEstudiante />} />
        <Route path='/' element={<Inicio />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
