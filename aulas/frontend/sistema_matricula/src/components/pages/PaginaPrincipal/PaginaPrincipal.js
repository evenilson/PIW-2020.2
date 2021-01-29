import { Navegador } from "../../commom/navegador/navegador";

function Conteudo() {
    let nome = "João";
    let link = (<a href="http://globo.com">Link para a globo</a>)
    return (
        <div>
            <p>Meu conteúdo 1+2 {1+2} nome {nome} {link}</p>
        </div>
    )
}

export function PaginaPrincipal() {
    return (
        <div>
            <Navegador></Navegador>
            <Conteudo></Conteudo>
            
        </div>
    )
}