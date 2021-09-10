import { useState, useEffect } from 'react';
import React from 'react';
import '../css/AssessmentInput.css'
import { Radar } from "react-chartjs-2";

const AssessmentInput = (props) => {

    // page controlling
    const [page0, setPage0] = useState(true);
    const [page1, setPage1] = useState(false);
    const [page2, setPage2] = useState(false);
    const [page3, setPage3] = useState(false);
    const [page4, setPage4] = useState(false);
    const [page5, setPage5] = useState(false);
    const [page6, setPage6] = useState(false);
    const [page7, setPage7] = useState(false);
    
    // data values for each section
    const [section1, setSection1] = useState(0);
    const [section2, setSection2] = useState(0);
    const [section3, setSection3] = useState(0);
    const [section4, setSection4] = useState(0);
    const [section5, setSection5] = useState(0);
    const [section6, setSection6] = useState(0);
    const [sectionsInArray, setSectionsInArray] = useState([]);
    const [userType, setUserType] = useState("user_type");

    // to control use-effect function at proper timing
    const [initiate, setInitiate] = useState(false);

    // chartData
    const [chartData, setChartData] = useState({});

    const chart = () => {
        setChartData({
            labels: [
                'Proficiency and Productivity',
                'Digital Learning and Development',
                'Digital Creation, Problem Solving and Innocation',
                'Digital Communication, Collaboration and Participation',
                'Information Literacy, Data Literacy and Media Literacy',
                'Digital Identity and Wellbeing'
            ],
            datasets: [
                // dataset 1
                {
                    label:'Current Score',
                    data:[
                        sectionsInArray[0],
                        sectionsInArray[1],
                        sectionsInArray[2],
                        sectionsInArray[3],
                        sectionsInArray[4],
                        sectionsInArray[5]
                    ],
                    backgroundColor: 'rgba(00, 255, 00, 0.1)',
                    borderColor: '#00FF00',
                    borderWidth: 2
                },

                // // dataset 2
                // {
                //     label:'Previous Score',
                //     data:[
                //       42,
                //       35,
                //       22,
                //       31,
                //       15,
                //       35
                //     ],
                //     backgroundColor: 'rgba(0, 255, 255, 0.1)',
                //     borderColor: '#00FFFF',
                //     borderWidth: 2
                // }
            ]
        })

        var totalScore = 0;

		sectionsInArray.forEach(element => {
			totalScore = totalScore + element;
		});

		if(totalScore < 72)
		{
			setUserType("Beginner");
		}
		else if(totalScore < 108)
		{
			setUserType("Elementary");
		}
		else if(totalScore < 144)
		{
			setUserType("Intermediate");
		}
		else if(totalScore < 180)
		{
			setUserType("Upper-Intermmediate");
		}
		else if(totalScore < 216)
		{
			setUserType("Advanced");
		}
		else
		{
			setUserType("Proficient");
		}
    }

    useEffect(() => {
        chart()
    }, [sectionsInArray])

    // page navigation
    function nextPageFrom0()
    {
        let responses = [];
        // getting radio values for every input
        var radio1 = document.getElementsByName('Q5-1');
        var radio2 = document.getElementsByName('Q5-2');
        var radio3 = document.getElementsByName('Q5-3');
        var radio4 = document.getElementsByName('Q5-4');
        var radio5 = document.getElementsByName('Q5-5');
        var radio6 = document.getElementsByName('Q5-6');

        for (var i = 0, length = radio1.length; i < length; i++)        // TODO: find a way to engineer this code
        {
            if (radio1[i].checked)
            {
              responses.push(radio1[i].value);
              break;
            }
        }

        for (var i = 0, length = radio2.length; i < length; i++)
        {
            if (radio2[i].checked)
            {
              responses.push(radio2[i].value);
              break;
            }
        }

        for (var i = 0, length = radio3.length; i < length; i++)
        {
            if (radio3[i].checked)
            {
              responses.push(radio3[i].value);
              break;
            }
        }

        for (var i = 0, length = radio4.length; i < length; i++)
        {
            if (radio4[i].checked)
            {
              responses.push(radio4[i].value);
              break;
            }
        }

        for (var i = 0, length = radio5.length; i < length; i++)
        {
            if (radio5[i].checked)
            {
              responses.push(radio5[i].value);
              break;
            }
        }

        for (var i = 0, length = radio6.length; i < length; i++)
        {
            if (radio6[i].checked)
            {
              responses.push(radio6[i].value);
              break;
            }
        }

        // string to value classification
        var sectionTotal = 0;
        responses.forEach(element => {
            switch(element) {
                case 'Very poor':
                    sectionTotal = sectionTotal + 1;
                    break;
                case 'Poor':
                    sectionTotal = sectionTotal + 2;
                    break;
                case 'Needs work':
                    sectionTotal = sectionTotal + 3;
                    break;
                case 'Satisfactory':
                    sectionTotal = sectionTotal + 4;
                    break;
                case 'Good':
                    sectionTotal = sectionTotal + 5;
                    break;
                case 'Very good':
                    sectionTotal = sectionTotal + 6;
                    break;
                case 'Excellent':
                    sectionTotal = sectionTotal + 7;
                    break;
                default:
                  //
              }
        });
        setSection1(sectionTotal);

        // page navigation
        setPage0(false);
        setPage1(true);
        setPage2(false);
        setPage3(false);
        setPage4(false);
        setPage5(false);
        setPage6(false);
        setPage6(false);
    }
    function nextPageFrom1()
    {
        let responses = [];
        // getting radio values for every input
        var radio1 = document.getElementsByName('Q6-1');
        var radio2 = document.getElementsByName('Q6-2');
        var radio3 = document.getElementsByName('Q6-3');
        var radio4 = document.getElementsByName('Q6-4');
        var radio5 = document.getElementsByName('Q6-5');
        var radio6 = document.getElementsByName('Q6-6');

        for (var i = 0, length = radio1.length; i < length; i++)        // TODO: find a way to engineer this code
        {
            if (radio1[i].checked)
            {
              responses.push(radio1[i].value);
              break;
            }
        }

        for (var i = 0, length = radio2.length; i < length; i++)
        {
            if (radio2[i].checked)
            {
              responses.push(radio2[i].value);
              break;
            }
        }

        for (var i = 0, length = radio3.length; i < length; i++)
        {
            if (radio3[i].checked)
            {
              responses.push(radio3[i].value);
              break;
            }
        }

        for (var i = 0, length = radio4.length; i < length; i++)
        {
            if (radio4[i].checked)
            {
              responses.push(radio4[i].value);
              break;
            }
        }

        for (var i = 0, length = radio5.length; i < length; i++)
        {
            if (radio5[i].checked)
            {
              responses.push(radio5[i].value);
              break;
            }
        }

        for (var i = 0, length = radio6.length; i < length; i++)
        {
            if (radio6[i].checked)
            {
              responses.push(radio6[i].value);
              break;
            }
        }

        // string to value classification
        var sectionTotal = 0;
        responses.forEach(element => {
            switch(element) {
                case 'Very poor':
                    sectionTotal = sectionTotal + 1;
                    break;
                case 'Poor':
                    sectionTotal = sectionTotal + 2;
                    break;
                case 'Needs work':
                    sectionTotal = sectionTotal + 3;
                    break;
                case 'Satisfactory':
                    sectionTotal = sectionTotal + 4;
                    break;
                case 'Good':
                    sectionTotal = sectionTotal + 5;
                    break;
                case 'Very good':
                    sectionTotal = sectionTotal + 6;
                    break;
                case 'Excellent':
                    sectionTotal = sectionTotal + 7;
                    break;
                default:
                  //
              }
        });
        setSection2(sectionTotal);

        // page navigation
        setPage0(false);
        setPage1(false);
        setPage2(true);
        setPage3(false);
        setPage4(false);
        setPage5(false);
        setPage6(false);
        setPage7(false);
    }
    function nextPageFrom2()
    {
        let responses = [];
        // getting radio values for every input
        var radio1 = document.getElementsByName('Q7-1');
        var radio2 = document.getElementsByName('Q7-2');
        var radio3 = document.getElementsByName('Q7-3');
        var radio4 = document.getElementsByName('Q7-4');
        var radio5 = document.getElementsByName('Q7-5');
        var radio6 = document.getElementsByName('Q7-6');

        for (var i = 0, length = radio1.length; i < length; i++)        // TODO: find a way to engineer this code
        {
            if (radio1[i].checked)
            {
              responses.push(radio1[i].value);
              break;
            }
        }

        for (var i = 0, length = radio2.length; i < length; i++)
        {
            if (radio2[i].checked)
            {
              responses.push(radio2[i].value);
              break;
            }
        }

        for (var i = 0, length = radio3.length; i < length; i++)
        {
            if (radio3[i].checked)
            {
              responses.push(radio3[i].value);
              break;
            }
        }

        for (var i = 0, length = radio4.length; i < length; i++)
        {
            if (radio4[i].checked)
            {
              responses.push(radio4[i].value);
              break;
            }
        }

        for (var i = 0, length = radio5.length; i < length; i++)
        {
            if (radio5[i].checked)
            {
              responses.push(radio5[i].value);
              break;
            }
        }

        for (var i = 0, length = radio6.length; i < length; i++)
        {
            if (radio6[i].checked)
            {
              responses.push(radio6[i].value);
              break;
            }
        }

        // string to value classification
        var sectionTotal = 0;
        responses.forEach(element => {
            switch(element) {
                case 'Very poor':
                    sectionTotal = sectionTotal + 1;
                    break;
                case 'Poor':
                    sectionTotal = sectionTotal + 2;
                    break;
                case 'Needs work':
                    sectionTotal = sectionTotal + 3;
                    break;
                case 'Satisfactory':
                    sectionTotal = sectionTotal + 4;
                    break;
                case 'Good':
                    sectionTotal = sectionTotal + 5;
                    break;
                case 'Very good':
                    sectionTotal = sectionTotal + 6;
                    break;
                case 'Excellent':
                    sectionTotal = sectionTotal + 7;
                    break;
                default:
                  //
              }
        });
        setSection3(sectionTotal);

        // page navigation
        setPage0(false);
        setPage1(false);
        setPage2(false);
        setPage3(true);
        setPage4(false);
        setPage5(false);
        setPage6(false);
        setPage7(false);
    }
    function nextPageFrom3()
    {
        let responses = [];
        // getting radio values for every input
        var radio1 = document.getElementsByName('Q8-1');
        var radio2 = document.getElementsByName('Q8-2');
        var radio3 = document.getElementsByName('Q8-3');
        var radio4 = document.getElementsByName('Q8-4');
        var radio5 = document.getElementsByName('Q8-5');
        var radio6 = document.getElementsByName('Q8-6');

        for (var i = 0, length = radio1.length; i < length; i++)        // TODO: find a way to engineer this code
        {
            if (radio1[i].checked)
            {
              responses.push(radio1[i].value);
              break;
            }
        }

        for (var i = 0, length = radio2.length; i < length; i++)
        {
            if (radio2[i].checked)
            {
              responses.push(radio2[i].value);
              break;
            }
        }

        for (var i = 0, length = radio3.length; i < length; i++)
        {
            if (radio3[i].checked)
            {
              responses.push(radio3[i].value);
              break;
            }
        }

        for (var i = 0, length = radio4.length; i < length; i++)
        {
            if (radio4[i].checked)
            {
              responses.push(radio4[i].value);
              break;
            }
        }

        for (var i = 0, length = radio5.length; i < length; i++)
        {
            if (radio5[i].checked)
            {
              responses.push(radio5[i].value);
              break;
            }
        }

        for (var i = 0, length = radio6.length; i < length; i++)
        {
            if (radio6[i].checked)
            {
              responses.push(radio6[i].value);
              break;
            }
        }

        // string to value classification
        var sectionTotal = 0;
        responses.forEach(element => {
            switch(element) {
                case 'Very poor':
                    sectionTotal = sectionTotal + 1;
                    break;
                case 'Poor':
                    sectionTotal = sectionTotal + 2;
                    break;
                case 'Needs work':
                    sectionTotal = sectionTotal + 3;
                    break;
                case 'Satisfactory':
                    sectionTotal = sectionTotal + 4;
                    break;
                case 'Good':
                    sectionTotal = sectionTotal + 5;
                    break;
                case 'Very good':
                    sectionTotal = sectionTotal + 6;
                    break;
                case 'Excellent':
                    sectionTotal = sectionTotal + 7;
                    break;
                default:
                  //
              }
        });
        setSection4(sectionTotal);

        // page navigation
        setPage0(false);
        setPage1(false);
        setPage2(false);
        setPage3(false);
        setPage4(true);
        setPage5(false);
        setPage6(false);
        setPage7(false);
    }
    function nextPageFrom4()
    {
        let responses = [];
        // getting radio values for every input
        var radio1 = document.getElementsByName('Q9-1');
        var radio2 = document.getElementsByName('Q9-2');
        var radio3 = document.getElementsByName('Q9-3');
        var radio4 = document.getElementsByName('Q9-4');
        var radio5 = document.getElementsByName('Q9-5');
        var radio6 = document.getElementsByName('Q9-6');

        for (var i = 0, length = radio1.length; i < length; i++)        // TODO: find a way to engineer this code
        {
            if (radio1[i].checked)
            {
              responses.push(radio1[i].value);
              break;
            }
        }

        for (var i = 0, length = radio2.length; i < length; i++)
        {
            if (radio2[i].checked)
            {
              responses.push(radio2[i].value);
              break;
            }
        }

        for (var i = 0, length = radio3.length; i < length; i++)
        {
            if (radio3[i].checked)
            {
              responses.push(radio3[i].value);
              break;
            }
        }

        for (var i = 0, length = radio4.length; i < length; i++)
        {
            if (radio4[i].checked)
            {
              responses.push(radio4[i].value);
              break;
            }
        }

        for (var i = 0, length = radio5.length; i < length; i++)
        {
            if (radio5[i].checked)
            {
              responses.push(radio5[i].value);
              break;
            }
        }

        for (var i = 0, length = radio6.length; i < length; i++)
        {
            if (radio6[i].checked)
            {
              responses.push(radio6[i].value);
              break;
            }
        }

        // string to value classification
        var sectionTotal = 0;
        responses.forEach(element => {
            switch(element) {
                case 'Very poor':
                    sectionTotal = sectionTotal + 1;
                    break;
                case 'Poor':
                    sectionTotal = sectionTotal + 2;
                    break;
                case 'Needs work':
                    sectionTotal = sectionTotal + 3;
                    break;
                case 'Satisfactory':
                    sectionTotal = sectionTotal + 4;
                    break;
                case 'Good':
                    sectionTotal = sectionTotal + 5;
                    break;
                case 'Very good':
                    sectionTotal = sectionTotal + 6;
                    break;
                case 'Excellent':
                    sectionTotal = sectionTotal + 7;
                    break;
                default:
                  //
              }
        });
        setSection5(sectionTotal);

        // page navigation
        setPage0(false);
        setPage1(false);
        setPage2(false);
        setPage3(false);
        setPage4(false);
        setPage5(true);
        setPage6(false);
        setPage7(false);
    }
    function nextPageFrom5()
    {
        let responses = [];
        // getting radio values for every input
        var radio1 = document.getElementsByName('Q10-1');
        var radio2 = document.getElementsByName('Q10-2');
        var radio3 = document.getElementsByName('Q10-3');
        var radio4 = document.getElementsByName('Q10-4');
        var radio5 = document.getElementsByName('Q10-5');
        var radio6 = document.getElementsByName('Q10-6');

        for (var i = 0, length = radio1.length; i < length; i++)        // TODO: find a way to engineer this code
        {
            if (radio1[i].checked)
            {
              responses.push(radio1[i].value);
              break;
            }
        }

        for (var i = 0, length = radio2.length; i < length; i++)
        {
            if (radio2[i].checked)
            {
              responses.push(radio2[i].value);
              break;
            }
        }

        for (var i = 0, length = radio3.length; i < length; i++)
        {
            if (radio3[i].checked)
            {
              responses.push(radio3[i].value);
              break;
            }
        }

        for (var i = 0, length = radio4.length; i < length; i++)
        {
            if (radio4[i].checked)
            {
              responses.push(radio4[i].value);
              break;
            }
        }

        for (var i = 0, length = radio5.length; i < length; i++)
        {
            if (radio5[i].checked)
            {
              responses.push(radio5[i].value);
              break;
            }
        }

        for (var i = 0, length = radio6.length; i < length; i++)
        {
            if (radio6[i].checked)
            {
              responses.push(radio6[i].value);
              break;
            }
        }

        // string to value classification
        var sectionTotal = 0;
        responses.forEach(element => {
            switch(element) {
                case 'Very poor':
                    sectionTotal = sectionTotal + 1;
                    break;
                case 'Poor':
                    sectionTotal = sectionTotal + 2;
                    break;
                case 'Needs work':
                    sectionTotal = sectionTotal + 3;
                    break;
                case 'Satisfactory':
                    sectionTotal = sectionTotal + 4;
                    break;
                case 'Good':
                    sectionTotal = sectionTotal + 5;
                    break;
                case 'Very good':
                    sectionTotal = sectionTotal + 6;
                    break;
                case 'Excellent':
                    sectionTotal = sectionTotal + 7;
                    break;
                default:
                  //
              }
        });
        setSection6(sectionTotal);
        
        // page navigation
        setPage0(false);
        setPage1(false);
        setPage2(false);
        setPage3(false);
        setPage4(false);
        setPage5(false);
        setPage6(true);
        setPage7(false);
    }
    

    function prevPage()
    {
        if(page1 === true)
        {
            setPage0(true);
            setPage1(false);
            setPage2(false);
            setPage3(false);
            setPage4(false);
            setPage5(false);
            setPage6(false);
        }
        if(page2 === true)
        {
            setPage0(false);
            setPage1(true);
            setPage2(false);
            setPage3(false);
            setPage4(false);
            setPage5(false);
            setPage6(false);
        }
        if(page3 === true)
        {
            setPage0(false);
            setPage1(false);
            setPage2(true);
            setPage3(false);
            setPage4(false);
            setPage5(false);
            setPage6(false);
        }
        if(page4 === true)
        {
            setPage0(false);
            setPage1(false);
            setPage2(false);
            setPage3(true);
            setPage4(false);
            setPage5(false);
            setPage6(false);
        }
        if(page5 === true)
        {
            setPage0(false);
            setPage1(false);
            setPage2(false);
            setPage3(false);
            setPage4(true);
            setPage5(false);
            setPage6(false);
        }
        if(page6 === true)
        {
            setPage0(false);
            setPage1(false);
            setPage2(false);
            setPage3(false);
            setPage4(false);
            setPage5(true);
            setPage6(false);
        }
    }

    function calculate()
    {
        // algorithm for calculating user type
        var totalScore = section1 + section2 + section3 + section4 + section5 + section6;

        let arrayInput = [];
        arrayInput.push(section1);
        arrayInput.push(section2);
        arrayInput.push(section3);
        arrayInput.push(section4);
        arrayInput.push(section5);
        arrayInput.push(section6);
        setSectionsInArray(arrayInput);

        props.changeSectionsInArray(arrayInput);

        setPage0(false);
        setPage1(false);
        setPage2(false);
        setPage3(false);
        setPage4(false);
        setPage5(false);
        setPage6(false);
        setPage7(true);
    }

    return (
        <div className="input-form">
            {
                page0 === true ? (
                    <form className='form-wrapper'>
                        <div className='survey-section'>
                            <h2>Information Communication Technology (ICT) Proficiency and Productivity</h2>
                        </div>

                        <div className='entry-heading'>
                            <h3>I am able to</h3>
                        </div>

                        <div className='question'>
                            <p>Choose the appropriate digital tools or devices which assist me in reaching my learning goals</p>
                        </div>
                        <div className='answer'>
                            <input type='radio' name='Q5-1' value='Very poor'></input>
                            <input type='radio' name='Q5-1' value='Poor'></input>
                            <input type='radio' name='Q5-1' value='Needs work'></input>
                            <input type='radio' name='Q5-1' value='Satisfactory'></input>
                            <input type='radio' name='Q5-1' value='Good'></input>
                            <input type='radio' name='Q5-1' value='Very good'></input>
                            <input type='radio' name='Q5-1' value='Excellent'></input>
                        </div>

                        <div className='question'>
                            <p>Use digital communication services, tools, and mobile apps (such as email and social networking applications) to communicate with others</p>
                        </div>
                        <div className='answer'>
                            <input type='radio' name='Q5-2' value='Very poor'></input>
                            <input type='radio' name='Q5-2' value='Poor'></input>
                            <input type='radio' name='Q5-2' value='Needs work'></input>
                            <input type='radio' name='Q5-2' value='Satisfactory'></input>
                            <input type='radio' name='Q5-2' value='Good'></input>
                            <input type='radio' name='Q5-2' value='Very good'></input>
                            <input type='radio' name='Q5-2' value='Excellent'></input>
                        </div>
                    
                        <div className='question'>
                            <p>Use software and tools (such as Office 365 and Adobe) to organise, edit, manage, and back up digital documents and files.</p>
                        </div>
                        <div className='answer'>
                            <input type='radio' name='Q5-3' value='Very poor'></input>
                            <input type='radio' name='Q5-3' value='Poor'></input>
                            <input type='radio' name='Q5-3' value='Needs work'></input>
                            <input type='radio' name='Q5-3' value='Satisfactory'></input>
                            <input type='radio' name='Q5-3' value='Good'></input>
                            <input type='radio' name='Q5-3' value='Very good'></input>
                            <input type='radio' name='Q5-3' value='Excellent'></input>
                        </div>


                        <div className='question'>
                            <p>Use internet browsers to find the required documents or data</p>
                        </div>
                        <div className='answer'>
                            <input type='radio' name='Q5-4' value='Very poor'></input>
                            <input type='radio' name='Q5-4' value='Poor'></input>
                            <input type='radio' name='Q5-4' value='Needs work'></input>
                            <input type='radio' name='Q5-4' value='Satisfactory'></input>
                            <input type='radio' name='Q5-4' value='Good'></input>
                            <input type='radio' name='Q5-4' value='Very good'></input>
                            <input type='radio' name='Q5-4' value='Excellent'></input>
                        </div>

                        <div className='question'>
                            <p>Perform troubleshooting (i.e., problem-solving) on my computer and digital devices</p>
                        </div>
                        <div className='answer'>
                            <input type='radio' name='Q5-5' value='Very poor'></input>
                            <input type='radio' name='Q5-5' value='Poor'></input>
                            <input type='radio' name='Q5-5' value='Needs work'></input>
                            <input type='radio' name='Q5-5' value='Satisfactory'></input>
                            <input type='radio' name='Q5-5' value='Good'></input>
                            <input type='radio' name='Q5-5' value='Very good'></input>
                            <input type='radio' name='Q5-5' value='Excellent'></input>
                        </div>

                        <div className='question'>
                            <p>Code applications or programs</p>
                        </div>
                        <div className='answer'>
                            <input type='radio' name='Q5-6' value='Very poor'></input>
                            <input type='radio' name='Q5-6' value='Poor'></input>
                            <input type='radio' name='Q5-6' value='Needs work'></input>
                            <input type='radio' name='Q5-6' value='Satisfactory'></input>
                            <input type='radio' name='Q5-6' value='Good'></input>
                            <input type='radio' name='Q5-6' value='Very good'></input>
                            <input type='radio' name='Q5-6' value='Excellent'></input>
                        </div>
                        <br></br>

                        <button onClick={nextPageFrom0}>nextPage</button>
                    </form>
                ) : (
                    null
                )
            }

            {
                page1 === true ? (
                    <form className='form-wrapper'>
                        <div className='survey-section'>
                            <h2>Digital Learning and Development</h2>
                        </div>
                        
                        <div className='entry-heading'>
                            <h3>I am able to</h3>
                        </div>

                        <div className='question'>
                            <p>Use digital technologies (such as digital calendars/planners) to schedule or plan my study</p>
                        </div>
                        <div className='answer'>
                            <input type='radio' name='Q6-1' value='Very poor'></input>
                            <input type='radio' name='Q6-1' value='Poor'></input>
                            <input type='radio' name='Q6-1' value='Needs work'></input>
                            <input type='radio' name='Q6-1' value='Satisfactory'></input>
                            <input type='radio' name='Q6-1' value='Good'></input>
                            <input type='radio' name='Q6-1' value='Very good'></input>
                            <input type='radio' name='Q6-1' value='Excellent'></input>
                        </div>
                        
                        <div className='question'>
                            <p>Use digital technologies (such as Zoom, Microsoft Teams, BlackBoard or Padlet) to share information with instructors and other students.</p>
                        </div>
                        <div className='answer'>
                            <input type='radio' name='Q6-2' value='Very poor'></input>
                            <input type='radio' name='Q6-2' value='Poor'></input>
                            <input type='radio' name='Q6-2' value='Needs work'></input>
                            <input type='radio' name='Q6-2' value='Satisfactory'></input>
                            <input type='radio' name='Q6-2' value='Good'></input>
                            <input type='radio' name='Q6-2' value='Very good'></input>
                            <input type='radio' name='Q6-2' value='Excellent'></input>
                        </div>

                        <div className='question'>
                            <p>Use digital tools to record learning events (e.g., lectures, tutorials, webinars) or information for later review</p>
                        </div>
                        <div className='answer'>
                            <input type='radio' name='Q6-3' value='Very poor'></input>
                            <input type='radio' name='Q6-3' value='Poor'></input>
                            <input type='radio' name='Q6-3' value='Needs work'></input>
                            <input type='radio' name='Q6-3' value='Satisfactory'></input>
                            <input type='radio' name='Q6-3' value='Good'></input>
                            <input type='radio' name='Q6-3' value='Very good'></input>
                            <input type='radio' name='Q6-3' value='Excellent'></input>
                        </div>

                        <div className='question'>
                            <p>Sign onto and use the University’s supported platforms (such as BlackBoard, MyUON, the Library databases) to find the required document or data.</p>
                        </div>
                        <div className='answer'>
                            <input type='radio' name='Q6-4' value='Very poor'></input>
                            <input type='radio' name='Q6-4' value='Poor'></input>
                            <input type='radio' name='Q6-4' value='Needs work'></input>
                            <input type='radio' name='Q6-4' value='Satisfactory'></input>
                            <input type='radio' name='Q6-4' value='Good'></input>
                            <input type='radio' name='Q6-4' value='Very good'></input>
                            <input type='radio' name='Q6-4' value='Excellent'></input>
                        </div>

                        <div className='question'>
                            <p>Identify and participate in learning opportunities and courses available in a digital environment (such as YouTube, FutureLearn, and edX online courses).</p>
                        </div>
                        <div className='answer'>
                            <input type='radio' name='Q6-5' value='Very poor'></input>
                            <input type='radio' name='Q6-5' value='Poor'></input>
                            <input type='radio' name='Q6-5' value='Needs work'></input>
                            <input type='radio' name='Q6-5' value='Satisfactory'></input>
                            <input type='radio' name='Q6-5' value='Good'></input>
                            <input type='radio' name='Q6-5' value='Very good'></input>
                            <input type='radio' name='Q6-5' value='Excellent'></input>
                        </div>

                        <div className='question'>
                            <p>Analyse my digital strengths and weaknesses and reflect on my personal learning</p>
                        </div>
                        <div className='answer'>
                            <input type='radio' name='Q6-6' value='Very poor'></input>
                            <input type='radio' name='Q6-6' value='Poor'></input>
                            <input type='radio' name='Q6-6' value='Needs work'></input>
                            <input type='radio' name='Q6-6' value='Satisfactory'></input>
                            <input type='radio' name='Q6-6' value='Good'></input>
                            <input type='radio' name='Q6-6' value='Very good'></input>
                            <input type='radio' name='Q6-6' value='Excellent'></input>
                        </div>
                        <br></br>
                        
                        <button onClick={prevPage}>prevPage</button>
                        <button onClick={nextPageFrom1}>nextPage</button>
                    </form>
                ) : (
                    null
                )
            }

            {
                page2 === true ? (
                    <form className='form-wrapper'>
                        <div className='survey-section'>
                            <h2>Digital Creation, Problem Solving and Innovation</h2>
                        </div>
                        <div className='entry-heading'>
                            <h3>I am able to</h3>
                        </div>                        

                        <div className='question'>
                            <p>Use digital tools to edit an image and create a video</p>
                        </div>
                        <div className='answer'>
                            <input type='radio' name='Q7-1' value='Very poor'></input>
                            <input type='radio' name='Q7-1' value='Poor'></input>
                            <input type='radio' name='Q7-1' value='Needs work'></input>
                            <input type='radio' name='Q7-1' value='Satisfactory'></input>
                            <input type='radio' name='Q7-1' value='Good'></input>
                            <input type='radio' name='Q7-1' value='Very good'></input>
                            <input type='radio' name='Q7-1' value='Excellent'></input>
                        </div>

                        <div className='question'>
                            <p>Sesign and administer online surveys (such as SurveyMonkey, Qualtrics, and Google Docs) to gather qualitative and quantitative data.</p>
                        </div>
                        <div className='answer'>
                            <input type='radio' name='Q7-2' value='Very poor'></input>
                            <input type='radio' name='Q7-2' value='Poor'></input>
                            <input type='radio' name='Q7-2' value='Needs work'></input>
                            <input type='radio' name='Q7-2' value='Satisfactory'></input>
                            <input type='radio' name='Q7-2' value='Good'></input>
                            <input type='radio' name='Q7-2' value='Very good'></input>
                            <input type='radio' name='Q7-2' value='Excellent'></input>
                        </div>

                        <div className='question'>
                            <p>Analyse data using qualitative or quantitative software and digital tools</p>
                        </div>
                        <div className='answer'>
                            <input type='radio' name='Q7-3' value='Very poor'></input>
                            <input type='radio' name='Q7-3' value='Poor'></input>
                            <input type='radio' name='Q7-3' value='Needs work'></input>
                            <input type='radio' name='Q7-3' value='Satisfactory'></input>
                            <input type='radio' name='Q7-3' value='Good'></input>
                            <input type='radio' name='Q7-3' value='Very good'></input>
                            <input type='radio' name='Q7-3' value='Excellent'></input>
                        </div>

                        <div className='question'>
                            <p>Evaluate a problem by gathering appropriate information using digital tools</p>
                        </div>
                        <div className='answer'>
                            <input type='radio' name='Q7-4' value='Very poor'></input>
                            <input type='radio' name='Q7-4' value='Poor'></input>
                            <input type='radio' name='Q7-4' value='Needs work'></input>
                            <input type='radio' name='Q7-4' value='Satisfactory'></input>
                            <input type='radio' name='Q7-4' value='Good'></input>
                            <input type='radio' name='Q7-4' value='Very good'></input>
                            <input type='radio' name='Q7-4' value='Excellent'></input>
                        </div>

                        <div className='question'>
                            <p>Generate a new written and/or visual digital product by comparing and synthesising information that was found elsewhere</p>
                        </div>
                        <div className='answer'>
                            <input type='radio' name='Q7-5' value='Very poor'></input>
                            <input type='radio' name='Q7-5' value='Poor'></input>
                            <input type='radio' name='Q7-5' value='Needs work'></input>
                            <input type='radio' name='Q7-5' value='Satisfactory'></input>
                            <input type='radio' name='Q7-5' value='Good'></input>
                            <input type='radio' name='Q7-5' value='Very good'></input>
                            <input type='radio' name='Q7-5' value='Excellent'></input>
                        </div>

                        <div className='question'>
                            <p>Adapt and integrate a new technology into my learning environment</p>
                        </div>
                        <div className='answer'>
                            <input type='radio' name='Q7-6' value='Very poor'></input>
                            <input type='radio' name='Q7-6' value='Poor'></input>
                            <input type='radio' name='Q7-6' value='Needs work'></input>
                            <input type='radio' name='Q7-6' value='Satisfactory'></input>
                            <input type='radio' name='Q7-6' value='Good'></input>
                            <input type='radio' name='Q7-6' value='Very good'></input>
                            <input type='radio' name='Q7-6' value='Excellent'></input>
                        </div>
                        <br></br>

                        <button onClick={prevPage}>prevPage</button>
                        <button onClick={nextPageFrom2}>nextPage</button>
                    </form>
                ) : (
                    null
                )
            }

            {
                page3 === true ? (
                    <form className='form-wrapper'>
                        <div className='survey-section'>
                            <h2>Digital Communication, Collaboration and Participation</h2>
                        </div>
                        <div className='entry-heading'>
                            <h3>I am able to</h3>
                        </div>

                        <div className='question'>
                            <p>Interact online with people from diverse communities and respect multiple perspectives</p>
                        </div>
                        <div className='answer'>
                            <input type='radio' name='Q8-1' value='Very poor'></input>
                            <input type='radio' name='Q8-1' value='Poor'></input>
                            <input type='radio' name='Q8-1' value='Needs work'></input>
                            <input type='radio' name='Q8-1' value='Satisfactory'></input>
                            <input type='radio' name='Q8-1' value='Good'></input>
                            <input type='radio' name='Q8-1' value='Very good'></input>
                            <input type='radio' name='Q8-1' value='Excellent'></input>
                        </div>

                        <div className='question'>
                            <p>Work remotely with colleagues/students/classmates using online collaborative tools</p>
                        </div>
                        <div className='answer'>
                            <input type='radio' name='Q8-2' value='Very poor'></input>
                            <input type='radio' name='Q8-2' value='Poor'></input>
                            <input type='radio' name='Q8-2' value='Needs work'></input>
                            <input type='radio' name='Q8-2' value='Satisfactory'></input>
                            <input type='radio' name='Q8-2' value='Good'></input>
                            <input type='radio' name='Q8-2' value='Very good'></input>
                            <input type='radio' name='Q8-2' value='Excellent'></input>
                        </div>

                        <div className='question'>
                            <p>Use technology to ask a question or deliver a message in a socially acceptable way (i.e., netiquette rules)</p>
                        </div>
                        <div className='answer'>
                            <input type='radio' name='Q8-3' value='Very poor'></input>
                            <input type='radio' name='Q8-3' value='Poor'></input>
                            <input type='radio' name='Q8-3' value='Needs work'></input>
                            <input type='radio' name='Q8-3' value='Satisfactory'></input>
                            <input type='radio' name='Q8-3' value='Good'></input>
                            <input type='radio' name='Q8-3' value='Very good'></input>
                            <input type='radio' name='Q8-3' value='Excellent'></input>
                        </div>

                        <div className='question'>
                            <p>Contribute to comments in online discussions (online forum, blog or wiki) on social issues encountered in everyday life.</p>
                        </div>
                        <div className='answer'>
                            <input type='radio' name='Q8-4' value='Very poor'></input>
                            <input type='radio' name='Q8-4' value='Poor'></input>
                            <input type='radio' name='Q8-4' value='Needs work'></input>
                            <input type='radio' name='Q8-4' value='Satisfactory'></input>
                            <input type='radio' name='Q8-4' value='Good'></input>
                            <input type='radio' name='Q8-4' value='Very good'></input>
                            <input type='radio' name='Q8-4' value='Excellent'></input>
                        </div>

                        <div className='question'>
                            <p>Find relevant communities and groups online that suit my interests and needs</p>
                        </div>
                        <div className='answer'>
                            <input type='radio' name='Q8-5' value='Very poor'></input>
                            <input type='radio' name='Q8-5' value='Poor'></input>
                            <input type='radio' name='Q8-5' value='Needs work'></input>
                            <input type='radio' name='Q8-5' value='Satisfactory'></input>
                            <input type='radio' name='Q8-5' value='Good'></input>
                            <input type='radio' name='Q8-5' value='Very good'></input>
                            <input type='radio' name='Q8-5' value='Excellent'></input>
                        </div>

                        <div className='question'>
                            <p>Share content and information using social networks (such as Facebook) and collaborative platforms (such as OneDrive, Google Drive, Dropbox, etc.)</p>
                        </div>
                        <div className='answer'>
                            <input type='radio' name='Q8-6' value='Very poor'></input>
                            <input type='radio' name='Q8-6' value='Poor'></input>
                            <input type='radio' name='Q8-6' value='Needs work'></input>
                            <input type='radio' name='Q8-6' value='Satisfactory'></input>
                            <input type='radio' name='Q8-6' value='Good'></input>
                            <input type='radio' name='Q8-6' value='Very good'></input>
                            <input type='radio' name='Q8-6' value='Excellent'></input>
                        </div>
                        <br></br>

                        <button onClick={prevPage}>prevPage</button>
                        <button onClick={nextPageFrom3}>nextPage</button>
                    </form>
                ) : (
                    null
                )
            }

            {
                page4 === true ? (
                    <form className='form-wrapper'>
                        <div className='survey-section'>
                            <h2>Information Literacy, Data Literacy, and Media Literacy</h2>
                        </div>
                        <div className='entry-heading'>
                            <h3>I am able to</h3>
                        </div>

                        <div className='question'>
                            <p>Receive and respond to messages in a range of digital media (such as text, graphics, video, animation, audio and multimedia)</p>
                        </div>
                        <div className='answer'>
                            <input type='radio' name='Q9-1' value='Very poor'></input>
                            <input type='radio' name='Q9-1' value='Poor'></input>
                            <input type='radio' name='Q9-1' value='Needs work'></input>
                            <input type='radio' name='Q9-1' value='Satisfactory'></input>
                            <input type='radio' name='Q9-1' value='Good'></input>
                            <input type='radio' name='Q9-1' value='Very good'></input>
                            <input type='radio' name='Q9-1' value='Excellent'></input>
                        </div>

                        <div className='question'>
                            <p>Use database applications to enter and retrieve information required for my studies</p>
                        </div>
                        <div className='answer'>
                            <input type='radio' name='Q9-2' value='Very poor'></input>
                            <input type='radio' name='Q9-2' value='Poor'></input>
                            <input type='radio' name='Q9-2' value='Needs work'></input>
                            <input type='radio' name='Q9-2' value='Satisfactory'></input>
                            <input type='radio' name='Q9-2' value='Good'></input>
                            <input type='radio' name='Q9-2' value='Very good'></input>
                            <input type='radio' name='Q9-2' value='Excellent'></input>
                        </div>

                        <div className='question'>
                            <p>Use the filtering and advanced search options in online databases (such as Google Scholar)</p>
                        </div>
                        <div className='answer'>
                            <input type='radio' name='Q9-3' value='Very poor'></input>
                            <input type='radio' name='Q9-3' value='Poor'></input>
                            <input type='radio' name='Q9-3' value='Needs work'></input>
                            <input type='radio' name='Q9-3' value='Satisfactory'></input>
                            <input type='radio' name='Q9-3' value='Good'></input>
                            <input type='radio' name='Q9-3' value='Very good'></input>
                            <input type='radio' name='Q9-3' value='Excellent'></input>
                        </div>

                        <div className='question'>
                            <p>Assess the truthfulness of information before sharing it on social media or with other students</p>
                        </div>
                        <div className='answer'>
                            <input type='radio' name='Q9-4' value='Very poor'></input>
                            <input type='radio' name='Q9-4' value='Poor'></input>
                            <input type='radio' name='Q9-4' value='Needs work'></input>
                            <input type='radio' name='Q9-4' value='Satisfactory'></input>
                            <input type='radio' name='Q9-4' value='Good'></input>
                            <input type='radio' name='Q9-4' value='Very good'></input>
                            <input type='radio' name='Q9-4' value='Excellent'></input>
                        </div>

                        <div className='question'>
                            <p>Follow the rules of copyright and give credit for others’ work through proper referencing</p>
                        </div>
                        <div className='answer'>
                            <input type='radio' name='Q9-5' value='Very poor'></input>
                            <input type='radio' name='Q9-5' value='Poor'></input>
                            <input type='radio' name='Q9-5' value='Needs work'></input>
                            <input type='radio' name='Q9-5' value='Satisfactory'></input>
                            <input type='radio' name='Q9-5' value='Good'></input>
                            <input type='radio' name='Q9-5' value='Very good'></input>
                            <input type='radio' name='Q9-5' value='Excellent'></input>
                        </div>

                        <div className='question'>
                            <p>Distinguish the differences between primary and secondary sources</p>
                        </div>
                        <div className='answer'>
                            <input type='radio' name='Q9-6' value='Very poor'></input>
                            <input type='radio' name='Q9-6' value='Poor'></input>
                            <input type='radio' name='Q9-6' value='Needs work'></input>
                            <input type='radio' name='Q9-6' value='Satisfactory'></input>
                            <input type='radio' name='Q9-6' value='Good'></input>
                            <input type='radio' name='Q9-6' value='Very good'></input>
                            <input type='radio' name='Q9-6' value='Excellent'></input>
                        </div>  
                        <br></br>

                        <button onClick={prevPage}>prevPage</button>
                        <button onClick={nextPageFrom4}>nextPage</button>
                    </form>
                ) : (
                    null
                )
            }

            {
                page5 === true ? (
                    <form className='form-wrapper'>
                        <div className='survey-section'>
                            <h2>Digital Identity and Wellbeing</h2>
                        </div>
                        <div className='entry-heading'>
                            <h3>I am able to</h3>
                        </div>

                        <div className='question'>
                            <p>Evaluate content of emails/messages/calls for spam and scam content</p>
                        </div>
                        <div className='answer'>
                            <input type='radio' name='Q10-1' value='Very poor'></input>
                            <input type='radio' name='Q10-1' value='Poor'></input>
                            <input type='radio' name='Q10-1' value='Needs work'></input>
                            <input type='radio' name='Q10-1' value='Satisfactory'></input>
                            <input type='radio' name='Q10-1' value='Good'></input>
                            <input type='radio' name='Q10-1' value='Very good'></input>
                            <input type='radio' name='Q10-1' value='Excellent'></input>
                        </div>

                        <div className='question'>
                            <p>Protect my personal data in online and offline environments</p>
                        </div>
                        <div className='answer'>
                            <input type='radio' name='Q10-2' value='Very poor'></input>
                            <input type='radio' name='Q10-2' value='Poor'></input>
                            <input type='radio' name='Q10-2' value='Needs work'></input>
                            <input type='radio' name='Q10-2' value='Satisfactory'></input>
                            <input type='radio' name='Q10-2' value='Good'></input>
                            <input type='radio' name='Q10-2' value='Very good'></input>
                            <input type='radio' name='Q10-2' value='Excellent'></input>
                        </div>

                        <div className='question'>
                            <p>Act positively against others’ damaging online behaviours (e.g., reporting or rejecting cyberbullying)</p>
                        </div>
                        <div className='answer'>
                            <input type='radio' name='Q10-3' value='Very poor'></input>
                            <input type='radio' name='Q10-3' value='Poor'></input>
                            <input type='radio' name='Q10-3' value='Needs work'></input>
                            <input type='radio' name='Q10-3' value='Satisfactory'></input>
                            <input type='radio' name='Q10-3' value='Good'></input>
                            <input type='radio' name='Q10-3' value='Very good'></input>
                            <input type='radio' name='Q10-3' value='Excellent'></input>
                        </div>

                        <div className='question'>
                            <p>Be considerate of others' privacy when taking video or pictures</p>
                        </div>
                        <div className='answer'>
                            <input type='radio' name='Q10-4' value='Very poor'></input>
                            <input type='radio' name='Q10-4' value='Poor'></input>
                            <input type='radio' name='Q10-4' value='Needs work'></input>
                            <input type='radio' name='Q10-4' value='Satisfactory'></input>
                            <input type='radio' name='Q10-4' value='Good'></input>
                            <input type='radio' name='Q10-4' value='Very good'></input>
                            <input type='radio' name='Q10-4' value='Excellent'></input>
                        </div>

                        <div className='question'>
                            <p>Adjust the privacy settings of my digital devices and tools</p>
                        </div>
                        <div className='answer'>
                            <input type='radio' name='Q10-5' value='Very poor'></input>
                            <input type='radio' name='Q10-5' value='Poor'></input>
                            <input type='radio' name='Q10-5' value='Needs work'></input>
                            <input type='radio' name='Q10-5' value='Satisfactory'></input>
                            <input type='radio' name='Q10-5' value='Good'></input>
                            <input type='radio' name='Q10-5' value='Very good'></input>
                            <input type='radio' name='Q10-5' value='Excellent'></input>
                        </div>

                        <div className='question'>
                            <p>Protect my mental, physical, and emotional health when using digital technologies or tools</p>
                        </div>
                        <div className='answer'>
                            <input type='radio' name='Q10-6' value='Very poor'></input>
                            <input type='radio' name='Q10-6' value='Poor'></input>
                            <input type='radio' name='Q10-6' value='Needs work'></input>
                            <input type='radio' name='Q10-6' value='Satisfactory'></input>
                            <input type='radio' name='Q10-6' value='Good'></input>
                            <input type='radio' name='Q10-6' value='Very good'></input>
                            <input type='radio' name='Q10-6' value='Excellent'></input>
                        </div>                        
                        <br></br>

                        <button onClick={prevPage}>prevPage</button>
                        <button onClick={nextPageFrom5}>nextPage</button>
                    </form>
                ) : (
                    null
                )
            }

            {
                page6 === true ? (
                    <form className='form-wrapper'>
                        <div className='survey-section'>
                            <h2>Summary</h2>
                        </div>
                        <div className='entry-heading'>
                            <h3>Review your responses</h3>
                        </div>

                        <p>show users responses here</p>

                        <button onClick={prevPage}>prevPage</button>
                        <button type="button" onClick={calculate}>calculate</button>
                    </form>
                ) : (
                    null
                )
            }

            {
                page7 === true ? (
                    <div>
                        <h4>Ctrl + F5 to restart capability tool (temporary solution but will implement redo button soon)</h4>

                        <div className='chart-wrapper'>
                            <h2>RadarChart display</h2>
                            
                            <h4>You are a <span className='user-type'>{userType}</span> user.</h4>

                            <Radar data = {chartData} options={{
                                type: "radar",
                                responsive: true,
                                title: {text: 'CHART TITLE', display: true},
                                scale: {
                                    ticks: {
                                        beginAtZero: true,
                                        max: 45,
                                        min: 0,
                                    }
                                }
                            }} />
                        </div>
                    </div>
                ) : (
                    null
                )
            }



        </div>
    )
}

export default AssessmentInput;