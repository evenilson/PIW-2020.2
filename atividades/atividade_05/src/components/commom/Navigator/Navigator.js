import './Navigator.css'

export function Navigator (){
    const ButtonNav = (props) => (
        <li className="button">
            <a href="!#" className={props.classButton}>{props.nameButton}</a>
        </li>

       
    )

    return (
        <nav className="navigator">
            <a href="!#" className="logo">Social<span>dev</span></a>
            <ul className="nav-items">
                <ButtonNav nameButton="linha do tempo" classButton="feed-bt"></ButtonNav>
                <ButtonNav nameButton="postar" classButton="post-bt"></ButtonNav>
                <li className="user-infos">
                    <strong className="user-name">Tafarel</strong>
                    <div className="user-img">
                        <img src="https://i.pinimg.com/originals/8b/d3/1d/8bd31d79258cb5e51cd8884986ced870.jpg" alt="Foto do usuario logado"/>
                    </div>
                </li>
            </ul>
        </nav>
    )
}