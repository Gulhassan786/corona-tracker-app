import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
       
    },
    title: {
        flexGrow: 1,
        textAlign:"center",
    },
    app:{
        background: "red",
    }
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.app}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                       COVIDE-19 
          </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}
