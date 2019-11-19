import React from 'react';
import { Link } from 'react-router-dom';

const Splash = (props) => {
    return (
        <div>
            <h1 className="">Welcome to OER Bookr</h1>
            <h4>Your resource for learnin' good.</h4>
            <ul>
          <li>
            <Link to = '/login'>Login</Link>
          </li>
          <li>
            <Link to = '/signup'>SignUp</Link>
          </li>
        </ul>
        </div>
    );
}

export default Splash;
