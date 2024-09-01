import React, { useState } from "react";


//styles
import { Button, ContrastButton, DivRow, ErrorMessage, H1, Input, LoginButtonArea, LoginWrapper } from "../../styles";
import './loginPage.css'

//redux
import { useDispatch } from "react-redux";
import { setUser } from "../../features/users/usersSlice";

//firebase
import { auth } from "../../firebase";
import {
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from "firebase/auth";

//components
import Loader from "../loader/loader";



const LoginPage = () => {

    const dispatch = useDispatch();

    const [loginType, setLoginType] = useState('login');    

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [userCredentials, setUserCredentials] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    onAuthStateChanged(auth, (user) => {
        if (user) {
            dispatch(setUser({
                id: user.uid,
                email: user.email,
            }));
        } else {
            dispatch(setUser(null));
        }
        if(isLoading) {
            setIsLoading(false);
        } 
      });

    const handleCredentials = (e) => {
        setUserCredentials({...userCredentials, [e.target.name]: e.target.value});
        
    }

    const handleSignup = (e) => {
        e.preventDefault();
        setError('');
        createUserWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
        .catch((error) => {
            setError(error.message);                
        });
    }

    const handleLogin = (e) => {
        e.preventDefault();
        setError('');
        signInWithEmailAndPassword(auth, userCredentials.email, userCredentials.password)
        .catch((error) => {
            setError(error.message);
        });
    }

    const handlePasswordReset = () => {
        const email = prompt('Please, enetr your email');
        sendPasswordResetEmail(auth, email);
        alert('Email sent, check your email');
    }

    return (
        <>
            {isLoading ? <Loader></Loader> :
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
                    <form className="div-column">
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
                            <ContrastButton type='submit' onClick={(e) => {handleLogin(e)}}>Login</ContrastButton>
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
                            <p onClick={handlePasswordReset} className="reset-password">Forgot password?</p>
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
                
                
            </LoginWrapper>}
        </>
        
    )
};

export default LoginPage;