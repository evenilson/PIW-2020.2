import './App.css';
import { Feed } from './components/Feed/Feed';

import { Navigator } from './components/commom/Navigator/Navigator'


function App() {
  return (
    <div className="App">
      <Navigator></Navigator>
      <Feed></Feed>
    </div>
  );
}

export default App;