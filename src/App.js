// importing stylesheets, images, bootstrap and other components
import './App.css';
import uonImage from './img/uon-logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import AssessmentInput from './components/AssessmentInput';
import NavigationBar from './components/NavigationBar';
import TestComponent from './components/TestComponent';

// entry point to the program as a hook
const Main = () => {
	return(
		<div className="App">
      {/* display navigation bar */}
      <NavigationBar />

      {/* display main header */}
      <h1 class='firstHeader'>Digital Capabilities Survey</h1>
      <img className='uon-image' src={uonImage} alt="temporary-placeholder" />
      <hr></hr>

      {/* entry point to the actual survey */}
      <AssessmentInput />
    </div>
	)
};

// entry point to the program
function App() {
	return <Main />;
}

export default App;