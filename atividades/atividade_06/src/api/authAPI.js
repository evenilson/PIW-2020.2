import axios from 'axios';

export function signUpAxios(user) {
    return (
        axios({
            method: 'POST',
            url:"http://localhost:8393/usuarios",
            data: user
        })
    )
}

export function signInAxios(user) {
    return (
        axios({
            method: 'POST',
            url:"http://localhost:8393/usuarios",
            data: user
        })
    )
}