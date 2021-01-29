export function Navegador () {

    let Link = ({linkTexto}) => (<a className="link-navegador" href="http://globo.com">{linkTexto}</a>);

    return (
        <nav>
            <Link linkTexto="link1"></Link>
            <Link linkTexto="link3"></Link>
            <Link linkTexto="link2"></Link>
        </nav>
    )
}