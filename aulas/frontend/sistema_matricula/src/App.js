import { Route, Router } from 'react-router-dom';

import './App.css';

import history from './history'

import { PaginaPrincipal } from './components/pages/PaginaPrincipal/PaginaPrincipal'
import { PaginaListarMatriculas } from './components/pages/PaginaListarMatriculas/PaginaListarMatriculas'
import { PaginaDetalheMatricula } from './components/pages/PaginaDetalheMatricula/PaginaDetalheMatricula';

function App() {
  return (
    <Router history={history}> 
      <Route exact path="/">
        <PaginaPrincipal></PaginaPrincipal>
      </Route>
      <Route exact path="/matriculas">
        <PaginaListarMatriculas></PaginaListarMatriculas>
      </Route>
      <Route path="/matriculas/:id" component={PaginaDetalheMatricula}></Route>
    </Router>
    
  )
}

export default App;
