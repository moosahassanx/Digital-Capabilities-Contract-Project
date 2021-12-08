// importing react and community library
import React from "react";
import { Radar } from "react-chartjs-2";

const RadarChart = (props) => {

    return(
        // generating radar chart based on properties input
        <Radar data={props.inputData} options={
            {
                type: "radar",
                responsive: true,
                title: {text: 'CHART TITLE', display: true},
                scale: 
                {
                    ticks: 
                    {
                        beginAtZero: true,
                        max: 45,
                        min: 0
                    }
                }
            }} 
        />
    )
}

export default RadarChart;