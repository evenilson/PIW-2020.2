import { useState } from "react";
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

function Botão(){
    const [pressCount, setPressCount] = useState(0);
    const [clicado, setClicado] = useState(false);

    function clicouBotao(){
        setClicado(true)
        setPressCount(pressCount + 1)
    }

    let estilo = {}
    clicado ? estilo['backgroundColor'] = 'green' : estilo['backgroundColor'] = 'blue' 

    return <button onClick={clicouBotao} style={estilo}>Fui pressionado {pressCount} vezes </button>
}

export function PaginaPrincipal() {
    return (
        <div>
            <Cabecalho paginaAtual="página de matricula"></Cabecalho>
            <Navegador></Navegador>
            <Conteudo></Conteudo>
            <Botão />
        </div>
    )
}