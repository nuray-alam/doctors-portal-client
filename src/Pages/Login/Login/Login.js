import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import login from '../../../images/login.png'
import useAuth from '../../../hooks/useAuth';

const Login = () => {

    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();


    const location = useLocation();
    const history = useHistory();

    const handleLoginSubmit = e => {

        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault();

    }

    const handleOnChange = e => {

        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history);
    }


    return (
        <Container>
            <Grid container spacing={2}>

                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom >
                        Login
                    </Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField sx={{ width: "75%", m: 1 }} name="email" type="email" onChange={handleOnChange} id="standard-basic" label="Your Email" variant="standard" />
                        <TextField sx={{ width: "75%", m: 1 }} name="password" onChange={handleOnChange} id="standard-basic" label="Your Password" type="password" variant="standard" />
                        <Button sx={{ width: "75%", m: 1 }} type="submit" variant="contained">Login</Button>
                        <Link style={{ width: "75%", textDecoration: "none" }} to="/register"><Button variant="text">New User? Please Register</Button>
                        </Link>
                    </form>
                    <p>-------------------------------------------</p>
                    <Button variant="contained" onClick={handleGoogleSignIn}>Google Sign In</Button>
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">Logged in successfully</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>

                <Grid item xs={12} md={6}>
                    <img src={login} style={{ width: "100%" }} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;