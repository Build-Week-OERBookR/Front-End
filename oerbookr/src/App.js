import React from 'react';

import Navigation from './Components/Navigation';
import BookList from './Components/BookList';
import BookExpanded from './Components/BookExpanded';
import { Route , Link} from 'react-router-dom';
import Login from './login/LoginPage';
import SignUp from './signup/SignUp';
import Footer from './Components/Footer';
import Wishlist from './Components/Wishlist/Wishlist';


function App() {
  return (
    <div className="App">

      <Navigation />
      <Route exact path='/booklist' component={BookList} />
      <Route path ='/books/:id' component={BookExpanded} />

      <Footer />


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
      <Route exact path = '/wishlist' component = {Wishlist} />


    </div>
  );
}

export default App;
