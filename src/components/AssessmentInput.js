import { useState } from 'react';
import React from 'react';

const AssessmentInput = () => {

    // const [state, function to update the state]
    const [page0, setPage0] = useState(true);
    const [page1, setPage1] = useState(false);
    const [page2, setPage2] = useState(false);
    const [page3, setPage3] = useState(false);
    const [page4, setPage4] = useState(false);
    const [page5, setPage5] = useState(false);
    const [page6, setPage6] = useState(false);
    
    const [question1, setQuestion1] = useState("null");
    const [question2, setQuestion2] = useState("null");

    // page navigation
    function nextPageFrom0()
    {
        setPage0(false);
        setPage1(true);
        setPage2(false);
        setPage3(false);
        setPage4(false);
        setPage5(false);
        setPage6(false);
    }
    function nextPageFrom1()
    {
        setPage0(false);
        setPage1(false);
        setPage2(true);
        setPage3(false);
        setPage4(false);
        setPage5(false);
        setPage6(false);
    }
    function nextPageFrom2()
    {
        setPage0(false);
        setPage1(false);
        setPage2(false);
        setPage3(true);
        setPage4(false);
        setPage5(false);
        setPage6(false);
    }
    function nextPageFrom3()
    {
        setPage0(false);
        setPage1(false);
        setPage2(false);
        setPage3(false);
        setPage4(true);
        setPage5(false);
        setPage6(false);
    }
    function nextPageFrom4()
    {
        setPage0(false);
        setPage1(false);
        setPage2(false);
        setPage3(false);
        setPage4(false);
        setPage5(true);
        setPage6(false);
    }
    function nextPageFrom5()
    {
        setPage0(false);
        setPage1(false);
        setPage2(false);
        setPage3(false);
        setPage4(false);
        setPage5(false);
        setPage6(true);
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
                        <h2>PAGE 0 OF THE FORM - Information Communication Technology (ICT) Proficiency and Productivity</h2>
                        <h2>I am able to</h2>
                        <p>Choose the appropriate digital tools or devices which assist me in reaching my learning goals</p>
                        <input type='radio' id='Q5-11' name='Q5-11' value='Very poor'></input>
                        <input type='radio' id='Q5-12' name='Q5-12' value='Poor'></input>
                        <input type='radio' id='Q5-13' name='Q5-13' value='Needs work'></input>
                        <input type='radio' id='Q5-14' name='Q5-14' value='Satisfactory'></input>
                        <input type='radio' id='Q5-15' name='Q5-15' value='Good'></input>
                        <input type='radio' id='Q5-16' name='Q5-16' value='Very good'></input>
                        <input type='radio' id='Q5-17' name='Q5-17' value='Excellent'></input>
                        <br></br>

                        <p>Use digital communication services, tools, and mobile apps (such as email and social networking applications) to communicate with others</p>
                        <input type='radio' id='Q5-21' name='Q5-21' value='Very poor'></input>
                        <input type='radio' id='Q5-22' name='Q5-22' value='Poor'></input>
                        <input type='radio' id='Q5-23' name='Q5-23' value='Needs work'></input>
                        <input type='radio' id='Q5-24' name='Q5-24' value='Satisfactory'></input>
                        <input type='radio' id='Q5-25' name='Q5-25' value='Good'></input>
                        <input type='radio' id='Q5-26' name='Q5-26' value='Very good'></input>
                        <input type='radio' id='Q5-27' name='Q5-27' value='Excellent'></input>
                        <br></br>

                        <p>Use software and tools (such as Office 365 and Adobe) to organise, edit, manage, and back up digital documents and files.</p>
                        <input type='radio' id='Q5-31' name='Q5-31' value='Very poor'></input>
                        <input type='radio' id='Q5-32' name='Q5-32' value='Poor'></input>
                        <input type='radio' id='Q5-33' name='Q5-33' value='Needs work'></input>
                        <input type='radio' id='Q5-34' name='Q5-34' value='Satisfactory'></input>
                        <input type='radio' id='Q5-35' name='Q5-35' value='Good'></input>
                        <input type='radio' id='Q5-36' name='Q5-36' value='Very good'></input>
                        <input type='radio' id='Q5-37' name='Q5-37' value='Excellent'></input>
                        <br></br>

                        <p>Use internet browsers to find the required documents or data</p>
                        <input type='radio' id='Q5-41' name='Q5-41' value='Very poor'></input>
                        <input type='radio' id='Q5-42' name='Q5-42' value='Poor'></input>
                        <input type='radio' id='Q5-43' name='Q5-43' value='Needs work'></input>
                        <input type='radio' id='Q5-44' name='Q5-44' value='Satisfactory'></input>
                        <input type='radio' id='Q5-45' name='Q5-45' value='Good'></input>
                        <input type='radio' id='Q5-46' name='Q5-46' value='Very good'></input>
                        <input type='radio' id='Q5-47' name='Q5-47' value='Excellent'></input>
                        <br></br>

                        <p>Perform troubleshooting (i.e., problem-solving) on my computer and digital devices</p>
                        <input type='radio' id='Q5-51' name='Q5-51' value='Very poor'></input>
                        <input type='radio' id='Q5-52' name='Q5-52' value='Poor'></input>
                        <input type='radio' id='Q5-53' name='Q5-53' value='Needs work'></input>
                        <input type='radio' id='Q5-54' name='Q5-54' value='Satisfactory'></input>
                        <input type='radio' id='Q5-55' name='Q5-55' value='Good'></input>
                        <input type='radio' id='Q5-56' name='Q5-56' value='Very good'></input>
                        <input type='radio' id='Q5-57' name='Q5-57' value='Excellent'></input>
                        <br></br>

                        <p>Code applications or programs</p>
                        <input type='radio' id='Q5-61' name='Q5-61' value='Very poor'></input>
                        <input type='radio' id='Q5-62' name='Q5-62' value='Poor'></input>
                        <input type='radio' id='Q5-63' name='Q5-63' value='Needs work'></input>
                        <input type='radio' id='Q5-64' name='Q5-64' value='Satisfactory'></input>
                        <input type='radio' id='Q5-65' name='Q5-65' value='Good'></input>
                        <input type='radio' id='Q5-66' name='Q5-66' value='Very good'></input>
                        <input type='radio' id='Q5-67' name='Q5-67' value='Excellent'></input>
                        <br></br>

                        <button onClick={nextPageFrom0}>nextPage</button>
                    </form>
                ) : (
                    null
                )
            }

            {
                page1 === true ? (
                    <form>
                        <h2>PAGE 1 OF THE FORM - Digital Learning and Development</h2>
                        <h2>I am able to</h2>

                        <p>Use digital technologies (such as digital calendars/planners) to schedule or plan my study</p>
                        <input type='radio' id='Q6-11' name='Q6-11' value='Very poor'></input>
                        <input type='radio' id='Q6-12' name='Q6-12' value='Poor'></input>
                        <input type='radio' id='Q6-13' name='Q6-13' value='Needs work'></input>
                        <input type='radio' id='Q6-14' name='Q6-14' value='Satisfactory'></input>
                        <input type='radio' id='Q6-15' name='Q6-15' value='Good'></input>
                        <input type='radio' id='Q6-16' name='Q6-16' value='Very good'></input>
                        <input type='radio' id='Q6-17' name='Q6-17' value='Excellent'></input>
                        <br></br>

                        <p>Use digital technologies (such as Zoom, Microsoft Teams, BlackBoard or Padlet) to share information with instructors and other students.</p>
                        <input type='radio' id='Q6-21' name='Q6-21' value='Very poor'></input>
                        <input type='radio' id='Q6-22' name='Q6-22' value='Poor'></input>
                        <input type='radio' id='Q6-23' name='Q6-23' value='Needs work'></input>
                        <input type='radio' id='Q6-24' name='Q6-24' value='Satisfactory'></input>
                        <input type='radio' id='Q6-25' name='Q6-25' value='Good'></input>
                        <input type='radio' id='Q6-26' name='Q6-26' value='Very good'></input>
                        <input type='radio' id='Q6-27' name='Q6-27' value='Excellent'></input>
                        <br></br>

                        <p>Use digital tools to record learning events (e.g., lectures, tutorials, webinars) or information for later review</p>
                        <input type='radio' id='Q6-31' name='Q6-31' value='Very poor'></input>
                        <input type='radio' id='Q6-32' name='Q6-32' value='Poor'></input>
                        <input type='radio' id='Q6-33' name='Q6-33' value='Needs work'></input>
                        <input type='radio' id='Q6-34' name='Q6-34' value='Satisfactory'></input>
                        <input type='radio' id='Q6-35' name='Q6-35' value='Good'></input>
                        <input type='radio' id='Q6-36' name='Q6-36' value='Very good'></input>
                        <input type='radio' id='Q6-37' name='Q6-37' value='Excellent'></input>
                        <br></br>

                        <p>Sign onto and use the University’s supported platforms (such as BlackBoard, MyUON, the Library databases) to find the required document or data.</p>
                        <input type='radio' id='Q6-41' name='Q6-41' value='Very poor'></input>
                        <input type='radio' id='Q6-42' name='Q6-42' value='Poor'></input>
                        <input type='radio' id='Q6-43' name='Q6-43' value='Needs work'></input>
                        <input type='radio' id='Q6-44' name='Q6-44' value='Satisfactory'></input>
                        <input type='radio' id='Q6-45' name='Q6-45' value='Good'></input>
                        <input type='radio' id='Q6-46' name='Q6-46' value='Very good'></input>
                        <input type='radio' id='Q6-47' name='Q6-47' value='Excellent'></input>
                        <br></br>

                        <p>Identify and participate in learning opportunities and courses available in a digital environment (such as YouTube, FutureLearn, and edX online courses).</p>
                        <input type='radio' id='Q6-51' name='Q6-51' value='Very poor'></input>
                        <input type='radio' id='Q6-52' name='Q6-52' value='Poor'></input>
                        <input type='radio' id='Q6-53' name='Q6-53' value='Needs work'></input>
                        <input type='radio' id='Q6-54' name='Q6-54' value='Satisfactory'></input>
                        <input type='radio' id='Q6-55' name='Q6-55' value='Good'></input>
                        <input type='radio' id='Q6-56' name='Q6-56' value='Very good'></input>
                        <input type='radio' id='Q6-57' name='Q6-57' value='Excellent'></input>
                        <br></br>

                        <p>Analyse my digital strengths and weaknesses and reflect on my personal learning</p>
                        <input type='radio' id='Q6-61' name='Q6-61' value='Very poor'></input>
                        <input type='radio' id='Q6-62' name='Q6-62' value='Poor'></input>
                        <input type='radio' id='Q6-63' name='Q6-63' value='Needs work'></input>
                        <input type='radio' id='Q6-64' name='Q6-64' value='Satisfactory'></input>
                        <input type='radio' id='Q6-65' name='Q6-65' value='Good'></input>
                        <input type='radio' id='Q6-66' name='Q6-66' value='Very good'></input>
                        <input type='radio' id='Q6-67' name='Q6-67' value='Excellent'></input>
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
                    <form>
                        <h2>PAGE 2 OF THE FORM - Digital Creation, Problem Solving and Innovation</h2>
                        <h2>I am able to</h2>

                        <p>Use digital tools to edit an image and create a video</p>
                        <input type='radio' id='Q7-11' name='Q7-11' value='Very poor'></input>
                        <input type='radio' id='Q7-12' name='Q7-12' value='Poor'></input>
                        <input type='radio' id='Q7-13' name='Q7-13' value='Needs work'></input>
                        <input type='radio' id='Q7-14' name='Q7-14' value='Satisfactory'></input>
                        <input type='radio' id='Q7-15' name='Q7-15' value='Good'></input>
                        <input type='radio' id='Q7-16' name='Q7-16' value='Very good'></input>
                        <input type='radio' id='Q7-17' name='Q7-17' value='Excellent'></input>
                        <br></br>

                        <p>Sesign and administer online surveys (such as SurveyMonkey, Qualtrics, and Google Docs) to gather qualitative and quantitative data.</p>
                        <input type='radio' id='Q7-21' name='Q7-21' value='Very poor'></input>
                        <input type='radio' id='Q7-22' name='Q7-22' value='Poor'></input>
                        <input type='radio' id='Q7-23' name='Q7-23' value='Needs work'></input>
                        <input type='radio' id='Q7-24' name='Q7-24' value='Satisfactory'></input>
                        <input type='radio' id='Q7-25' name='Q7-25' value='Good'></input>
                        <input type='radio' id='Q7-26' name='Q7-26' value='Very good'></input>
                        <input type='radio' id='Q7-27' name='Q7-27' value='Excellent'></input>
                        <br></br>

                        <p>Analyse data using qualitative or quantitative software and digital tools</p>
                        <input type='radio' id='Q7-31' name='Q7-31' value='Very poor'></input>
                        <input type='radio' id='Q7-32' name='Q7-32' value='Poor'></input>
                        <input type='radio' id='Q7-33' name='Q7-33' value='Needs work'></input>
                        <input type='radio' id='Q7-34' name='Q7-34' value='Satisfactory'></input>
                        <input type='radio' id='Q7-35' name='Q7-35' value='Good'></input>
                        <input type='radio' id='Q7-36' name='Q7-36' value='Very good'></input>
                        <input type='radio' id='Q7-37' name='Q7-37' value='Excellent'></input>
                        <br></br>

                        <p>Evaluate a problem by gathering appropriate information using digital tools</p>
                        <input type='radio' id='Q7-41' name='Q7-41' value='Very poor'></input>
                        <input type='radio' id='Q7-42' name='Q7-42' value='Poor'></input>
                        <input type='radio' id='Q7-43' name='Q7-43' value='Needs work'></input>
                        <input type='radio' id='Q7-44' name='Q7-44' value='Satisfactory'></input>
                        <input type='radio' id='Q7-45' name='Q7-45' value='Good'></input>
                        <input type='radio' id='Q7-46' name='Q7-46' value='Very good'></input>
                        <input type='radio' id='Q7-47' name='Q7-47' value='Excellent'></input>
                        <br></br>

                        <p>Generate a new written and/or visual digital product by comparing and synthesising information that was found elsewhere</p>
                        <input type='radio' id='Q7-51' name='Q7-51' value='Very poor'></input>
                        <input type='radio' id='Q7-52' name='Q7-52' value='Poor'></input>
                        <input type='radio' id='Q7-53' name='Q7-53' value='Needs work'></input>
                        <input type='radio' id='Q7-54' name='Q7-54' value='Satisfactory'></input>
                        <input type='radio' id='Q7-55' name='Q7-55' value='Good'></input>
                        <input type='radio' id='Q7-56' name='Q7-56' value='Very good'></input>
                        <input type='radio' id='Q7-57' name='Q7-57' value='Excellent'></input>
                        <br></br>

                        <p>Adapt and integrate a new technology into my learning environment</p>
                        <input type='radio' id='Q7-61' name='Q7-61' value='Very poor'></input>
                        <input type='radio' id='Q7-62' name='Q7-62' value='Poor'></input>
                        <input type='radio' id='Q7-63' name='Q7-63' value='Needs work'></input>
                        <input type='radio' id='Q7-64' name='Q7-64' value='Satisfactory'></input>
                        <input type='radio' id='Q7-65' name='Q7-65' value='Good'></input>
                        <input type='radio' id='Q7-66' name='Q7-66' value='Very good'></input>
                        <input type='radio' id='Q7-67' name='Q7-67' value='Excellent'></input>
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
                    <form>
                        <h2>PAGE 3 OF THE FORM - Digital Communication, Collaboration and Participation</h2>
                        <h2>I am able to</h2>

                        <p>Interact online with people from diverse communities and respect multiple perspectives</p>
                        <input type='radio' id='Q8-11' name='Q8-11' value='Very poor'></input>
                        <input type='radio' id='Q8-12' name='Q8-12' value='Poor'></input>
                        <input type='radio' id='Q8-13' name='Q8-13' value='Needs work'></input>
                        <input type='radio' id='Q8-14' name='Q8-14' value='Satisfactory'></input>
                        <input type='radio' id='Q8-15' name='Q8-15' value='Good'></input>
                        <input type='radio' id='Q8-16' name='Q8-16' value='Very good'></input>
                        <input type='radio' id='Q8-17' name='Q8-17' value='Excellent'></input>
                        <br></br>

                        <p>Work remotely with colleagues/students/classmates using online collaborative tools</p>
                        <input type='radio' id='Q8-21' name='Q8-21' value='Very poor'></input>
                        <input type='radio' id='Q8-22' name='Q8-22' value='Poor'></input>
                        <input type='radio' id='Q8-23' name='Q8-23' value='Needs work'></input>
                        <input type='radio' id='Q8-24' name='Q8-24' value='Satisfactory'></input>
                        <input type='radio' id='Q8-25' name='Q8-25' value='Good'></input>
                        <input type='radio' id='Q8-26' name='Q8-26' value='Very good'></input>
                        <input type='radio' id='Q8-27' name='Q8-27' value='Excellent'></input>
                        <br></br>

                        <p>Use technology to ask a question or deliver a message in a socially acceptable way (i.e., netiquette rules)</p>
                        <input type='radio' id='Q8-31' name='Q8-31' value='Very poor'></input>
                        <input type='radio' id='Q8-32' name='Q8-32' value='Poor'></input>
                        <input type='radio' id='Q8-33' name='Q8-33' value='Needs work'></input>
                        <input type='radio' id='Q8-34' name='Q8-34' value='Satisfactory'></input>
                        <input type='radio' id='Q8-35' name='Q8-35' value='Good'></input>
                        <input type='radio' id='Q8-36' name='Q8-36' value='Very good'></input>
                        <input type='radio' id='Q8-37' name='Q8-37' value='Excellent'></input>
                        <br></br>

                        <p>Contribute to comments in online discussions (online forum, blog or wiki) on social issues encountered in everyday life.</p>
                        <input type='radio' id='Q8-41' name='Q8-41' value='Very poor'></input>
                        <input type='radio' id='Q8-42' name='Q8-42' value='Poor'></input>
                        <input type='radio' id='Q8-43' name='Q8-43' value='Needs work'></input>
                        <input type='radio' id='Q8-44' name='Q8-44' value='Satisfactory'></input>
                        <input type='radio' id='Q8-45' name='Q8-45' value='Good'></input>
                        <input type='radio' id='Q8-46' name='Q8-46' value='Very good'></input>
                        <input type='radio' id='Q8-47' name='Q8-47' value='Excellent'></input>
                        <br></br>

                        <p>Find relevant communities and groups online that suit my interests and needs</p>
                        <input type='radio' id='Q8-51' name='Q8-51' value='Very poor'></input>
                        <input type='radio' id='Q8-52' name='Q8-52' value='Poor'></input>
                        <input type='radio' id='Q8-53' name='Q8-53' value='Needs work'></input>
                        <input type='radio' id='Q8-54' name='Q8-54' value='Satisfactory'></input>
                        <input type='radio' id='Q8-55' name='Q8-55' value='Good'></input>
                        <input type='radio' id='Q8-56' name='Q8-56' value='Very good'></input>
                        <input type='radio' id='Q8-57' name='Q8-57' value='Excellent'></input>
                        <br></br>

                        <p>Share content and information using social networks (such as Facebook) and collaborative platforms (such as OneDrive, Google Drive, Dropbox, etc.)</p>
                        <input type='radio' id='Q8-61' name='Q8-61' value='Very poor'></input>
                        <input type='radio' id='Q8-62' name='Q8-62' value='Poor'></input>
                        <input type='radio' id='Q8-63' name='Q8-63' value='Needs work'></input>
                        <input type='radio' id='Q8-64' name='Q8-64' value='Satisfactory'></input>
                        <input type='radio' id='Q8-65' name='Q8-65' value='Good'></input>
                        <input type='radio' id='Q8-66' name='Q8-66' value='Very good'></input>
                        <input type='radio' id='Q8-67' name='Q8-67' value='Excellent'></input>
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
                    <form>
                        <h2>PAGE 4 OF THE FORM - Information Literacy, Data Literacy, and Media Literacy</h2>
                        <h2>I am able to</h2>

                        <p>Receive and respond to messages in a range of digital media (such as text, graphics, video, animation, audio and multimedia)</p>
                        <input type='radio' id='Q9-11' name='Q9-11' value='Very poor'></input>
                        <input type='radio' id='Q9-12' name='Q9-12' value='Poor'></input>
                        <input type='radio' id='Q9-13' name='Q9-13' value='Needs work'></input>
                        <input type='radio' id='Q9-14' name='Q9-14' value='Satisfactory'></input>
                        <input type='radio' id='Q9-15' name='Q9-15' value='Good'></input>
                        <input type='radio' id='Q9-16' name='Q9-16' value='Very good'></input>
                        <input type='radio' id='Q9-17' name='Q9-17' value='Excellent'></input>
                        <br></br>

                        <p>Use database applications to enter and retrieve information required for my studies</p>
                        <input type='radio' id='Q9-21' name='Q9-21' value='Very poor'></input>
                        <input type='radio' id='Q9-22' name='Q9-22' value='Poor'></input>
                        <input type='radio' id='Q9-23' name='Q9-23' value='Needs work'></input>
                        <input type='radio' id='Q9-24' name='Q9-24' value='Satisfactory'></input>
                        <input type='radio' id='Q9-25' name='Q9-25' value='Good'></input>
                        <input type='radio' id='Q9-26' name='Q9-26' value='Very good'></input>
                        <input type='radio' id='Q9-27' name='Q9-27' value='Excellent'></input>
                        <br></br>

                        <p>Use the filtering and advanced search options in online databases (such as Google Scholar)</p>
                        <input type='radio' id='Q9-31' name='Q9-31' value='Very poor'></input>
                        <input type='radio' id='Q9-32' name='Q9-32' value='Poor'></input>
                        <input type='radio' id='Q9-33' name='Q9-33' value='Needs work'></input>
                        <input type='radio' id='Q9-34' name='Q9-34' value='Satisfactory'></input>
                        <input type='radio' id='Q9-35' name='Q9-35' value='Good'></input>
                        <input type='radio' id='Q9-36' name='Q9-36' value='Very good'></input>
                        <input type='radio' id='Q9-37' name='Q9-37' value='Excellent'></input>
                        <br></br>

                        <p>Assess the truthfulness of information before sharing it on social media or with other students</p>
                        <input type='radio' id='Q9-41' name='Q9-41' value='Very poor'></input>
                        <input type='radio' id='Q9-42' name='Q9-42' value='Poor'></input>
                        <input type='radio' id='Q9-43' name='Q9-43' value='Needs work'></input>
                        <input type='radio' id='Q9-44' name='Q9-44' value='Satisfactory'></input>
                        <input type='radio' id='Q9-45' name='Q9-45' value='Good'></input>
                        <input type='radio' id='Q9-46' name='Q9-46' value='Very good'></input>
                        <input type='radio' id='Q9-47' name='Q9-47' value='Excellent'></input>
                        <br></br>

                        <p>Follow the rules of copyright and give credit for others’ work through proper referencing</p>
                        <input type='radio' id='Q9-51' name='Q9-51' value='Very poor'></input>
                        <input type='radio' id='Q9-52' name='Q9-52' value='Poor'></input>
                        <input type='radio' id='Q9-53' name='Q9-53' value='Needs work'></input>
                        <input type='radio' id='Q9-54' name='Q9-54' value='Satisfactory'></input>
                        <input type='radio' id='Q9-55' name='Q9-55' value='Good'></input>
                        <input type='radio' id='Q9-56' name='Q9-56' value='Very good'></input>
                        <input type='radio' id='Q9-57' name='Q9-57' value='Excellent'></input>
                        <br></br>

                        <p>Distinguish the differences between primary and secondary sources</p>
                        <input type='radio' id='Q9-61' name='Q9-61' value='Very poor'></input>
                        <input type='radio' id='Q9-62' name='Q9-62' value='Poor'></input>
                        <input type='radio' id='Q9-63' name='Q9-63' value='Needs work'></input>
                        <input type='radio' id='Q9-64' name='Q9-64' value='Satisfactory'></input>
                        <input type='radio' id='Q9-65' name='Q9-65' value='Good'></input>
                        <input type='radio' id='Q9-66' name='Q9-66' value='Very good'></input>
                        <input type='radio' id='Q9-67' name='Q9-67' value='Excellent'></input>
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
                    <form>
                        <h2>PAGE 5 OF THE FORM - Digital Identity and Wellbeing</h2>
                        <h2>I am able to</h2>

                        <p>Evaluate content of emails/messages/calls for spam and scam content</p>
                        <input type='radio' id='Q10-11' name='Q10-11' value='Very poor'></input>
                        <input type='radio' id='Q10-12' name='Q10-12' value='Poor'></input>
                        <input type='radio' id='Q10-13' name='Q10-13' value='Needs work'></input>
                        <input type='radio' id='Q10-14' name='Q10-14' value='Satisfactory'></input>
                        <input type='radio' id='Q10-15' name='Q10-15' value='Good'></input>
                        <input type='radio' id='Q10-16' name='Q10-16' value='Very good'></input>
                        <input type='radio' id='Q10-17' name='Q10-17' value='Excellent'></input>
                        <br></br>

                        <p>Protect my personal data in online and offline environments</p>
                        <input type='radio' id='Q10-21' name='Q10-21' value='Very poor'></input>
                        <input type='radio' id='Q10-22' name='Q10-22' value='Poor'></input>
                        <input type='radio' id='Q10-23' name='Q10-23' value='Needs work'></input>
                        <input type='radio' id='Q10-24' name='Q10-24' value='Satisfactory'></input>
                        <input type='radio' id='Q10-25' name='Q10-25' value='Good'></input>
                        <input type='radio' id='Q10-26' name='Q10-26' value='Very good'></input>
                        <input type='radio' id='Q10-27' name='Q10-27' value='Excellent'></input>
                        <br></br>

                        <p>Act positively against others’ damaging online behaviours (e.g., reporting or rejecting cyberbullying)</p>
                        <input type='radio' id='Q10-31' name='Q10-31' value='Very poor'></input>
                        <input type='radio' id='Q10-32' name='Q10-32' value='Poor'></input>
                        <input type='radio' id='Q10-33' name='Q10-33' value='Needs work'></input>
                        <input type='radio' id='Q10-34' name='Q10-34' value='Satisfactory'></input>
                        <input type='radio' id='Q10-35' name='Q10-35' value='Good'></input>
                        <input type='radio' id='Q10-36' name='Q10-36' value='Very good'></input>
                        <input type='radio' id='Q10-37' name='Q10-37' value='Excellent'></input>
                        <br></br>

                        <p>Be considerate of others' privacy when taking video or pictures</p>
                        <input type='radio' id='Q10-41' name='Q10-41' value='Very poor'></input>
                        <input type='radio' id='Q10-42' name='Q10-42' value='Poor'></input>
                        <input type='radio' id='Q10-43' name='Q10-43' value='Needs work'></input>
                        <input type='radio' id='Q10-44' name='Q10-44' value='Satisfactory'></input>
                        <input type='radio' id='Q10-45' name='Q10-45' value='Good'></input>
                        <input type='radio' id='Q10-46' name='Q10-46' value='Very good'></input>
                        <input type='radio' id='Q10-47' name='Q10-47' value='Excellent'></input>
                        <br></br>

                        <p>Adjust the privacy settings of my digital devices and tools</p>
                        <input type='radio' id='Q10-51' name='Q10-51' value='Very poor'></input>
                        <input type='radio' id='Q10-52' name='Q10-52' value='Poor'></input>
                        <input type='radio' id='Q10-53' name='Q10-53' value='Needs work'></input>
                        <input type='radio' id='Q10-54' name='Q10-54' value='Satisfactory'></input>
                        <input type='radio' id='Q10-55' name='Q10-55' value='Good'></input>
                        <input type='radio' id='Q10-56' name='Q10-56' value='Very good'></input>
                        <input type='radio' id='Q10-57' name='Q10-57' value='Excellent'></input>
                        <br></br>

                        <p>Protect my mental, physical, and emotional health when using digital technologies or tools</p>
                        <input type='radio' id='Q10-61' name='Q10-61' value='Very poor'></input>
                        <input type='radio' id='Q10-62' name='Q10-62' value='Poor'></input>
                        <input type='radio' id='Q10-63' name='Q10-63' value='Needs work'></input>
                        <input type='radio' id='Q10-64' name='Q10-64' value='Satisfactory'></input>
                        <input type='radio' id='Q10-65' name='Q10-65' value='Good'></input>
                        <input type='radio' id='Q10-66' name='Q10-66' value='Very good'></input>
                        <input type='radio' id='Q10-67' name='Q10-67' value='Excellent'></input>
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
                    <form>
                        <h2>PAGE 5 OF THE FORM - </h2>
                        <h2>I am able to</h2>

                        <p>show users responses here</p>

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