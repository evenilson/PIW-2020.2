import { useState } from 'react';
import { useForm } from 'react-hook-form'

import { Navegador } from "../../commom/navegador/Navegador";


function FormularioMatricula({addMatric}){

    const { register, handleSubmit } = useForm();

    const onSubmiter = (data) => {
        addMatric(data)
    }
 
    return(
        <form onSubmit={handleSubmit(onSubmiter)}>
            Nome: <input type="text" name="nome" ref={register}/> <br />
            Disciplina: 
            <select name="disciplina" id="" ref={register}>
                <option value="LMS">Linguagens de Marcação e Script</option>
                <option value="PIW">Projeto de Interface WEB</option>
                <option value="IHC">Interface humano-computador</option>
            </select><br />
            <button type="submit">Matricular</button>
        </form>
    )
}

function ListarMatriculas({matriculas}) {
    return (
        <ul>
            {    
                matriculas.map((matricula) => (
                    <li>{matricula.nome} - {matricula.disciplina}</li>
                ))
            }
        </ul>
    )
}

export function PaginaListarMatriculas() {

    const [matriculas, setMatriculas] = useState([])

    function addMatric(matricula) {
        setMatriculas([...matriculas, matricula])
    }

    return (
        <div>
            <Navegador></Navegador>

            <ListarMatriculas matriculas={matriculas}/>
            <FormularioMatricula addMatric={addMatric}/>
        </div>
    )
}