import React from 'react';
import './App.css';
import Login from './login/LoginPage';
import SignUp from './signup/SignUp';
import {Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
       <ul>
          <li>
            <Link to = '/login'>Login</Link>
          </li>
          <li>
            <Link to = '/signup'>SignUp</Link>
          </li>
        </ul>
        
      <Route exact path = '/login' component = {Login} />
      <Route exact path = '/signup' component = {SignUp} />
    </div>
  );
}

export default App;
