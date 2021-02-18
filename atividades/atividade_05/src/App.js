import { BrowserRouter, Route} from 'react-router-dom'


import './App.css';
import { HomePage } from './components/Pages/HomePage/HomePage';
import { PostPage } from './components/Pages/PostPage/PostPage';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <HomePage></HomePage>
        </Route>
        <Route path="/post">
          <PostPage></PostPage>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
