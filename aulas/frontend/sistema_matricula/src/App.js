import { Redirect, Route, Router } from 'react-router-dom';
import { createContext, useState } from 'react';

import './App.css';

import history from './history'

import { PaginaPrincipal } from './components/pages/PaginaPrincipal/PaginaPrincipal'
import { PaginaListarMatriculas } from './components/pages/PaginaListarMatriculas/PaginaListarMatriculas'
import { PaginaDetalheMatricula } from './components/pages/PaginaDetalheMatricula/PaginaDetalheMatricula';
import { PaginaDetalheDisciplina } from './components/pages/PaginaDetalheDisciplina/PaginaDetalheDisciplina';
import { PaginaCadastro } from './components/pages/PaginaCadastro/PaginaCadastro';
import { PaginaLogin } from './components/pages/PaginaLogin/PaginaLogin';

export const AuthContext = createContext(null);

function App() {

  const [auth, setAuth] = useState({token: null, nome: null})

  return (
    <AuthContext.Provider value={{auth: auth, setAuth: setAuth}}>
      <Router history={history}> 
        <Route exact path="/">
          {auth.token == null ? <Redirect to="/login" /> : <PaginaPrincipal />}
        </Route>
        <Route path="/disciplinas/:id" component={PaginaDetalheDisciplina}></Route>
        <Route exact path="/matriculas">
          <PaginaListarMatriculas></PaginaListarMatriculas>
        </Route>
        <Route path="/matriculas/:id" component={PaginaDetalheMatricula}></Route>
        <Route path="/cadastrar/">
          <PaginaCadastro />
        </Route>
        <Route path="/login" component={PaginaLogin}></Route>
      </Router>
    </AuthContext.Provider>
    
  )
}

export default App;
