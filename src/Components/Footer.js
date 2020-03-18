import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Container, Typography, Grid, Box, Link} from '@material-ui/core';
import '../Containers/App.css';

const useStyles = makeStyles(theme => ({
    
  footerContainer:{
    background: 'black',
  },
  footerCopyright:{
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing(6),
    },
  },
  footer: { 
    textAlign: 'left',
    paddingLeft: theme.spacing(5),
    color: 'white',
    borderTop: `1px solid ${theme.palette.divider}`,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },

  footerFontColor: {
    color:'white',
  },

}));

const footerDetails = [
    {
      title: 'Company',
      description: ['About', 'Jobs', 'Contact us', 'Locations'],
    },
    {
      title: 'Communities',
      description: ['For Artists', 'Developers', 'Brands', 'Investors'],
    },
    {
      title: 'Legal',
      description: ['Privacy Center', 'Privacy Policy', 'Cookies'],
    },
];
  
function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center" style={{color:'white'}}>
        {'Copyright © '}
        <Link color="inherit" href="#" style={{color:'white'}}>
          Spotify
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
}


const Features = () => {
    const classes = useStyles();
    return(
        <Container maxWidth={false} component="footer" id="footer" className={classes.footerContainer}>
          <div className={classes.footer}>
            <Grid container spacing={4} justify="space-evenly">
              {footerDetails.map(footer => (
                <Grid item xs={12} sm={4} key={footer.title}>
                  <Typography variant="h6" color="textPrimary" gutterBottom className={classes.footerFontColor}>
                    {footer.title}
                  </Typography>
                  <ul>
                    {footer.description.map(item => (
                      <li key={item}>
                        <Link href="#" variant="subtitle1" color="textSecondary" className={classes.footerFontColor}>
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Grid>
              ))}
            </Grid>
          </div>
          <Box mt={5} className={classes.footerCopyright}>
            <Typography variant="body1" color="textSecondary" align="center" style={{color:'white'}} gutterBottom>
                Designed & Built by <Link href="https://utkarshpatadia.com" className={classes.footerFontColor}>Utkarsh Patadia</Link>
            </Typography>
            <Copyright />
          </Box>
      </Container>
    );
}

export default Features; 