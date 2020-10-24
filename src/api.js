
let confirmed = null;
let recovered = null;
let deaths = null;
let newer_cases = null;
let active_cases = null;
let new_deaths = null;
let serious_cases= null;
let unresolved = null;

export const Countrydata = async (name)=>{

    if (name){
        let changeable_url = 'https://api.thevirustracker.com/free-api?countryTotal='
        const countriesdata = await fetch(`${changeable_url}${name}`)
        const data = await countriesdata.json()

        confirmed = data && data.countrydata && data.countrydata[0].total_cases;
        recovered = data && data.countrydata && data.countrydata[0].total_recovered;
        newer_cases = data && data.countrydata && data.countrydata[0].total_new_cases_today;
         deaths = data && data.countrydata && data.countrydata[0].total_deaths;
         active_cases = data && data.countrydata && data.countrydata[0].total_active_cases;
         new_deaths = data && data.countrydata  && data.countrydata[0].total_new_deaths_today;
        serious_cases = data && data.countrydata && data.countrydata[0].total_serious_cases;
         unresolved = data && data.countrydata  && data.countrydata[0].total_unresolved;

        deaths += new_deaths
        confirmed += serious_cases + active_cases + newer_cases;

        return ({ confirmed, recovered, deaths, unresolved })
    }
    const countriesdata = await fetch('https://api.thevirustracker.com/free-api?global=stats')
    const data = await countriesdata.json()

     confirmed = data && data.results && data.results[0].total_cases;
     recovered = data && data.results && data.results[0].total_recovered;
     deaths = data && data.results && data.results[0].total_deaths;
     newer_cases = data && data.results && data.results[0].total_new_cases_today
     active_cases = data && data.results && data.results[0].total_active_cases
     new_deaths = data && data.results && data.results[0].total_new_deaths_today
     serious_cases = data && data.results && data.results[0].total_serious_cases
   
    deaths += new_deaths
    confirmed += newer_cases + active_cases + serious_cases 

    return ({ confirmed, recovered, deaths})

 }

