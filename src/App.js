import './App.css';
import uonImage from './img/uon-logo.png';
import AssessmentInput from './components/AssessmentInput';
import Chart from './components/Chart';
import React, { Component } from 'react';
import UploadCSV from './components/UploadCSV';

class App extends Component {

  constructor(){
    super();
    this.state = {
      // current data - to be used when the user completes the survey
      chartData:{},

      // previous data - to be updates when the user uploads csv file as comparison
      previousChartData: {
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
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    // Ajax calls here
    this.setState({
      chartData:{
        labels: [
          'Proficiency and Productivity',
          'Digital Learning and Development',
          'Digital Creation, Problem Solving and Innocation',
          'Digital Communication, Collaboration and Participation',
          'Information Literacy, Data Literacy and Media Literacy',
          'Digital Identity and Wellbeing'
        ],
        datasets:[

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
          this.state.previousChartData
        ]
      }
    });
  }

  render()
  {
    return (
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
        <AssessmentInput />
        <hr></hr>

        <div className='chart-wrapper'>
          <h2>Results</h2>
          <h4>You are a <span className='user-type'>[user_type]</span> user.</h4>
          <Chart chartData={this.state.chartData} location="Massachusetts" legendPosition="bottom"/>
        </div>

        <hr></hr>

        <div>
          <h2>Compare current results to previous results</h2>
          <h3>Upload csv file</h3>
          <UploadCSV />
        </div>
      </div>
    );
  }
  
}

export default App;
