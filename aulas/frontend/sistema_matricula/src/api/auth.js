import axios from "axios";

export function signup(aluno) {
    return(
        axios({
            method: 'POST',
            url:"http://localhost:8393/alunos",
            data: aluno
        })
    )
}

export function signin(aluno) {
    return(
        axios({
            method: "POST",
            url:"http://localhost:8393/alunos/signin",
            data: aluno,
        })
    )
}