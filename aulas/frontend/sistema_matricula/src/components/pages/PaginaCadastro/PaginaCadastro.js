import { useForm } from "react-hook-form";
import axios from 'axios';

import history from '../../../history'

import { Cabecalho } from "../../commom/Cabecalho/Cabecalho";
import { Navegador } from "../../commom/navegador/Navegador";

function FomularioCadastro(){
    const {register, handleSubmit} = useForm();

    function onSubmiter(aluno) {
        axios({
            method: 'POST',
            url:"http://localhost:8393/alunos",
            data: aluno
        }).then((response) =>{
            console.log(response)
            history.push('/login')
        }).catch((error) => {
            console.log(error)
            console.log("deu erro")
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmiter)}>
            Nome: <input type="text" name="nome" ref={register}/> <br />
            Matricula: <input type="text" name="matricula" ref={register}/> <br />
            Senha: <input type="text" name="senha" ref={register}/><br />

            <button type="submit"> Cadastrar</button>
        </form>
    )
}

export function PaginaCadastro(){

    return (
        <div>
            <Cabecalho paginaAtual="Pagina de Cadastro"/>
            <Navegador />
            <FomularioCadastro />
        </div>
    );
}