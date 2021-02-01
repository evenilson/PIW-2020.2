import './Navigator.css'

export function Navigator (){
    const ButtomNav = (props) => (
        <li className="buttom">
            <a href="!#" className={props.classButtom}>{props.nameButtom}</a>
        </li>

       
    )

    return (
        <nav className="navigator">
            <a href="!#" className="logo">rede<span>dev</span></a>
            <ul className="buttoms">
                <ButtomNav nameButtom="linha do tempo" classButtom="feed-bt"></ButtomNav>
                <ButtomNav nameButtom="postar" classButtom="post-bt"></ButtomNav>
            </ul>
        </nav>
    )
}