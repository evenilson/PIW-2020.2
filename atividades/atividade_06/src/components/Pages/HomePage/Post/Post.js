import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineLike } from 'react-icons/ai';

import { getPostComents } from '../../../../api/postAPI';
import { setComentAxios } from '../../../../api/comentsAPI'

import { authContext } from '../../../../App';

import './Post.css'

function Coment(props) {
    return (
        <div className="comment">
            <div className="user-img img-comment">
                <img src="https://e7.pngegg.com/pngimages/527/663/png-clipart-logo-person-user-person-icon-rectangle-photography.png" alt="Foto do usuario" />
            </div>
            <div className="username-text">
                <div className="username-comment">{props.name}</div>
                <div className="text-comment">{props.text}</div>
            </div>
        </div>
    )
}


export function Post(props) {
    const [coments, setComents] = useState([])
    const { register, handleSubmit } = useForm()


    const { auth } = useContext(authContext)


    function getComentsFunction() {
        getPostComents(auth.token, props.id).then((response) => {
            setComents(response.data)
        }).catch((error) => {
            console.log(error);
        })
    }

    useEffect(() => {
        getComentsFunction();
    }, [])

    function setComentFunction(coment) {
        setComentAxios(auth.token, coment, props.id).then((response) => {
            getComentsFunction();
        }).catch((error) => {
            console.log(error)
        })
    }

    const makeComents = coments.map((coment) =>
        <Coment key={coment.id} text={coment.texto} name={coment.nome_usuario} />
    );

    return (
        <div className="post">
            <div className="user-infos">
                <div className="user-img">
                    <img src="https://e7.pngegg.com/pngimages/527/663/png-clipart-logo-person-user-person-icon-rectangle-photography.png" alt="Foto do usuario" />
                </div>
                <div className="username">{props.username} </div>
            </div>
            <div className="text">{props.texto}</div>
            <div className="likes-container">
                <div className="likes-info">{props.qtdLikes} likes</div>
                <div className="like-btn"><a href="!#"> <AiOutlineLike />Curtir</a></div>
            </div>
            <div className="comments-container">
                {makeComents}

                <form className="write-comment" onSubmit={handleSubmit(setComentFunction)}>
                    <div className="user-img img-comment">
                        <img src="https://i.pinimg.com/originals/8b/d3/1d/8bd31d79258cb5e51cd8884986ced870.jpg" alt="Foto do usuario logado" />
                    </div>
                    <input type="text" className="input" name="texto" ref={register} placeholder="Escreva um comentário" />
                </form>
            </div>
        </div>
    )
}