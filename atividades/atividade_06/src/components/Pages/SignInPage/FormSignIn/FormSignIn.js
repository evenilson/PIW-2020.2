
import './FormSignIn.css'

export function FormSignIn() {
    return (
        <form className="formsignin-container">
            <input type="email" placeholder="E-mail" />
            <input type="password" placeholder="Senha" />

            <button type="submit">Entrar</button>
        </form>
    )
}