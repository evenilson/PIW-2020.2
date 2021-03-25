import { useForm } from 'react-hook-form'

import { signUpAxios } from '../../../../api/authAPI'

import history from '../../../../history'

import './FormSignUp.css'

export function FormSignUp() {
    const {register, handleSubmit} = useForm();

    function signUpFunction(user) {
        signUpAxios(user).then((response) => {
            history.push('/login')
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <form className="formsignup-container" onSubmit={ handleSubmit(signUpFunction) }>
            <input type="text" placeholder="Nome" name="nome" ref={register} />
            <input type="email" placeholder="E-mail" name="email" ref={register} />
            <input type="password" placeholder="Senha" name="senha" ref={register} />

            <button type="submit"> Cadastrar</button>
        </form>
    )
}