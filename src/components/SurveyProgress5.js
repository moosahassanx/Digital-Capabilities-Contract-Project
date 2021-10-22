import { render } from '@testing-library/react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import '../css/SurveyProgress.css';
import { useState, useEffect } from 'react';


const SurveyProgress = (props) => {

    function renderFullBars()
    {
        for (var i = 0; i < props.page; i++)
        {
            renderFullBars.push(<td><ProgressBar animated now={100} /></td>)
        }
    }

    // display HTML code dynamically
    return(
        <div className='wrapper'>
            <table className='progress-table'>
                <thead>
                    <tr>
                        {renderFullBars}
                        <td><ProgressBar animated now={100} /></td>
                        <td><ProgressBar animated now={100} /></td>
                        <td><ProgressBar animated now={100} /></td>
                        <td><ProgressBar animated now={100} /></td>
                        <td><ProgressBar animated now={100} /></td>
                        <td><ProgressBar animated now={0} /></td>
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