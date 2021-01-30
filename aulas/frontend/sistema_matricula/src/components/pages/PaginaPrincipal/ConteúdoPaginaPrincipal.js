function Card({nome, codigo}) {
    return (
        <div className="card">
            <h3 className="titulo-card">{nome}</h3>
            <span className="codigo-card">{codigo}</span>
        </div>
    )
}

export function Conteudo() {
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
            nome: "IHC",
            codigo: "QXD784"
        },
        {
            nome: "SOC",
            codigo: "QXD754"
        }
    ];

    const cards = disciplinas.map((disciplina) =>
        <Card nome={disciplina.nome} codigo={disciplina.codigo}></Card>
    );

    return (
        <div className="conteudo-galeria">
            {cards}
        </div>
        
    )
}