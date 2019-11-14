import React, { useState, } from 'react'
import axiosWithAuth from '../utils/axiosWithAuth'
const SignUp = (props) => {

    const [credentials, setCredentials] = useState({name :'', username : '', password : ''})

    const signup = e => {
        e.preventDefault();
        axiosWithAuth().post('https://oer-bookr.herokuapp.com/api/auth/register', credentials)
            .then(res => {
                localStorage.setItem('token', res.data.token)
                console.log('Register Call Successful',res)
                props.history.push('/')
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
      <div>
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
        </div>
    )
}

export default SignUp;    

