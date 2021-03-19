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

export function Conteudo({disciplinas}) {

    const cards = disciplinas.map((disciplina) =>
        <Card key={disciplina.id} disciplina={disciplina}></Card>
    );

    return (
        <div className="conteudo-galeria">
            {cards}
        </div>
        
    )
}