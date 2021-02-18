import history from "../../../../history"

import './FormPost.css'

export function FormPost() {

    function publishPost(){
        history.push("/")
    }

    return (
        <form className="form">
            <textarea type="text" className="input-text" placeholder="No que você está pensando? "/>
            <input type="submit" className="input-submit" onClick={publishPost} value="Publicar" />
        </form>
    )
}