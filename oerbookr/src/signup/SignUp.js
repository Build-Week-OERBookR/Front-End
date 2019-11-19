import React, { useState, } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
import styled from 'styled-components';
const SignUp = (props) => {

  const SignupForm = styled.div `
  margin-top: 10%;
  
  `

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

