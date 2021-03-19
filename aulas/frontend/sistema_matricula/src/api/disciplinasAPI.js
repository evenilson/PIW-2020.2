import axios from "axios";


export function listar(token) {
    return(
        axios({
            method: "GET",
            url: "http://localhost:8393/disciplinas",
            headers: {
                "token": token,
            }
        })
    ) 
}