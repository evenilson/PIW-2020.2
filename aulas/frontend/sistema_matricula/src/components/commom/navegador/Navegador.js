import { NavLink } from 'react-router-dom';
import './Navegador.css'

export function Navegador () {
    return (
        <nav className="navegador">
            <NavLink exact className="link-navegador" to="/">Página Principal</NavLink>
            <NavLink className="link-navegador" to="/matriculas">Listar Matriculas</NavLink>
        </nav>
    )
}