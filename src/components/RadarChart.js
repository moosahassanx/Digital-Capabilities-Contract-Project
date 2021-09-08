import { useState, useEffect } from "react";
import { Radar } from "react-chartjs-2";

const RadarChart = () => {
    const [chartData, setChartData] = useState({});

    const chart = () => {
        setChartData({
            labels: [
                'Proficiency and Productivity',
                'Digital Learning and Development',
                'Digital Creation, Problem Solving and Innocation',
                'Digital Communication, Collaboration and Participation',
                'Information Literacy, Data Literacy and Media Literacy',
                'Digital Identity and Wellbeing'
            ],
            datasets: [
                // dataset 1
                {
                    label:'Current Score',
                    data:[
                      40,
                      29,
                      13,
                      42,
                      36,
                      30
                    ],
                    backgroundColor: 'rgba(00, 255, 00, 0.1)',
                    borderColor: '#00FF00',
                    borderWidth: 2
                },

                // dataset 2
                {
                    label:'Previous Score',
                    data:[
                      42,
                      35,
                      22,
                      31,
                      15,
                      35
                    ],
                    backgroundColor: 'rgba(0, 255, 255, 0.1)',
                    borderColor: '#00FFFF',
                    borderWidth: 2
                  }
            ]
        })
    }

    useEffect(() => {
        chart()
    }, [])

    return (
        <div>
            <Radar data = {chartData} options={{
                responsive: true,
                title: {text: 'CHART TITLE', display: true}
            }} />
        </div>
        
    )
}

export default RadarChart;