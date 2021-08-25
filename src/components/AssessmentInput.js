import { useState } from 'react';
import React from 'react';

const AssessmentInput = () => {

    // const [state, function to update the state]
    const [page0, setPage0] = useState(true);
    const [page1, setPage1] = useState(false);
    const [page2, setPage2] = useState(false);
    
    const [question1, setQuestion1] = useState("null");
    const [question2, setQuestion2] = useState("null");

    function nextPageFrom0()
    {
        setQuestion1(document.getElementById("question1").value);

        setPage0(false);
        setPage1(true);
        setPage2(false);
    }

    function nextPageFrom1()
    {
        setQuestion2(document.getElementById("question2").value);

        setPage0(false);
        setPage1(false);
        setPage2(true);
    }

    function prevPage()
    {
        if(page0 === true)
        {
            setPage0(false);
            setPage1(false);
            setPage2(false);
        }

        if(page1 === true)
        {
            setPage0(true);
            setPage1(false);
            setPage2(false);
        }

        if(page2 === true)
        {
            setPage0(false);
            setPage1(true);
            setPage2(false);
        }
    }

    function calculate()
    {
        // algorithm for calculating user type
        var totalScore = parseInt(question1) + parseInt(question2);

        if(totalScore < 3)
        {
            alert("you are a basic user");
            return;
        }

        if(totalScore < 6)
        {
            alert("you are an independent user");
            return;
        }

        else
        {
            alert("you are a proficient user");
            return;
        }
    }

    return (
        <div className="input-form">
            {
                page0 === true ? (
                    <form>
                        <h2>PAGE 0 OF THE FORM</h2>
                        <label for='question1'>Input between 1-7:</label><br></br>
                        <input type='text' id='question1' name='question1'></input><br></br>
                        <button onClick={nextPageFrom0}>nextPage</button>
                    </form>
                ) : (
                    null
                )
            }

            {
                page1 === true ? (
                    <form>
                        <h2>PAGE 1 OF THE FORM</h2>
                        <label for='question2'>Input between 1-7:</label><br></br>
                        <input type='text' id='question2' name='question2'></input><br></br>
                        <button onClick={prevPage}>prevPage</button>
                        <button onClick={nextPageFrom1}>nextPage</button>
                    </form>
                ) : (
                    null
                )
            }

            {
                page2 === true ? (
                    <form>
                        <p>page2 is true</p>

                        <button onClick={prevPage}>prevPage</button>
                        <button onClick={calculate}>calculate</button>
                    </form>
                ) : (
                    null
                )
            }

        </div>
    )
}

export default AssessmentInput;