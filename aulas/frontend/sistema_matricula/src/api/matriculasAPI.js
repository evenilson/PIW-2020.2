import axios from "axios";


export function listarMatriculas(token) {
    return(
        axios({
            method: "GET",
            url: "http://localhost:8393/matriculas",
            headers: {
                "token": token,
            }
        })
    ) 
}


export function inserirMatriculas(token, matricula) {
    return(
        axios({
            method: "POST",
            url: "http://localhost:8393/matriculas",
            headers: {
                "token": token,
            },
            data: matricula
        })
    ) 
}