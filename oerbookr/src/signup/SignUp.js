import React, { useState, } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import styled from 'styled-components';
import lecture from '../img/lecture.jpg';


  const SignupForm = styled.div `
  width: 75%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 8% 0% 8% 0%;

  img {
      width: 50%;
      @media(max-width:800px) {
        margin-top: 8%;
        width: 100%;
      }
  }

  form {
      display: flex;
      flex-direction: column;
      padding: 20px; 
      width: 50%;
      input {
          font-size: 1.1em;
          margin: 1em auto;
          width: 80%;
          padding: 10px 20px;
      }

      button {
          margin:0 auto;
          width: 40%;
          background-color: #7EAFBA;
          color: #D9B382;        
          font-weight: bold;
          text-shadow: 2px 2px 2px #111;
          border-radius: 12px;
          border: none;
          padding: 1.5%;
          font-size: 1.1em;
          cursor: pointer;
          @media(max-width: 500px) {
            width: 70%;
            padding: 3%;
            font-size: 1.4em;
          }
          
      }
  }
  @media(max-width:800px) {
    padding: 15% 0%;
    flex-direction: column;
}
@media(max-width:500px) {
  padding: 20% 0%;
  flex-direction: column;
}
  `
const SignUp = (props) => {

    const [credentials, setCredentials] = useState({name :'', username : '', password : ''})

    const signup = e => {
        e.preventDefault();
        axiosWithAuth().post('https://oer-bookr.herokuapp.com/api/auth/register', credentials)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                console.log('Register Call Successful',res)
                props.history.push('/booklist')
            })
            .catch (err => { 
                console.log('its not working', err)
            })
    }
    const handleChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    return (
      <SignupForm>
        <img src={lecture} alt="Lecture Hall"/>
         <form onSubmit = {signup}>
                <input 
                  type = 'text'
                  name = 'username'
                  placeholder = 'Username'
                  value = {credentials.username}
                  onChange ={handleChange}
                />
                <input 
                  type = 'text'
                  name = 'name'
                  placeholder = 'name'
                  value = {credentials.name}
                  onChange ={handleChange}
                />
                <input 
                  type = 'password'
                  name = 'password'
                  placeholder = 'Password'
                  value = {credentials.password}
                  onChange ={handleChange}
                />
                <button>Sign Up</button>
        </form>
        </SignupForm>
    )
}

export default SignUp;    

