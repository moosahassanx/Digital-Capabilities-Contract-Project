// library imports
import ProgressBar from 'react-bootstrap/ProgressBar';      // bootstrap
import '../css/SurveyProgress.css';                         // css
import { useState, useEffect } from 'react';                // react native

const SurveyProgress = (props) => {

    // use state
    const [linesFilled, setLinesFilled] = useState([]);
    const [linesUnFilled, setLinesUnFilled] = useState([]);

    // use effect
    useEffect(() => {
        displayFilled();
    }, [linesFilled])

    // function to display number of filled and unfilled
    function displayFilled()
    {
        // coloured bars
        let strings = [];
        for (var i = 0; i < props.page; i++) {
            strings.push(<td><ProgressBar animated now={100}/></td>);
        }
        setLinesFilled(strings);

        // uncoloured bars
        strings = [];
        for (var i = 6; i > props.page; i--) {
            strings.push(<td><ProgressBar animated now={0}/></td>);
        }
        setLinesUnFilled(strings);
    }

    // display HTML code dynamically
    return(
        <div className='wrapper'>
            <table className='progress-table'>
                <thead>
                    <tr>
                        {linesFilled}
                        {linesUnFilled}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><p>Page 1</p></td>
                        <td><p>Page 2</p></td>
                        <td><p>Page 3</p></td>
                        <td><p>Page 4</p></td>
                        <td><p>Page 5</p></td>
                        <td><p>Page 6</p></td>
                    </tr>
                </tbody>
            </table>
        </div>        
    )
}

export default SurveyProgress;