import axios from 'axios';

function setComentAxios(token, coment) {
    return (
        axios({
            method:"POST",
            url:"http://localhost:8393/comentarios",
            data: coment,
            headers: {
                "token": token
            }
        })
    )
    
}