import React, {useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth'
import {connect} from 'react-redux';
import {get_user_Id} from './../action/loginAction'
import styled from 'styled-components';
import bookshelf from '../img/bookshelf.jpg';

const Login = (props) => {

    const LoginForm =  styled.div `
        width: 75%;
        margin: 0 auto;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: 8% 0% 8% 0%;

        img {
            width: 50%;
            @media(max-width: 800px) {
                width: 80%;
                margin: 0 auto;
                padding-bottom: 24%;
            }
            @media(max-width: 500px) {
                width: 80%;
                margin: 0 auto;
                padding-bottom: 22%;
            }
        }

        form {
            display: flex;
            flex-direction: column;
            padding: 10%; 
            
            input {
                font-size: 1.1em;
                margin: 1em auto;
                width: 80%;
            }
            
            button {
                margin: 0 auto;
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
                
            }
        }
        
        @media(max-width:800px) {
            margin-top: 3em;
            flex-direction: column;
        }
    `

    const [credentials, setCredentials] = useState({})

    const login = e =>{
        e.preventDefault();
        axiosWithAuth().post(`https://oer-bookr.herokuapp.com/api/auth/login`, credentials)
            .then(res => {
                console.log('Login Success', res)
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('id', res.data.user_id);
                props.get_user_Id(parseInt(localStorage.getItem('id')))
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
        <LoginForm>
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
            <img src={bookshelf} alt="Books on shelves"/>
        </LoginForm>
    )
}

const mapStateToProps = state => {
    return{
        user_Id: state.idReducer.user_id
    }
}
const mapDispatchToProps = {
    get_user_Id
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)