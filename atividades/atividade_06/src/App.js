import { Redirect, Route, Router } from 'react-router-dom';
import { createContext, useState } from 'react';

import history from './history'

import './App.css';
import { HomePage } from './components/Pages/HomePage/HomePage';
import { PostPage } from './components/Pages/PostPage/PostPage';
import { SignUpPage } from './components/Pages/SignUpPage/SignUpPage';
import { SignInPage } from './components/Pages/SignInPage/SignInPage';

export const authContext = createContext(null);

function App() {
  const [auth, setAuth] = useState({token: localStorage.getItem("token"), nome: localStorage.getItem("nome")})

  function setAuthLocalStorage(newAuth) {
    setAuth(newAuth)
    localStorage.setItem("token", newAuth.token)
    localStorage.setItem("nome", newAuth.nome)
  }

  return (
    <authContext.Provider value={{auth: auth, setAuth: setAuthLocalStorage}}>
      <Router history={history}>
        <Route exact path="/">
          {auth.token == null ? <Redirect to="/login" /> : <HomePage />}
        </Route>
        <Route path="/post">
          <PostPage></PostPage>
        </Route>
        <Route path="/cadastrar">
          <SignUpPage />
        </Route>
        <Route path="/login">
          <SignInPage />
        </Route>
      </Router>
    </authContext.Provider>
  );
}

export default App;
