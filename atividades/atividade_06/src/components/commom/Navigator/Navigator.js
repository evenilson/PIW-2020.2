import { useContext, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { authContext } from '../../../App';

import './Navigator.css'

export function Navigator() {

    const {auth, setAuth} = useContext(authContext)

    const ButtonNav = (props) => (
        <li className="button">
            <NavLink exact to={props.to} className="nav-bt">{props.nameButton}</NavLink>
        </li>

    )

    return (
        <nav className="navigator">
            <NavLink exact to="/" className="logo">Social<span>dev</span></NavLink>

            {auth.token === null ?
                <ul className="nav-items">
                    <ButtonNav nameButton="cadastrar" to="/cadastrar"></ButtonNav>
                    <ButtonNav nameButton="fazer login" to="/login"></ButtonNav>
                </ul>

                :

                <ul className="nav-items">
                    <li className="button">
                        <NavLink exact to="/"  onClick={() => {setAuth({token: null, nome: null})}}>logout</NavLink>
                    </li>
                    <ButtonNav nameButton="linha do tempo" to="/"></ButtonNav>
                    <ButtonNav nameButton="postar" to="/post"></ButtonNav>
                    <li className="user-infos">
                        <strong className="user-name">{auth.nome}</strong>
                        <div className="user-img">
                            <img src="https://i.pinimg.com/originals/8b/d3/1d/8bd31d79258cb5e51cd8884986ced870.jpg" alt="Foto do usuario logado" />
                        </div>
                    </li>
                </ul>

            }

        </nav>
    )
}