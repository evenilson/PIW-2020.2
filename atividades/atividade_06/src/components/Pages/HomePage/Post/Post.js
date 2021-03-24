import { AiOutlineLike } from 'react-icons/ai';

import './Post.css'


export function Post (props) {
    return (
        <div className="post">
            <div className="user-infos">
                <div className="user-img">
                    <img src="https://e7.pngegg.com/pngimages/527/663/png-clipart-logo-person-user-person-icon-rectangle-photography.png" alt="Foto do usuario"/>
                </div>
                <div className="username">{props.username} </div>
            </div>
            <div className="text">{props.texto}</div>
            <div className="likes-container">
                <div className="likes-info">{props.qtdLikes} likes</div>
                <div className="like-btn"><a href="!#"> <AiOutlineLike />Curtir</a></div>
            </div>
            <div className="comments-container">
                <div className="comment">
                    <div className="user-img img-comment">
                        <img src="https://e7.pngegg.com/pngimages/527/663/png-clipart-logo-person-user-person-icon-rectangle-photography.png" alt="Foto do usuario"/>
                    </div>
                    <div className="username-text">
                        <div className="username-comment">João</div>
                        <div className="text-comment">Concordo</div>
                    </div>
                </div>
                <div className="comment">
                    <div className="user-img img-comment">
                        <img src="https://e7.pngegg.com/pngimages/527/663/png-clipart-logo-person-user-person-icon-rectangle-photography.png" alt="Foto do usuario"/>
                    </div>
                    <div className="username-text">
                        <div className="username-comment">Antonieta</div>
                        <div className="text-comment">Concordo, porem acho arriscado vossa magestade</div>
                    </div>
                </div>

                <div className="write-comment">
                    <div className="user-img img-comment">
                    <img src="https://i.pinimg.com/originals/8b/d3/1d/8bd31d79258cb5e51cd8884986ced870.jpg" alt="Foto do usuario logado"/>
                    </div>
                    <input className="input" placeholder="Escreva um comentário"/>
                </div>
            </div>
        </div>
    )
}