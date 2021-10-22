import ProgressBar from 'react-bootstrap/ProgressBar'
import '../css/SurveyProgress.css'

const SurveyProgress = (props) => {

    // display HTML code dynamically
    return(
        <div className='wrapper'>
            <div className='left'>
                <ProgressBar animated now={props.inputPercentage} />
            </div>
            <div className='right'>
                <p>{props.inputPercentage}%</p>
            </div>
        </div>        
    )
}

export default SurveyProgress;