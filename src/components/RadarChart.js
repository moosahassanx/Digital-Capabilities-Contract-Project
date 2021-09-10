import { useState, useEffect } from "react";
import { Radar } from "react-chartjs-2";

const RadarChart = (props) => {

    const [testInput, setTestInput] = useState("");
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
        // calculate()
        chart()
    }, [])

    function calculate()
    {
        var totalScore = 0;

        console.log(testInput);
        // console.log(props.myObj.q1);
        
        if(totalScore <= 71)
        {
            alert("you are a beginner");
            return;
        }

        if(totalScore <= 107)
        {
            alert("you are an elementary user");
            return;
        }

        if(totalScore <= 143)
        {
            alert("you are an intermediate user");
            return;
        }

        if(totalScore <= 179)
        {
            alert("you are an upper intermediate user");
            return;
        }

        if(totalScore <= 215)
        {
            alert("you are an advanced user");
            return;
        }

        if(totalScore <= 252)
        {
            alert("you are an proficient user");
            return;
        }
    }

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