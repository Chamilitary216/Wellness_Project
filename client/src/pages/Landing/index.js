import React, { useState } from 'react';
import Login from '../../components/Auth/Login';
import Register from '../../components/Auth/Register';
import image from '../../images/signup.jpg';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Route, Switch, Link, Router } from "react-router";


const useStyles = makeStyles((theme) => ({
    root: {
      height: '100vh',
    },
    image: {
      backgroundImage: `url(${image})`,
      backgroundRepeat: 'no-repeat',
      backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
  }));

const Landing = () => {
    const classes = useStyles();
    return (
      <Grid container component="main" className={classes.root}>
      <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Switch>
            <Route exact path ={['/', '/login']}>
              <Login />
            </Route>
            <Route exact path = '/register'>
              <Register />
            </Route>
          </Switch>
        </Grid>
      </Grid>
    )
}

export default Landing;