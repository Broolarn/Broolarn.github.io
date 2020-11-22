import React from 'react';

import { Avatar, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Julius from '../images/Julius.jpg';

const useStyles = makeStyles(() => ({
    large: {
        width: '15vh',
        height: '15vh',
    },
}));

export const Aboutme = () => {
    const classes = useStyles();
    return (
        <Grid container direction="column" justify="center" alignItems="center">
            <Grid item xs={11}>
                <Avatar src={Julius} className={classes.large} />
            </Grid>
            <Grid item xs={11}>
                <Typography variant="h6" gutterBottom>
                    Im a young lad that just finished my Master of Science in Media Technology and
                    Engineering at Linköping university. In my master i focused on
                    visualization,image processing, AI/ML and project courses for more hand on
                    programming experience
                </Typography>
            </Grid>
        </Grid>
    );
};
