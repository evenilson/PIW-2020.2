import axios from 'axios';

export function getPostAxios(token) {
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