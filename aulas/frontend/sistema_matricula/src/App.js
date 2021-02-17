import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import { PaginaPrincipal } from './components/pages/PaginaPrincipal/PaginaPrincipal'
import { PaginaListarMatriculas } from './components/pages/PaginaListarMatriculas/PaginaListarMatriculas'
import { PaginaDetalheMatricula } from './components/pages/PaginaDetalheMatricula/PaginaDetalheMatricula';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <PaginaPrincipal></PaginaPrincipal>
      </Route>
      <Route exact path="/matriculas">
        <PaginaListarMatriculas></PaginaListarMatriculas>
      </Route>
      <Route path="/matriculas/:id" component={PaginaDetalheMatricula}></Route>
    </BrowserRouter>
    
  )
}

export default App;
