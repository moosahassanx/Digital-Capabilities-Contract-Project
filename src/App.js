// importing stylesheets, images, bootstrap and other components
import './App.css';
import uonImage from './img/uon-logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import AssessmentInput from './components/AssessmentInput';
import NavigationBar from './components/NavigationBar';
import TestComponent from './components/TestComponent';
import { useEffect, useState } from 'react';

// entry point to the program as a hook
const Main = () => {

  // use states
  const [welcomeMessageOpen, setWelcomeMessageOpen] = useState(true);

  function loadQuestions()
  {
    setWelcomeMessageOpen(false);
  }

	return(
		<div className="App">
      {/* display navigation bar */}
      <NavigationBar />

      {/* display main header */}
      <h1 class='firstHeader'>Digital Capabilities Survey</h1>
      <img className='uon-image' src={uonImage} alt="temporary-placeholder" />
      <hr></hr>

      {/* welcome message is only displayed at the start */}
      {
        welcomeMessageOpen === true ? (

          // welcome message
          <div className='welcome-wrapper'>
            <h1>Introduction</h1>
            <p>Using the Digital Capabilities Self-Assessment Tool is a quick and accurate way to measureyourself within each of the six digital capabilities in the framework. No data is collected in this web application.</p>
            <p>No data is collected in this web application.</p>
            <button className='button' id='load-questions' onClick={loadQuestions}>Begin</button>
          </div>
        ) : (

          // entry point to the actual survey
          <AssessmentInput />
        )
      }

    </div>
	)
};

// entry point to the program
function App() {
	return <Main />;
}

export default App;