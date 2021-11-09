import React from 'react';
import { useState } from 'react';
import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';
import login from '../../../images/login.png'
import useAuth from '../../../hooks/useAuth';

const Register = () => {

    const [loginData, setLoginData] = useState({});
    const { user, registerUser, isLoading, authError } = useAuth();
    const history = useHistory();

    const handleLoginSubmit = e => {

        if (loginData.password !== loginData.password2) {
            alert("Your password did not matched");
            return;
        }

        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();

    }

    const handleOnBlur = e => {

        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }


    return (
        <Container>
            <Grid container spacing={2}>

                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom >
                        Register
                    </Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField sx={{ width: "75%", m: 1 }} name="name" type="text" onBlur={handleOnBlur} id="standard-basic" label="Your Name" variant="standard" />
                        <TextField sx={{ width: "75%", m: 1 }} name="email" type="email" onBlur={handleOnBlur} id="standard-basic" label="Your Email" variant="standard" />
                        <TextField sx={{ width: "75%", m: 1 }} name="password" onBlur={handleOnBlur} id="standard-basic" label="Your Password" type="password" variant="standard" />
                        <TextField sx={{ width: "75%", m: 1 }} name="password2" onBlur={handleOnBlur} id="standard-basic" label="Retype Your Password" type="password" variant="standard" />
                        <Button sx={{ width: "75%", m: 1 }} type="submit" variant="contained">Register</Button>
                        <Link style={{ width: "75%", textDecoration: "none" }} to="/login"><Button variant="text">Already Registered? Please Login</Button>
                        </Link>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User created successfully</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>

                <Grid item xs={12} md={6}>
                    <img src={login} style={{ width: "100%" }} alt="" />
                </Grid>

            </Grid>
        </Container>
    );
};

export default Register;