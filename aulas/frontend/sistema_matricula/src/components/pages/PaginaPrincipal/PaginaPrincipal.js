import { Navegador } from "../../commom/navegador/Navegador";

function Conteudo() {
    let nome = "João";
    let link = (<a href="http://globo.com">Link para a globo</a>)
    return (
        <div>
            <p>Meu conteúdo 1+2 {1+2} nome {nome} {link}</p>
        </div>
    )
}

function Cabecalho({paginaAtual}) {
    return(
        <header>
            <h1>Matricula UFC QXD</h1>
            <span>Você esta na {paginaAtual}</span>
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