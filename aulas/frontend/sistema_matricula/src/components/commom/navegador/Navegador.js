import { Link } from 'react-router-dom';
import './Navegador.css'

export function Navegador () {

    return (
        <nav className="navegador">
            <Link className="link-navegador" to="/">Página Principal</Link>
            <Link className="link-navegador" to="/matriculas">Listar Matriculas</Link>
        </nav>
    )
}