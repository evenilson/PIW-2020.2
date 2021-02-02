import './Post.css'

export function Post (props) {
    console.log(props)
    return (
        
        <div className="post">
            <div className="username">{props.username}</div>
            <div className="text">{props.texto}</div>
            <div className="likes-container">
                <div className="likes-info">{props.qtdLikes} likes</div>
                <div className="like-btn"><a href="!#">curtir</a></div>
            </div>
        </div>
    )
}