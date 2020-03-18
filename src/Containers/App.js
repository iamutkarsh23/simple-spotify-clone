import React, {Component} from 'react';
import {AppBar, Container, Toolbar, Typography, Button} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import logo from '../Images/logo.png';
import Features from '../Components/Features';
import Footer from '../Components/Footer';
import './App.css';

const styles = theme => ({
  navBarCont: {
    flexGrow: 1,
  },
  appbar: {
    background: 'black',
  },
  logo:{
    height: 45,
    width: 45,
    background: 'inherit'
  },
  title: {
    flexGrow: 1,
    marginRight: theme.spacing(0), 
    display: 'flex',
  },
  heroContent: {
    padding: theme.spacing(30, 0, 40),

  },
  getSpotifyButtonStyles: {
    marginTop: theme.spacing(2),
  },
  media: {
    height: 140,
    width: 140,
    display: 'inline-flex',
    backgroundSize: 'contain',

  },
  cardOuterStyle: {
    background: 'inherit',
    borderRadius: '0px', 
    borderShadow: '0px',
  },

  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
});


class App extends Component {

  render(){
    const { classes } = this.props;
    return (
      <div className="App">
        <div className={classes.navBarCont}>
          <AppBar position="fixed" className={classes.appbar}>
            <Toolbar>
              <img src={logo} alt="spotify" className={classes.logo}></img>
              <Typography variant="h6" className={classes.title}>
                Spotify
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </div>

        <Container maxWidth="md" component="main" className={classes.heroContent}>
          <Typography id="tagline-one"  variant="h3" align="center" color="textPrimary" gutterBottom>
            Sounds like Music. 
          </Typography>
          <Typography id="tagline-two" variant="h5" align="center" color="textSecondary" component="p">
            Lose yourself in 100 million songs. 
          </Typography>
          <Button variant="contained" id="try-free-btn" className={classes.getSpotifyButtonStyles}>
            Try it free
          </Button>
        </Container>

        <Features /> 

        <Footer />


      </div>
    );
  }
  
}

export default withStyles(styles, {withTheme: true})(App);

