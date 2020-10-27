import React,{useEffect , useState , createContext ,useContext} from 'react'
import {NativeSelect, FormControl} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    form:{
        flexGrow: 1,
        width:"100%",
    }
}));

export const Contextcountryname = createContext()

function Countrypicker( ) {
const handlecountrychange = useContext(Contextcountryname);
let classes = useStyles();

    // console.log(Object.values(countrynames).map((countrytitle, i) => <option key={i} value={countrytitle} > {countrytitle.title}</option>))

    const [countrynames, setcountrynames] = useState({})
    
    useEffect ( () => {
        async function countries() {
             const nameresponse = await fetch("https://api.thevirustracker.com/free-api?countryTotals=ALL")
            const countryINjson = await nameresponse.json();
            setcountrynames(countryINjson && countryINjson.countryitems && countryINjson.countryitems[0] && countryINjson.countryitems[0] && countryINjson.countryitems[0])
        }
        countries();
    },[!countrynames])

function changeFunc(names) { 
    handlecountrychange(names)
}

   return (
        <FormControl className={classes.form} >
           <NativeSelect defaultValue="" onChange={(e)=>{ changeFunc(e.target.value)}} >
               <option value="" >Global</option>
               {Object.values(countrynames).map((countrytitle, i) => <option key={i} value={countrytitle.code}  > {countrytitle.title} </option>)}
           </NativeSelect>
       </FormControl>
    )
}
export default Countrypicker ;
