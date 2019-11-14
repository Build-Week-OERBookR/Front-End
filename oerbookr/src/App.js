import React from 'react';
import Navigation from './Components/Navigation';
import BookList from './Components/BookList';
import Footer from './Components/Footer';
import { Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Route path='/' component={BookList} />
      <Footer />
    </div>
  );
}

export default App;
