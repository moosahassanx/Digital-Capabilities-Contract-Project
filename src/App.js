import './App.css';
import uonImage from './img/uon-logo.png';
import AssessmentInput from './components/AssessmentInput';

function App() {
  return (
    <div className="App">
      <h1>Digital Capabilities Survey</h1>
      <h2>Author: Moosa Hassan</h2>
      <p>This web page was created with React and GitHub.</p>
      <img src={uonImage} alt="placeholder-image" />

      <AssessmentInput />
    </div>
  );
}

export default App;
