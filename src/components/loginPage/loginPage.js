import React, { useState } from "react";


//styles
import { Button, ContrastButton, DivRow, ErrorMessage, H1, Input, LoginButtonArea, LoginWrapper } from "../../styles";
import './loginPage.css'

//firebase
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";




const LoginPage = () => {

    const [loginType, setLoginType] = useState('login');    

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [userCredentials, setUserCredentials] = useState({});
    const [error, setError] = useState('');

    const handleCredentials = (e) => {
        setUserCredentials({...userCredentials, [e.target.name]: e.target.value});
        
    }

    const handleSubmit = () => {

    }

    const handleSignup = (e) => {
        e.preventDefault();
        setError('');
        createUserWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                setError(error.message);
                
            });
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
                <form className="div-column" onSubmit={handleSubmit}>
                    <Input 
                        id='email'
                        width='300px'
                        value={email} 
                        name='email'
                        placeholder="Email"
                        onChange={(e) => handleCredentials(e)}
                    />
                    <Input 
                        id='password'
                        name='password'
                        value={password} 
                        type='password'
                        placeholder="Password"
                        onChange={(e) => handleCredentials(e)}
                    />
                    {
                        loginType === 'login'
                        ?
                        <ContrastButton type='submit'>Login</ContrastButton>
                        :
                        <ContrastButton type='submit' onClick={(e) => {handleSignup(e)}}>Sign Up</ContrastButton>
                    }
                    {
                        error && 
                        <ErrorMessage>{error}</ErrorMessage>
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