import { Navegador } from "../../commom/navegador/Navegador";
import { Conteudo } from "./ConteúdoPaginaPrincipal";

import './PaginaPrincipal.css' 

function Cabecalho({paginaAtual}) {
    return(
        <header className="cabecalho">
            <h1 className="logo">Matricula UFC QXD</h1>
            <span className="pagina-atual">Você esta na {paginaAtual}</span>
        </header>
    )
}

export function PaginaPrincipal() {
    return (
        <div>
            <Cabecalho paginaAtual="página de matricula"></Cabecalho>
            <Navegador></Navegador>
            <Conteudo></Conteudo>
        </div>
    )
}