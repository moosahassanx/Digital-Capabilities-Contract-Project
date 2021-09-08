import './App.css';
import uonImage from './img/uon-logo.png';
import AssessmentInput from './components/AssessmentInput';
import Chart from './components/Chart';
import React, { Component, useState, useEffect } from 'react';
import UploadCSV from './components/UploadCSV';
import RadarChart from './components/RadarChart';

const Main = () => {
	const [section1, setSection1] = useState(0);
    const [section2, setSection2] = useState(0);
    const [section3, setSection3] = useState(0);
    const [section4, setSection4] = useState(0);
    const [section5, setSection5] = useState(0);
    const [section6, setSection6] = useState(0);
	
	const [userType, setUserType] = useState("user_type");

	// retrieving from child
	const [sectionsInArray, setSectionsInArray] = useState([]);

	// this is the function which executes every time there is an update on the use state
	useEffect(() => {
		console.log("SECTIONS IN ARRAYYYYYY");
		sectionsInArray.forEach(element => {
			console.log(element);
		});

		calculateUserType();
	})

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

        <hr></hr>

        <div>
			<h2>Compare current results to previous results</h2>
			<h3>Upload csv file</h3>
			<UploadCSV />
        </div>

        <hr></hr>

        <div className='chart-wrapper'>
			<h2>RadarChart as a Hook component</h2>
			<h4>You are a <span className='user-type'>{userType}</span> user.</h4>
          	<RadarChart />
        </div>
      </div>
	)
};

function App() {
	return <Main />;
}

export default App;