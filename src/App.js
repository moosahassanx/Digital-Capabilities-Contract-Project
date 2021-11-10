import './App.css';
import uonImage from './img/uon-logo.png';
import AssessmentInput from './components/AssessmentInput';
import NavigationBar from './components/NavigationBar';
import TestComponent from './components/TestComponent';

const Main = () => {
	return(
		<div className="App">
      <NavigationBar />

      <h1 class='firstHeader'>Digital Capabilities Survey</h1>
      <img className='uon-image' src={uonImage} alt="temporary-placeholder" />

      <hr></hr>
      <AssessmentInput />
    </div>
	)
};

function App() {
	return <Main />;
}

export default App;