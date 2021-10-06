import './App.css';
import uonImage from './img/uon-logo.png';
import AssessmentInput from './components/AssessmentInput';

const Main = () => {

	return(
		<div className="App">
        <div className='navbar'>
          <ul>
            <li><a class="active" href="#home">Self Assessment Tool</a></li>
            <li><a href="https://github.com/moosahassanx/digital-capabilities-survey/tree/main" target='blank'>GitHub Codebase</a></li>
            <li><a href="https://www.newcastle.edu.au/current-students/support/it/it-service-desk#:~:text=By%20phone,17000%20(internal%20call)" target='_blank'>Contact</a></li>
            <li><a href="https://www.newcastle.edu.au/our-uni" target='_blank'>About</a></li>
          </ul>
        </div>

        <h1 class='firstHeader'>Digital Capabilities Survey</h1>
        <img className='uon-image' src={uonImage} alt="temporary-placeholder" />
  
        <hr></hr>
        <AssessmentInput/>
      </div>
	)
};

function App() {
	return <Main />;
}

export default App;