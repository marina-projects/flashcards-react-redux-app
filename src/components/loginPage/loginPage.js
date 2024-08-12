import React, { useState } from "react";


//styles
import { TextField } from "@mui/material";
import { Button, ContrastButton, DivColumn, DivRow, H1, Input, LoginButtonArea, LoginWrapper, SimpleButton } from "../../styles";
import './loginPage.css'

//firebase
import { auth } from "../../firebase";



const LoginPage = () => {

    const [loginType, setLoginType] = useState('login');    

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    console.log(auth);


    const handleSignIn = () => {
        
    }


    return (
        <LoginWrapper>
            <H1>Welcome to Happy Puppy app!</H1>
            {
                loginType === 'login'
                ?
                <p>Glad to see you again! Please, login:</p>
                :
                <p>To see all features, please sign up:</p>
            }
            
            
            
            <DivRow>
                <form className="div-column" onSubmit={handleSignIn}>
                    <Input 
                        id='email'
                        width='300px'
                        name='email'
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input 
                        id='password'
                        name='password'
                        type='password'
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {
                        loginType === 'login'
                        ?
                        <ContrastButton type='submit'>Login</ContrastButton>
                        :
                        <ContrastButton type='submit'>Sign Up</ContrastButton>
                    }
                </form>
                {
                    loginType === 'login'
                    ?
                    <LoginButtonArea>
                        <p>Don't have an account yet? </p>
                        <Button onClick={() => setLoginType('signup')}>
                            Register
                        </Button>
                    </LoginButtonArea>
                    :
                    <LoginButtonArea>
                        <p>Already have an account? </p>
                        <Button onClick={() => setLoginType('login')}>
                            Login
                        </Button>
                    </LoginButtonArea>
                    
                }
            </DivRow>
            
            
        </LoginWrapper>
    )
};

export default LoginPage;