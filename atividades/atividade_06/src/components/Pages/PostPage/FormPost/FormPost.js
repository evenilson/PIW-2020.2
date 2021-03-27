import { useContext } from "react"
import { useForm } from "react-hook-form"
import { setPostAxios } from "../../../../api/postAPI"
import { authContext } from "../../../../App"
import history from "../../../../history"

import './FormPost.css'

export function FormPost() {
    const {register, handleSubmit} = useForm()
    const { auth } = useContext(authContext)

    function publishPostFunction(post){
        setPostAxios(auth.token, post).then((response) => {
            history.push("/")
        }).catch((error) => {
            console.log(error)
        })
        
    }

    return (
        <form className="form" onSubmit={handleSubmit(publishPostFunction)}> 
            <textarea type="text" required className="input-text" name="texto" ref={register} placeholder="No que você está pensando? "/>
            <input type="submit" className="input-submit" value="Publicar" />
        </form>
    )
}