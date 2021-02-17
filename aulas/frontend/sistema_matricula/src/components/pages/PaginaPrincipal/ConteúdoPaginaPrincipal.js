import classNames from 'classnames'

import history from "../../../history";

function Card({disciplina}) {
    let nomeClasse = classNames("card", {"fundo-vermelho":!disciplina.disponivel})

    function foiClicado(){
        console.log("Foi clicado!");
        history.push("/disciplinas/"+disciplina.id);
    }

    return (
        <div className={nomeClasse} onClick={foiClicado}>
            <h3 className="titulo-card">{disciplina.nome}</h3>
            <span className="codigo-card">{disciplina.codigo}</span>
        </div>
    )
}

export function Conteudo() {
    let disciplinas = [
        {
            id:"123",
            nome: "LMS",
            codigo: "QXD256",
            disponivel: false
        },
        {
            id:"323",
            nome: "PIW",
            codigo: "QXD562",
            disponivel: true
        },
        {
            id:"151",
            nome: "IHC",
            codigo: "QXD784",
            disponivel: false
        },
        {
            id:"312",
            nome: "SOC",
            codigo: "QXD754",
            disponivel: true
        }
    ];

    const cards = disciplinas.map((disciplina) =>
        <Card disciplina={disciplina}></Card>
    );

    return (
        <div className="conteudo-galeria">
            {cards}
        </div>
        
    )
}