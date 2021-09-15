import './App.css';
import uonImage from './img/uon-logo.png';
import AssessmentInput from './components/AssessmentInput';
import React, {  useState, useEffect } from 'react';

const Main = () => {

	const [userType, setUserType] = useState("user_type");
	const [chartData, setChartData] = useState({});

	// retrieving from child
	const [sectionsInArray, setSectionsInArray] = useState([]);

	// this is the function which executes every time there is an update on the use state
	useEffect(() => {
		// console.log("SECTIONS IN ARRAYYYYYY");
		// sectionsInArray.forEach(element => {
		// 	console.log(element);
		// });
		calculateUserType();
		// chart();
	})

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
						sectionsInArray[0],
						sectionsInArray[1],
						sectionsInArray[2],
						sectionsInArray[3],
						sectionsInArray[4],
						sectionsInArray[5]
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

	function calculateUserType()
	{
		var totalScore = 0;

		sectionsInArray.forEach(element => {
			totalScore = totalScore + element;
		});

		if(totalScore < 72)
		{
			setUserType("Beginner");
		}
		else if(totalScore < 108)
		{
			setUserType("Elementary");
		}
		else if(totalScore < 144)
		{
			setUserType("Intermediate");
		}
		else if(totalScore < 180)
		{
			setUserType("Upper-Intermmediate");
		}
		else if(totalScore < 216)
		{
			setUserType("Advanced");
		}
		else
		{
			setUserType("Proficient");
		}
		
	}

	return(
		<div className="App">
        <div className='navbar'>
          <ul>
            <li><a class="active" href="#home">Digital Capability Tool</a></li>
            <li><a href="#news">Code</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#about">Privacy Policy</a></li>
          </ul>
        </div>

        <h1 class='firstHeader'>Digital Capabilities Survey</h1>
        <img className='uon-image' src={uonImage} alt="temporary-placeholder" />
  
        <hr></hr>
        <AssessmentInput
			changeSectionsInArray={sectionsInArray => setSectionsInArray(sectionsInArray)}
		/>
        
		{/*
		<hr></hr>

        <div className='chart-wrapper'>
          <h2>Results</h2>
          <h4>You are a <span className='user-type'>[user_type]</span> user.</h4>
          <Chart chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom"/>
        </div> */}

        {/* <hr></hr>

        <div>
			<h2>Compare current results to previous results</h2>
			<h3>Upload csv file</h3>
			<UploadCSV />
        </div> */}

		{/*
        <hr></hr>

        <div className='chart-wrapper'>
			<h2>RadarChart as a Hook component</h2>
			<h4>You are a <span className='user-type'>{userType}</span> user.</h4>
          	
			<RadarChart testBoi={"42"} myObj={{
				q1: sectionsInArray[0],
				q2: sectionsInArray[1],
				q3: sectionsInArray[2],
				q4: sectionsInArray[3],
				q5: sectionsInArray[4],
				q6: sectionsInArray[5]
			}} />
        </div> */}
      </div>
	)
};

function App() {
	return <Main />;
}

export default App;