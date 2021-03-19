import { useContext, useEffect, useState } from "react";
import { listar } from "../../../api/disciplinasAPI";
import { AuthContext } from "../../../App";
import { Cabecalho } from "../../commom/Cabecalho/Cabecalho";
import { Navegador } from "../../commom/navegador/Navegador";
import { Conteudo } from "./ConteúdoPaginaPrincipal";

import './PaginaPrincipal.css' 

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
    const { auth } = useContext(AuthContext)

    const [disciplinas, setDisciplinas] = useState([]);

    useEffect(()=>{
        listar(auth.token).then(
            (response) => {
                setDisciplinas(response.data)
            }
        ).catch(
            (error => {
                console.log(error)
            })
        )
    })

    return (
        <div>
            <Cabecalho paginaAtual="página de matricula"></Cabecalho>
            <Navegador></Navegador>
            <Conteudo disciplinas={disciplinas}></Conteudo>
            <Botão />
        </div>
    )
}