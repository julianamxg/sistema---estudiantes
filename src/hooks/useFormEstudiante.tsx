import { useState, ChangeEvent, FormEvent } from "react";
import IEstudiante from "../components/entidades/IEstudiante";

const initialState:IEstudiante = {
    nombres: "",
    apellidos:"",
    tDocumento: "",
    nDocumento: 0,
    grado:"",
    dGrado:"''"
}

export const useForm = ()=>{
    const [inputs, setInputs] = useState(initialState);

    const resetearForm = () => {
        setInputs(initialState)
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputs({
            ...inputs,
            [event.target.name]: event.target.value
        });
    }

    const handleOptionChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedOption = event.target.options[event.target.selectedIndex];
        setInputs({
            ...inputs,
            [event.target.name]: selectedOption.value
        });
    }

    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        setInputs({
            ...inputs,
            [event.target.value]: event.target.value
        });
    }

    const setForm = (newValues:any) =>{
        setInputs(newValues)
    }


    return{
        inputs,
        handleInputChange,
        handleSelectChange,
        handleOptionChange,
        resetearForm,
        setForm
    }
}