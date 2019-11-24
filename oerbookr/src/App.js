import React, {useState} from "react";
import "./App.css";
import Navigation from "./Components/Navigation";
import BookList from "./Components/BookList";
import BookExpanded from "./Components/BookExpanded";
import { Route } from "react-router-dom";
import Login from "./login/LoginPage";
import SignUp from "./signup/SignUp";
import Footer from "./Components/Footer";
import Splash from "./Components/Splash";
import Wishlist from "./Components/Wishlist/Wishlist";
import PrivateRoute from "./utils/PrivateRoute";
import {ReviewContext} from './contexts/ReviewContext'
import axiosWithAuth from './utils/axiosWithAuth'

function App() {

  const [reviews, setReviews] = useState({
    review: "",
    stars: 0,
    reviewer_id: parseInt(localStorage.getItem('id')),
  })

  const addReview = e => {
   
       axiosWithAuth().post(`https://oer-bookr.herokuapp.com/api/reviews/`, reviews)
        .then(res => {
            window.location.reload()
        })
        .catch(err => {
            console.log(err)
        })
  }

  const onStarClick = nextvalue =>{
    setReviews({...reviews,
        stars:nextvalue
    })
  }

  return (
    <ReviewContext.Provider value ={{reviews, addReview,onStarClick, setReviews}}>
    <div className="App">
      <Navigation />

      <Route path="/" exact component={Splash} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />

      <PrivateRoute exact path="/booklist" component={BookList} />
      <PrivateRoute path="/books/:id" component={BookExpanded} />

      <PrivateRoute path="/wishlist" component={Wishlist} />
      <Footer />
    </div>
    </ReviewContext.Provider>
  );
}

export default App;
