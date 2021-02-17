export function PaginaDetalheMatricula (props){
    return (
        <div>
            <h1>Página detalhe matricula</h1>
            <p>Aqui mostra as informações da matricula {props.match.params.id}</p>
        </div>
        
    )
}