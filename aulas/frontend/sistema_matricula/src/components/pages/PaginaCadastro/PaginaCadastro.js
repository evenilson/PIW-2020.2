import { useForm } from "react-hook-form";


import { Cabecalho } from "../../commom/Cabecalho/Cabecalho";
import { Navegador } from "../../commom/navegador/Navegador";

function FomularioCadastro(){
    const {register, handleSubmit} = useForm();

    function onSubmiter(aluno) {
        console.log(aluno)
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