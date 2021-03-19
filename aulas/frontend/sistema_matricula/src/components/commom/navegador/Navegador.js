import { NavLink } from 'react-router-dom';
import './Navegador.css'

import {AuthContext} from '../../../App'
import { useContext } from 'react';

function NavegadorLogado({nome}){
    const {setAuth} = useContext(AuthContext);
    return (
        <nav className="navegador">
            <div>
                <NavLink exact className="link-navegador" to="/">Página Principal</NavLink>
                <NavLink className="link-navegador" to="/matriculas">Listar Matriculas</NavLink>
            </div>
            <div>
                <strong>{nome}</strong>
                <NavLink className="link-navegador" to="/" onClick={()=>{setAuth({token: null, nome: null})}}>Logout</NavLink>

            </div>
        </nav>
    )
}

function NavegadorNaoLogado(){
    return(
        <nav className="navegador">
            <strong>Seja bem vindo</strong>
            <div>
                <NavLink className="link-navegador" to={"/cadastrar/"}>Cadastrar</NavLink>
                <NavLink className="link-navegador" to={"/login/"}>Login</NavLink>
            </div>
        </nav>
    )
    
}

export function Navegador () {
   const {auth} = useContext(AuthContext);
    return (
        <>
            {auth.token === null ? <NavegadorNaoLogado /> : <NavegadorLogado nome={auth.nome}/>}
        </>
    )
}