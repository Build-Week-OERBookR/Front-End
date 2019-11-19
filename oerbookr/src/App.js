import React from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import BookList from './Components/BookList';
import BookExpanded from './Components/BookExpanded';
import { Route , Link} from 'react-router-dom';
import Login from './login/LoginPage';
import SignUp from './signup/SignUp';
import Footer from './Components/Footer';
import Splash from './Components/Splash';
import Wishlist from './Components/Wishlist/Wishlist';



function App() {
  return (
    <div className="App">
      <Navigation />

      
       <Route path='/' exact component={Splash} />
      <Route  path = '/login' component = {Login} />
      <Route  path = '/signup' component = {SignUp} />

      <Route exact path='/booklist' component={BookList} />
      <Route path ='/books/:id' component={BookExpanded} />


      <Footer />

    </div>
  );
}

export default App;
