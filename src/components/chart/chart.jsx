import React from 'react'
import {Bar } from 'react-chartjs-2';
import {Grid } from '@material-ui/core';

function Chart({data:{confirmed , recovered ,deaths}}) {

    if (!confirmed && !deaths){
        return "Loading....."
    }

 const Barchart =(
     confirmed ? (
        <Bar 
        data = {{
            labels: ['Infected' , 'Recovered' , "Deaths"],
            datasets:[
                {
                    label: 'People',
                    backgroundColor: ['rgba(0, 0, 255, 0.5)', 'rgba(0, 255, 0, 0.5)', 'rgba(255, 0, 0, 0.5)'],
                    data: [confirmed , recovered , deaths],
                },
            ],
        }}
        options = {{
            legend: {display: false},
            title: {display: true },
        }}
        />
     ) :null
 );
 

    return <div>
        <Grid xs ={12} xm = {12} >
            <Grid item xs = {12} xm = {12} >
           { Barchart}
            </Grid>
        </Grid>
    </div>
}

export default Chart
