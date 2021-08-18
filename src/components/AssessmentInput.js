import { getElementError } from '@testing-library/react';
import React from 'react';

const AssessmentInput = () => {

    function  testFunction ()
    {
        alert("calling is working " + document.getElementById("response").value);
    }

    return (
        <div className="input-form">
            <form>
                <h2>This is an initialised React component</h2>
                <input id="response"></input>
                <button className='form-button' type='button' onClick={testFunction}>test</button>
            </form>
        </div>
    )
}

export default AssessmentInput;