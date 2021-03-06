import { AiOutlineLike } from 'react-icons/ai';


import './Post.css'


export function Post (props) {
    return (
        <div className="post">
            <div className="username">{props.username}</div>
            <div className="text">{props.texto}</div>
            <div className="likes-container">
                <div className="likes-info">{props.qtdLikes} likes</div>
                <div className="like-btn"><a href="!#"> <AiOutlineLike />Curtir</a></div>
            </div>
        </div>
    )
}