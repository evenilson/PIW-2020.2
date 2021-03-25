import { useContext } from 'react'
import { useForm } from 'react-hook-form'

import { signInAxios } from '../../../../api/authAPI'
import { authContext } from '../../../../App'
import history from '../../../../history'

import './FormSignIn.css'

export function FormSignIn() {
    const {register, handleSubmit} = useForm()

    const auth = useContext(authContext)

    function signInFunction(user) {
        signInAxios(user).then((response) => {
            auth.setAuth({token: response.data.token, nome: response.data.nome})
            console.log(response)
            history.push('/');
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <form className="formsignin-container" onSubmit={handleSubmit(signInFunction)}>
            <input type="email" placeholder="E-mail" name="email" ref={register} />
            <input type="password" placeholder="Senha" name="senha" ref={register} />

            <button type="submit">Entrar</button>
        </form>
    )
}