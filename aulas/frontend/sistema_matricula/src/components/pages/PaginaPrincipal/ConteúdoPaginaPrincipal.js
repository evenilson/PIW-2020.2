function Card({nome, codigo, disponivel}) {
    let nomeClasse = "card";

    if(disponivel === false) {
        nomeClasse += " fundo-vermelho";
    }

    return (
        <div className={nomeClasse}>
            <h3 className="titulo-card">{nome}</h3>
            <span className="codigo-card">{codigo}</span>
        </div>
    )
}

export function Conteudo() {
    let disciplinas = [
        {
            nome: "LMS",
            codigo: "QXD256",
            disponivel: true
        },
        {
            nome: "PIW",
            codigo: "QXD562",
            disponivel: true
        },
        {
            nome: "IHC",
            codigo: "QXD784",
            disponivel: false
        },
        {
            nome: "SOC",
            codigo: "QXD754",
            disponivel: true
        }
    ];

    const cards = disciplinas.map((disciplina) =>
        <Card nome={disciplina.nome} codigo={disciplina.codigo} disponivel={disciplina.disponivel}></Card>
    );

    return (
        <div className="conteudo-galeria">
            {cards}
        </div>
        
    )
}