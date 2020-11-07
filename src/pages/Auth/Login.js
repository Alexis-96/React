import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';


const Container = styled.div`
    display: flex;
    flex: 1;
    height: 100%;
    background-color: #512DA8 ;
    justify-content: center;
`;

const Form = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    padding: 16px;
    background-color: white;
    height: fit-content;
    border-radius: 10px;
    align-self: center;
    box-shadow: 0px 0px 10px 2px rgba(0, 0, 8, 8.5);

`;


const Login = (props) =>{

    const {onLogin} = props;

    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const onSubmit = (values) => {
        axios.post('auth/login',values).then(response => {
                if(response.data && response.data.token){
                    localStorage.setItem('token', response.data.token);
                    onLogin(response.data.token);
                    history.push('/home');
                }
                console.log(response);
            }).catch( error => {
                if(error && error.response){
                    console.log(error.response.data);
                    setError(error.response.data);
                }
            })
    };


    const validate = (values)=>{
        const error ={};
        return error;
    }

    const formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        onSubmit,
        validate
    })

    

    const history = useHistory();

    const login = () =>{
        if(email.length > 5 && password.length > 3){
            
        };       
    }


    return(
        <Container>
            <p>{error}</p>
            <Form>
            <form onSubmit={formik.handleSubmit}>
            <input
                name={'email'}
                onChange={formik.handleChange}
                value={formik.values.email}
                type="text" 
                placeholder={"Email"} 
                className={"input"}
                />
                <input
                name={'password'}
                onChange={formik.handleChange}
                value={formik.values.password} 
                type="password" 
                placeholder={"Contraseña"}
                className={"input"}
                />
                <button
                type={"submit"} 
                className={"input"}>Iniciar Sesión</button>
            </form>           
            </Form>
            </Container>
    )
        
            
};

export default Login;