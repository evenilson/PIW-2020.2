export function Cabecalho({paginaAtual}) {
    return(
        <header className="cabecalho">
            <h1 className="logo">Matricula UFC QXD</h1>
            <span className="pagina-atual">Você esta na {paginaAtual}</span>
        </header>
    )
}