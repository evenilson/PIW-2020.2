import axios from 'axios';

export function getPostsAxios(token) {
    return(
        axios({
            method: "GET",
            url: "http://localhost:8393/posts",
            headers: {
                "token": token
            }
        })
    )
}

export function getPostComents(token, idPost){
    return(
        axios({
            method: "GET",
            url: "http://localhost:8393/posts/"+idPost+"/comentarios",
            headers: {
                "token": token
            }
        })
    )
}

export function setPostAxios(token, post) {
    return (
        axios({
            method: "POST",
            url: "http://localhost:8393/posts",
            data: post,
            headers: {
                "token": token
            }
        })
    )
}