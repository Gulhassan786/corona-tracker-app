import React from 'react';
import { Typography} from '@material-ui/core';
import{makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Countup from 'react-countup';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
       width: '100%',
    },
    paper: {
        padding: theme.spacing(4.5),
        textAlign: "center",
        color: theme.palette.text.secondary,
        marginBottom: 15 ,
        textDecoration: 'none',
       
        '&:hover': {
            textDecoration: 'box',
            color: "red",
        },
        borderRadius: 20,
    },
    grid:{
        marginLeft: 10,
    },
    secondegrid:{
        marginRight:0,
        paddingRight: 8,
    },
    hover:{
        textDecoration: 'none',
        paddingTop: 25,
        '&:hover': {
            textDecoration: 'underline',
            color:"red",
        }},
}));

function Cardfunction ({data:{confirmed , recovered , deaths }}) {

    const classes = useStyles();
   if (!confirmed && !recovered && !deaths ){
       return ("Loading......") 
   }
    return (
        <>
        <div >
                <Paper elevation={8} className={classes.paper} style={{ backgroundColor: 'rgba(0, 0, 255, 0.5)', width:"70%"}} >
                            <Typography color="textSecondary" gutterBottom style={{ color: "orange ", fontWeight: "bolder", fontSize: 18 }} >Infected</Typography>
                            <Typography variant="h5" style={{ color: "orange", fontWeight: "bolder" }}>
                              <Countup start={0} end={confirmed}   duration={2.5} separator=',' />
                        </Typography>
                            <Typography variant="body2" style={{ color: "orange", fontWeight: "bolder" }}>Number of active cases of COVID-19</Typography>
                 </Paper>
           
                <Paper elevation={8} className={classes.paper} style={{ backgroundColor: "rgba(0, 255, 0, 0.5)" ,width: "70%"}}>
                            <Typography color="textSecondary" gutterBottom style={{ color: "green", fontWeight: "bolder", fontSize: 18}} >Recovered</Typography>
                        <Typography variant="h5">  
                                <Countup start={0} end={recovered} duration={2.5} separator=',' style={{ color: "green", fontWeight: "bolder" }}/>
                         </Typography>
                            <Typography variant="body2" style={{ color: "green", fontWeight: "bolder" }}>Number of recovered peoples from <COVID-19>COVID-19</COVID-19></Typography>
                    </Paper>
                 
                <Paper elevation={8} className={classes.paper} style={{ backgroundColor: "rgba(255, 0, 0, 0.5)", width: "70%" }}>
                            <Typography color="textSecondary" gutterBottom style={{ color:"red", fontWeight: "bolder"  , fontSize:18 }} >Deaths</Typography>
                        <Typography variant="h5"> 
                                <Countup start={0} end={deaths} duration={2.5} separator=',' style={{ color: "red", fontWeight: "bolder" }}/> 
                         </Typography>
                            <Typography variant="body2" style={{ color: "red", fontWeight: "bolder"}}>Number of deaths due to COVID-19</Typography>
             </Paper>
            </div>
      </>
    )
}

export default Cardfunction;
