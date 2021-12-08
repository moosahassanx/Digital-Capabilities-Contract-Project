// importing react libraries and bootstrap
import React from "react";
import { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

const ResourceLinks = (props) => {
    
    // use states
    const [trTags, setTrTags] = useState([]);

    // use effect
    useEffect(() => {
        displayQuestions();
    }, [])

    // function to start making rows of questions based on passed properties
    function displayQuestions()
    {
        let strings = [];
        for (var i = 0; i < props.surveyQuestions.length; i++) {

            // creating unique id for radio button based on question number
            var questionIndex = i+1;
            let radioName = 'Q' + props.questionNumber + '-' + questionIndex;
            
            // generate tr tag for table
            strings.push(
                <tr>
                    <td><p className='question'>{props.surveyQuestions[i]}</p></td>
                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name={radioName} value='Very poor'></input><div className='radio__radio'></div></label></td>
                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name={radioName} value='Poor'></input><div className='radio__radio'></div></label></td>
                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name={radioName} value='Needs work'></input><div className='radio__radio'></div></label></td>
                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name={radioName} value='Satisfactory'></input><div className='radio__radio'></div></label></td>
                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name={radioName} value='Good'></input><div className='radio__radio'></div></label></td>
                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name={radioName} value='Very good'></input><div className='radio__radio'></div></label></td>
                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name={radioName} value='Excellent'></input><div className='radio__radio'></div></label></td>
                </tr>
            );
        }

        // set the values to be generated later
        setTrTags(strings);
    }

    return(
        <Table responsive striped='true' size='sm' cellSpacing='0' className='survey-question-table'>
            
            {/* generate skeleton of the table with headers */}
            <thead className='scale-header'>
                <tr>
                    <th><p className='table-questions-header'></p></th>
                    <th className='border-bottom'><p className='table-header'>Very poor</p></th>
                    <th className='shaded'><p className='table-header'>Poor</p></th>
                    <th className='border-bottom'><p className='table-header'>Needs work</p></th>
                    <th className='shaded'><p className='table-header'>Satisfactory</p></th>
                    <th className='border-bottom'><p className='table-header'>Good</p></th>
                    <th className='shaded'><p className='table-header'>Very Good</p></th>
                    <th className='border-bottom'><p className='table-header'>Excellent</p></th>
                </tr>
            </thead>

            {/* generate radio buttons based on question number */}
            <tbody>
                {trTags}
            </tbody>
            <br></br>
        </Table>
        
    )
}

export default ResourceLinks;