import axios from 'axios';

export function setComentAxios(token, coment, idPost) {
    return (
        axios({
            method:"POST",
            url:"http://localhost:8393/comentarios",
            data: {
                texto: coment.texto,
                id_post: idPost
            },
            headers: {
                "token": token
            }
        })
    )
    
}