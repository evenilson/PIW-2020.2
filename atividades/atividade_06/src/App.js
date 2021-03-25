import {Route, Router} from 'react-router-dom'

import history from './history'

import './App.css';
import { HomePage } from './components/Pages/HomePage/HomePage';
import { PostPage } from './components/Pages/PostPage/PostPage';
import { SignUpPage } from './components/Pages/SignUpPage/SignUpPage';
import { SignInPage } from './components/Pages/SignInPage/SignInPage';



function App() {
  return (
    <Router history={history}>
      <Route exact path="/">
        <HomePage></HomePage>
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
  );
}

export default App;
