import React, {useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth'

const Login = (props) => {
    const [credentials, setCredentials] = useState({})

    const login = e =>{
        e.preventDefault();
        axiosWithAuth().post(`https://oer-bookr.herokuapp.com/api/auth/login`, credentials)
            .then(res => {
                console.log('Login Success', res)
                localStorage.setItem('token', res.data.token)
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
        <div>
            <form onSubmit = {login}>
                <input 
                  type = 'text'
                  name = 'username'
                  placeholder = 'Username'
                  value = {credentials.username}
                  onChange ={handleChange}
                />
                <input 
                  type = 'password'
                  name = 'password'
                  placeholder = 'Password'
                  value = {credentials.password}
                  onChange ={handleChange}
                />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login