import './App.css';
import uonImage from './img/uon-logo.png';
import AssessmentInput from './components/AssessmentInput';

const Main = () => {

	return(
		<div className="App">
        <div className='navbar'>
          <ul>
            <li><a class="active" href="#home">Self Assessment Tool</a></li>
            <li><a href="#news">Code</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#about">Privacy Policy</a></li>
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