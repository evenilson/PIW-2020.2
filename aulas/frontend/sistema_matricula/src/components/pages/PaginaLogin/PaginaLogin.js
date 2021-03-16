import axios from "axios";
import { useForm } from "react-hook-form";


import { Cabecalho } from "../../commom/Cabecalho/Cabecalho";
import { Navegador } from "../../commom/navegador/Navegador";

export function FormularioLogin() {
    const {register, handleSubmit} = useForm()

    function logar(login){
        axios({
            method: "POST",
            url:"http://localhost:8393/alunos/signin",
            data: login,
        }).then((response) =>{
            console.log(response)
        }).catch((error) => {
            console.log(error)
        })
    }

    return(
        <form onSubmit={handleSubmit(logar)}>
            Matricula: <input type="text" name="matricula" ref={register} />  <br/>
            Senha: <input type="password" name="senha" ref={register} />  <br/>
            <button type="submit" >Logar</button>
        </form>
    )
}

export function PaginaLogin() {
    return(
        <div>
            <Cabecalho />
            <Navegador />
            <FormularioLogin />
        </div>
    )
}