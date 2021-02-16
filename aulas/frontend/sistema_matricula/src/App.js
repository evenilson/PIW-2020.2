import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import { PaginaPrincipal } from './components/pages/PaginaPrincipal/PaginaPrincipal'
import { PaginaListarMatriculas } from './components/pages/PaginaListarMatriculas/PaginaListarMatriculas'

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <PaginaPrincipal></PaginaPrincipal>
      </Route>
      <Route path="/matriculas">
        <PaginaListarMatriculas></PaginaListarMatriculas>
      </Route>
    </BrowserRouter>
    
  )
}

export default App;
