import React, {useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth'
import {connect} from 'react-redux';
import {get_user_Id} from './../action/loginAction'
import styled from 'styled-components';
import bookshelf from '../img/bookshelf.jpg';

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
                width: 100%;
                margin: 0 auto;
                padding-bottom: 8%;
            }
        }

        form {
            display: flex;
            flex-direction: column;
            padding: 20px; 
            width: 50%;
            @media(max-width: 500px) {
                width: 90%;
            }
            input {
                font-size: 1.1em;
                margin: 1em auto;
                width: 90%;
                padding: 10px 20px;
                @media(max-width: 500px) {
                    width: 100%;
                }

            }
            input:focus{
                outline: none;
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

                @media(max-width: 500px) {
                    width: 70%;
                    font-size: 1.4em;
                    padding: 3%;
                  }
                
            }
        }

        @media(max-width:800px) {
            margin-top: 3em;
            flex-direction: column;
        }
    `

    const Welcome = styled.h5`
        font-size: 2em;
        width: 80%;
        margin: 0 auto;
        text-align: center;
        line-height: 1.3em;
        font-family: 'Secular One', sans-serif;
    `
const Login = (props) => {


    const [credentials, setCredentials] = useState({
        username:'',
        password:''
    })

    const login = e =>{
        e.preventDefault();
        axiosWithAuth().post(`https://oer-bookr.herokuapp.com/api/auth/login`, credentials)
            .then(res => {
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
            <Welcome>Welcome back, you've made a smart choice!</Welcome>
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