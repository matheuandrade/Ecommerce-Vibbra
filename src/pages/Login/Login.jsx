import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { handleLogin } from '../../action/Authentication';
import { useForm } from "react-hook-form";
import history from '../../utils/History';
import Copyright from '../../components/Copyright/Copyright';
import { 
        Avatar, 
        Button, 
        CssBaseline, 
        TextField, 
        FormControlLabel, 
        Checkbox, 
        Grid, 
        Box, 
        Typography, 
        Link,
        Paper 
        } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from './Styles';
import { getUserLogged } from '../../utils/Auth';

const Login = ({
    handleLogin
}) => {

    useEffect(() => {        
        if(getUserLogged()){
            history.push('/Home');
        }
      },[getUserLogged]);

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = async (data) => {
        const response = await handleLogin(data);
        if(response){
            history.push('/Home');
        }
    };

    const classes = useStyles();

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                Sign in
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)} className={classes.form} noValidate>
                    <TextField
                        error={errors.email}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        helperText={errors.email && "Email is required."}
                        autoFocus
                        inputRef={register({ required: true })}
                    />
                    <TextField
                        error={errors.password}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        helperText={errors.password && "Password is required."}
                        inputRef={register({ required: true })}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                        <Link href="#" variant="body2">
                            Forgot password?
                        </Link>
                        </Grid>
                        <Grid item>
                        <Link href="#" variant="body2">
                            {"Don't have an account? Sign Up"}
                        </Link>
                        </Grid>
                    </Grid>
                    <Box mt={5}>
                        <Copyright />
                    </Box>
                </form>
            </div>
            </Grid>
      </Grid>
    )
};

export default connect(
    null,
    {
        handleLogin
    }
)(Login);

