import { Route, Router } from 'react-router-dom';

import './App.css';

import history from './history'

import { PaginaPrincipal } from './components/pages/PaginaPrincipal/PaginaPrincipal'
import { PaginaListarMatriculas } from './components/pages/PaginaListarMatriculas/PaginaListarMatriculas'
import { PaginaDetalheMatricula } from './components/pages/PaginaDetalheMatricula/PaginaDetalheMatricula';
import { PaginaDetalheDisciplina } from './components/pages/PaginaDetalheDisciplina/PaginaDetalheDisciplina';
import { PaginaCadastro } from './components/pages/PaginaCadastro/PaginaCadastro';
import { PaginaLogin } from './components/pages/PaginaLogin/PaginaLogin';

function App() {
  return (
    <Router history={history}> 
      <Route exact path="/">
        <PaginaPrincipal></PaginaPrincipal>
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
    
  )
}

export default App;
