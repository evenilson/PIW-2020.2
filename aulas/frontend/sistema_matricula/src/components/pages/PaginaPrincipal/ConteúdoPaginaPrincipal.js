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