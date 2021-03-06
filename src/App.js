import React ,{useState , useEffect} from 'react';
import Cards from './components/cards/cards';
import { makeStyles } from '@material-ui/core/styles';
import { Typography,  Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Countrypicker, { Contextcountryname} from './components/countrypicker/countrypicker';
import Chart from './components/chart/chart';
import Header from './Header';
import { Countrydata }from './api'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
  },
  paper: {
    padding: theme.spacing(4.5),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginBottom: 15,
    textDecoration: 'none',

    '&:hover': {
      textDecoration: 'box',
      color: "red",
    },
    borderRadius: 20,
  },
  grid: {
    marginLeft: 10,
  },
  secondegrid: {
    marginRight: 0,
    paddingRight: 8,
    
  },
  hover: {
    textDecoration: 'none',
    paddingTop: 25,
    '&:hover': {
      textDecoration: 'underline',
      color: "red",
    }
  },
}));


function App() {

    const [data , setcountrynames]  = useState({})
    const classes = useStyles();

 useEffect (   () => {
   async function countries() {
     const nameresponse = await (Countrydata())
     setcountrynames(nameresponse)
  }
   countries();
} ,[])

 const handlecountrychange = async (nameofcountry)=>{
   const names = await (Countrydata(nameofcountry))
  setcountrynames(names)

 }

  return (
<>
      <Contextcountryname.Provider value ={handlecountrychange}>
         <Header/>
      <div className = {classes.root}>


        <Grid container spacing={2}>

            <Grid item xs={12} style={{ marginTop: 10, marginLeft: 10, width: '97%', paddingRight: 0 }} >
              <Paper elevation={6} style={{ fontWeight: "normal", color: "black", backgroundColor: "rgba(25,200,200,0.5)", width: "99%", height: 100, padding: 20, paddingLeft: 10, marginBottom: 10, textAlign: "center" }}>
                <Typography variant="h6" className={classes.hover}>
                  Please follow the SOP`s to protect your selves , your family and the whole world from COVIDE-19 pandemic request by Gul Hassan
                     </Typography>
              </Paper >
            </Grid>

          <Grid item xs className={classes.grid} style={{ width: "90%"}}>

              <Cards  data = {data}/>

          </Grid>
          <Grid item xs={8.99} className={classes.secondegrid} style={{ width: "77%", height:400 }}>
            <Countrypicker />
            <Chart data={data} />

        </Grid> 
        </Grid>
        </div>
      </Contextcountryname.Provider>

    </>
  );
  
  }

export default App;
{/* <Paper elevation={8} className={classes.paper} style={{ width: "100%", height: 600, backgroundColor: "beige" }} >  */ }
{/* </Paper> */ }