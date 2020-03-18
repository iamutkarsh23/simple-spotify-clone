import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Container, Typography, Link} from '@material-ui/core';
import '../Containers/App.css';

const useStyles = makeStyles(theme => ({
    featuresBackground: {
      background: 'linear-gradient(to bottom, rgb(211, 7, 228), rgb(53, 114, 215))',
      textAlign: 'center',
    },
    heroContent: {
        padding: theme.spacing(6, 0, 8),
    },
    featuresHeading: {
        padding: theme.spacing(10,0,6,0),
    },
    featuresPara: {
        padding: theme.spacing(0,0,3,0),
    }
}));


const Features = () => {
    const classes = useStyles();
    return(
        <div className={classes.featuresBackground}>
            <Container maxWidth="lg" component="main" className={classes.heroContent}>
                <Typography className={classes.featuresHeading} id="tagline-one"  variant="h3" align="center" color="textPrimary" gutterBottom>
                    It hits all the right notes.
                </Typography>
                <Typography className={classes.featuresPara} id="tagline-two" variant="h5" align="center" color="textSecondary" component="p">
                    Stream your favorite tracks ad-free.
                </Typography>
                <Typography className={classes.featuresPara} id="tagline-two" variant="h5" align="center" color="textSecondary" component="p">
                    We'll recommend tracks you'll love.
                </Typography>
                <Typography className={classes.featuresPara} id="tagline-two" variant="h5" align="center" color="textSecondary" component="p">
                    Get exclusive and original content. 
                </Typography>
                <Typography className={classes.featuresPara} id="tagline-two" variant="h5" align="center" color="textSecondary" component="p">
                    Listen across all of your devices.
                </Typography>
                <Link className={classes.featuresPara} style={{cursor: 'pointer'}} href="" id="tagline-two" variant="h5" align="center" color="textSecondary" component="p">
                    Learn more about Spotify features >
                </Link>
          
            </Container>
        </div>
    );

}

export default Features; 