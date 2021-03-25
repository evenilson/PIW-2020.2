
import './FormSignUp.css'

export function FormSignUp() {
    return (
        <form className="formsignup-container">
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="E-mail" />
            <input type="password" placeholder="Senha" />

            <button type="submit"> Cadastrar</button>
        </form>
    )
}