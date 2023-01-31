import React from 'react';
import './App.css'
import { RegistrarEstudiante } from './components/estudiante/RegistrarEstudiante';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InicioEstudiante from './pages/InicioEstudiante';
import InicioMateria from './pages/InicioMateria';
import Inicio from './pages/Inicio';
import InicioNotas from './pages/InicioNotas';
import IEstudiante from './components/entidades/IEstudiante';

const initialState:IEstudiante = {
  nombres: "",
  apellidos:"",
  tDocumento: "",
  nDocumento: 0,
  grado:"",
  dGrado:""
}

function App() {

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Inicio />} />
        <Route path="/editar-estudiante/:id" element={<RegistrarEstudiante guardarEstudiante={()=>{}} estudiante={initialState} alCambiarValor={()=>{}} limpiar={() =>{}} />} />
        <Route path='/estudiantes' element={<InicioEstudiante />}></Route>
        <Route path='/materias' element={<InicioMateria />}></Route>
        <Route path='/notas' element={<InicioNotas />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
