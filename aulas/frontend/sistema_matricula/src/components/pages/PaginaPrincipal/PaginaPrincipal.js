import { Navegador } from "../../commom/navegador/Navegador";

function Conteudo() {
    let disciplinas = [
        {
            nome: "LMS",
            codigo: "QXD256"
        },
        {
            nome: "PIW",
            codigo: "QXD562"
        },
        {
            nome: "SOC",
            codigo: "QXD784"
        }
    ];

    const lis = disciplinas.map((disciplina) =>
        <li key={disciplina.codigo}>      
            {disciplina.nome} - {disciplina.codigo}
        </li>
    );

    return (
        <div >
            {lis}
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