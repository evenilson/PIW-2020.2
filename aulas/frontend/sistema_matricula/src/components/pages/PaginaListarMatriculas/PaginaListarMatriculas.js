import { useForm } from 'react-hook-form'

import { Navegador } from "../../commom/navegador/Navegador";


function FormularioMatricula(){

    const { register, handleSubmit } = useForm();

    const onSubmiter = (data) => {
        console.log(data)
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

export function PaginaListarMatriculas() {
    return (
        <div>
            <Navegador></Navegador>
            <h1>Página de Matricula</h1>
            <FormularioMatricula />
        </div>
    )
}