import React from 'react';

import Navigation from './Components/Navigation';
import BookList from './Components/BookList';
import { Route , Link} } from 'react-router-dom';
import Login from './login/LoginPage';
import SignUp from './signup/SignUp';


function App() {
  return (
    <div className="App">

      <Navigation />
      <Route path='/' component={BookList} />

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
