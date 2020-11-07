import { useEffect } from 'react';
import './App.css';
import Root from './pages/root';
import setUpAxios from './config/axios';


function App() {

  useEffect(()=>{
    setUpAxios()
  },[]);
  return (
    <div className="App">
      <Root/>
    </div>
    

    /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;
