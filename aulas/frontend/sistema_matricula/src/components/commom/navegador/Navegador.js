import { NavLink } from 'react-router-dom';
import './Navegador.css'

export function Navegador () {
    let id = 15;
    return (
        <nav className="navegador">
            <NavLink exact className="link-navegador" to="/">Página Principal</NavLink>
            <NavLink className="link-navegador" to="/matriculas">Listar Matriculas</NavLink>
            <NavLink className="link-navegador" to={"/matriculas/"+id}>Detalhes de matricula</NavLink>
        </nav>
    )
}