import { useForm } from "react-hook-form";
import { useContext } from "react";

import { Cabecalho } from "../../commom/Cabecalho/Cabecalho";
import { Navegador } from "../../commom/navegador/Navegador";
import { signin } from "../../../api/auth"

import { AuthContext } from '../../../App'

 
export function FormularioLogin() {
    const {register, handleSubmit} = useForm()
    const auth = useContext(AuthContext);
    console.log(auth)

    function logar(aluno){
        signin(aluno).then((response) =>{
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