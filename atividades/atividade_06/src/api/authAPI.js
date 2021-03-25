import axios from 'axios';

export function signup(user) {
    return (
        axios({
            method: 'POST',
            url:"http://localhost:8393/usuarios",
            data: user
        })
    )
}