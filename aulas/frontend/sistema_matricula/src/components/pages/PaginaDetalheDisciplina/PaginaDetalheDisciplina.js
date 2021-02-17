export function PaginaDetalheDisciplina(props) {
    return(
        <h1>
            Detalhe da disciplina com id {props.match.params.id}
        </h1>
    )
}