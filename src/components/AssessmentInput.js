// importing react features, stylesheets, community libraries and other components
import { useState, useEffect } from 'react';
import React from 'react';
import '../css/AssessmentInput.css';
import "react-sweet-progress/lib/style.css";
import 'bootstrap/dist/css/bootstrap.css';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import UploadCSV from './UploadCSV';
import UserDescription from './UserDescription';
import SurveyProgress from './SurveyProgress';
import ResultWheel from './ResultWheel';
import ResourceLinks from './ResourceLinks';
import Questions from './Questions';
import RadarChart from './RadarChart';
import DownloadCSV from './DownloadCSV';
import UserTypeAndDescription from './UserTypeAndDescription';

const AssessmentInput = (props) => {

    // page controller
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

    // raw input for each section
    const [rawSection1, setRawSection1] = useState([]);
    const [rawSection2, setRawSection2] = useState([]);
    const [rawSection3, setRawSection3] = useState([]);
    const [rawSection4, setRawSection4] = useState([]);
    const [rawSection5, setRawSection5] = useState([]);
    const [rawSection6, setRawSection6] = useState([]);

    // chartData
    const [chartData, setChartData] = useState({});

    // uploaded chartData
    const [uploadedChartData, setUploadedChartData] = useState({});

    // downloaded chartData
    const [downloadChartData, setDownloadChartData] = useState({});

    const chart = () => {
        setChartData({
            labels: [
                'Proficiency and Productivity',
                'Digital Learning and Development',
                'Digital Creation, Problem Solving and Innovation',
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

                // dataset 2
                uploadedChartData
            ]
        })
    }

    useEffect(() => {
        chart()
    }, [sectionsInArray, uploadedChartData])

    // answered all questions function
    function formValidation(questionIndex)
    {
        let responses = [];
        // getting radio values for every input
        var radio1 = document.getElementsByName(questionIndex + 1);
        var radio2 = document.getElementsByName(questionIndex + 2);
        var radio3 = document.getElementsByName(questionIndex + 3);
        var radio4 = document.getElementsByName(questionIndex + 4);
        var radio5 = document.getElementsByName(questionIndex + 5);
        var radio6 = document.getElementsByName(questionIndex + 6);

        // iterate through 0 to 6
        for (var i = 0, length = radio1.length; i < length; i++)
        {
            if (radio1[i].checked)
            {
              responses.push(radio1[i].value);
            }

            if (radio2[i].checked)
            {
              responses.push(radio2[i].value);
            }

            if (radio3[i].checked)
            {
              responses.push(radio3[i].value);
            }

            if (radio4[i].checked)
            {
              responses.push(radio4[i].value);
            }

            if (radio5[i].checked)
            {
              responses.push(radio5[i].value);
            }

            if (radio6[i].checked)
            {
              responses.push(radio6[i].value);
            }
        }

        if(responses.length < 6)
        {
            alert("Please answer all the questions");
            return responses;
        }
        
        return responses;
    }

    function determineSectionTotal(responses)
    {
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

        return sectionTotal;
    }

    function determineSectionRaw(responses)
    {
        let sectionRaw = [];

        responses.forEach(element => {
            switch(element) {
                case 'Very poor':
                    sectionRaw.push(element);
                    break;
                case 'Poor':
                    sectionRaw.push(element);
                    break;
                case 'Needs work':
                    sectionRaw.push(element);
                    break;
                case 'Satisfactory':
                    sectionRaw.push(element);
                    break;
                case 'Good':
                    sectionRaw.push(element);
                    break;
                case 'Very good':
                    sectionRaw.push(element);
                    break;
                case 'Excellent':
                    sectionRaw.push(element);
                    break;
                default:
                    //
            }
        });

        return sectionRaw;
    }

    // page navigation
    function nextPageFrom0()
    {
        // validate all questions have been answered
        let responses = formValidation('Q5-');

        // return if bad result
        if(responses.length < 6)
        {
            return;
        }

        // string to value classification
        var sectionTotal = determineSectionTotal(responses);
        let sectionRaw = determineSectionRaw(responses);

        setSection1(sectionTotal);
        setRawSection1(sectionRaw);

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
        // validate all questions have been answered
        let responses = formValidation('Q6-');

        // return if bad result
        if(responses.length < 6)
        {
            return;
        }

        // string to value classification
        var sectionTotal = 0;
        let sectionRaw = [];
        responses.forEach(element => {
            switch(element) {
                case 'Very poor':
                    sectionTotal = sectionTotal + 1;
                    sectionRaw.push(element);
                    break;
                case 'Poor':
                    sectionTotal = sectionTotal + 2;
                    sectionRaw.push(element);
                    break;
                case 'Needs work':
                    sectionTotal = sectionTotal + 3;
                    sectionRaw.push(element);
                    break;
                case 'Satisfactory':
                    sectionTotal = sectionTotal + 4;
                    sectionRaw.push(element);
                    break;
                case 'Good':
                    sectionTotal = sectionTotal + 5;
                    sectionRaw.push(element);
                    break;
                case 'Very good':
                    sectionTotal = sectionTotal + 6;
                    sectionRaw.push(element);
                    break;
                case 'Excellent':
                    sectionTotal = sectionTotal + 7;
                    sectionRaw.push(element);
                    break;
                default:
                    //
              }
        });
        setSection2(sectionTotal);
        setRawSection2(sectionRaw);

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
        // validate all questions have been answered
        let responses = formValidation('Q7-');

        // return if bad result
        if(responses.length < 6)
        {
            return;
        }

        // string to value classification
        var sectionTotal = 0;
        let sectionRaw = [];
        responses.forEach(element => {
            switch(element) {
                case 'Very poor':
                    sectionTotal = sectionTotal + 1;
                    sectionRaw.push(element);
                    break;
                case 'Poor':
                    sectionTotal = sectionTotal + 2;
                    sectionRaw.push(element);
                    break;
                case 'Needs work':
                    sectionTotal = sectionTotal + 3;
                    sectionRaw.push(element);
                    break;
                case 'Satisfactory':
                    sectionTotal = sectionTotal + 4;
                    sectionRaw.push(element);
                    break;
                case 'Good':
                    sectionTotal = sectionTotal + 5;
                    sectionRaw.push(element);
                    break;
                case 'Very good':
                    sectionTotal = sectionTotal + 6;
                    sectionRaw.push(element);
                    break;
                case 'Excellent':
                    sectionTotal = sectionTotal + 7;
                    sectionRaw.push(element);
                    break;
                default:
                    //
              }
        });
        setSection3(sectionTotal);
        setRawSection3(sectionRaw);

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
        // validate all questions have been answered
        let responses = formValidation('Q8-');

        // return if bad result
        if(responses.length < 6)
        {
            return;
        }

        // string to value classification
        var sectionTotal = 0;
        let sectionRaw = [];
        responses.forEach(element => {
            switch(element) {
                case 'Very poor':
                    sectionTotal = sectionTotal + 1;
                    sectionRaw.push(element);
                    break;
                case 'Poor':
                    sectionTotal = sectionTotal + 2;
                    sectionRaw.push(element);
                    break;
                case 'Needs work':
                    sectionTotal = sectionTotal + 3;
                    sectionRaw.push(element);
                    break;
                case 'Satisfactory':
                    sectionTotal = sectionTotal + 4;
                    sectionRaw.push(element);
                    break;
                case 'Good':
                    sectionTotal = sectionTotal + 5;
                    sectionRaw.push(element);
                    break;
                case 'Very good':
                    sectionTotal = sectionTotal + 6;
                    sectionRaw.push(element);
                    break;
                case 'Excellent':
                    sectionTotal = sectionTotal + 7;
                    sectionRaw.push(element);
                    break;
                default:
                    //
            }
        });
        setSection4(sectionTotal);
        setRawSection4(sectionRaw);

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
        // validate all questions have been answered
        let responses = formValidation('Q9-');

        // return if bad result
        if(responses.length < 6)
        {
            return;
        }

        // string to value classification
        var sectionTotal = 0;
        let sectionRaw = [];
        responses.forEach(element => {
            switch(element) {
                case 'Very poor':
                    sectionTotal = sectionTotal + 1;
                    sectionRaw.push(element);
                    break;
                case 'Poor':
                    sectionTotal = sectionTotal + 2;
                    sectionRaw.push(element);
                    break;
                case 'Needs work':
                    sectionTotal = sectionTotal + 3;
                    sectionRaw.push(element);
                    break;
                case 'Satisfactory':
                    sectionTotal = sectionTotal + 4;
                    sectionRaw.push(element);
                    break;
                case 'Good':
                    sectionTotal = sectionTotal + 5;
                    sectionRaw.push(element);
                    break;
                case 'Very good':
                    sectionTotal = sectionTotal + 6;
                    sectionRaw.push(element);
                    break;
                case 'Excellent':
                    sectionTotal = sectionTotal + 7;
                    sectionRaw.push(element);
                    break;
                default:
                    //
            }
        });
        setSection5(sectionTotal);
        setRawSection5(sectionRaw);

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
        // validate all questions have been answered
        let responses = formValidation('Q10-');

        // return if bad result
        if(responses.length < 6)
        {
            return;
        }

        // string to value classification
        var sectionTotal = 0;
        let sectionRaw = [];
        responses.forEach(element => {
            switch(element) {
                case 'Very poor':
                    sectionTotal = sectionTotal + 1;
                    sectionRaw.push(element);
                    break;
                case 'Poor':
                    sectionTotal = sectionTotal + 2;
                    sectionRaw.push(element);
                    break;
                case 'Needs work':
                    sectionTotal = sectionTotal + 3;
                    sectionRaw.push(element);
                    break;
                case 'Satisfactory':
                    sectionTotal = sectionTotal + 4;
                    sectionRaw.push(element);
                    break;
                case 'Good':
                    sectionTotal = sectionTotal + 5;
                    sectionRaw.push(element);
                    break;
                case 'Very good':
                    sectionTotal = sectionTotal + 6;
                    sectionRaw.push(element);
                    break;
                case 'Excellent':
                    sectionTotal = sectionTotal + 7;
                    sectionRaw.push(element);
                    break;
                default:
                    //
            }
        });
        setSection6(sectionTotal);
        setRawSection6(sectionRaw);
        
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
        // validate all questions have been answered
        let responses = formValidation('Q10-');

        // return if bad result
        if(responses.length < 6)
        {
            return;
        }

        // string to value classification
        var sectionTotal = 0;
        let sectionRaw = [];
        responses.forEach(element => {
            switch(element) {
                case 'Very poor':
                    sectionTotal = sectionTotal + 1;
                    sectionRaw.push(element);
                    break;
                case 'Poor':
                    sectionTotal = sectionTotal + 2;
                    sectionRaw.push(element);
                    break;
                case 'Needs work':
                    sectionTotal = sectionTotal + 3;
                    sectionRaw.push(element);
                    break;
                case 'Satisfactory':
                    sectionTotal = sectionTotal + 4;
                    sectionRaw.push(element);
                    break;
                case 'Good':
                    sectionTotal = sectionTotal + 5;
                    sectionRaw.push(element);
                    break;
                case 'Very good':
                    sectionTotal = sectionTotal + 6;
                    sectionRaw.push(element);
                    break;
                case 'Excellent':
                    sectionTotal = sectionTotal + 7;
                    sectionRaw.push(element);
                    break;
                default:
                    //
            }
        });
        setSection6(sectionTotal);
        setRawSection6(sectionRaw);

        // algorithm for calculating user type
        let arrayInput = [];
        arrayInput.push(section1);
        arrayInput.push(section2);
        arrayInput.push(section3);
        arrayInput.push(section4);
        arrayInput.push(section5);
        arrayInput.push(sectionTotal);
        setSectionsInArray(arrayInput);

        // object to press onto csv file
        setDownloadChartData({
            "Raters Group": "Respondents",
            "First Name": "N/A",
            "Last Name": "N/A",
            "Email": "N/A",
            "Mobile Number": "N/A",
            "Q1_Gender_Gender": "Female",
            "Q2_Age_Age": "36-41",
            "Q3_I'm a_I'm a": "TEXT",
            "Q4_I'm a student at the school of_I'm a student at the school of": "TEXT",
            "Q4_I'm a student at the school of_I'm a student at the school of_Comments": "TEXT",
            "Q5_I am able to_Choose the appropriate digital tools or devices which assist me in reaching my learning goals": rawSection1[0],
            "Q5_I am able to_Use digital communication services, tools, and mobile apps (such as email and social networking applications) to communicate with others": rawSection1[1],
            "Q5_I am able to_Use software and tools (such as Office 365 and Adobe) to organise, edit, manage, and back up digital documents and files.": rawSection1[2],
            "Q5_I am able to_Use internet browsers to find the required documents or data": rawSection1[3],
            "Q5_I am able to_Perform troubleshooting (i.e., problem-solving) on my computer and digital devices": rawSection1[4],
            "Q5_I am able to_Code applications or programs": rawSection1[5],
            "Q6_I am able to_Use digital technologies (such as digital calendars/planners) to schedule or plan my study": rawSection2[0],
            "Q6_I am able to_Use digital technologies (such as Zoom, Microsoft Teams, BlackBoard or Padlet) to share information with instructors and other students.": rawSection2[1],
            "Q6_I am able to_Use digital tools to record learning events (e.g., lectures, tutorials, webinars) or information for later review": rawSection2[2],
            "Q6_I am able to_Sign onto and use the University’s supported platforms (such as BlackBoard, MyUON, the Library databases) to find the required document or data.": rawSection2[3],
            "Q6_I am able to_Identify and participate in learning opportunities and courses available in a digital environment (such as YouTube, FutureLearn, and edX online courses).": rawSection2[4],
            "Q6_I am able to_Analyse my digital strengths and weaknesses and reflect on my personal learning": rawSection2[5],
            "Q7_I am able to_Use digital tools to edit an image and create a video": rawSection3[0],
            "Q7_I am able to_Sesign and administer online surveys (such as SurveyMonkey, Qualtrics, and Google Docs) to gather qualitative and quantitative data.": rawSection3[1],
            "Q7_I am able to_Analyse data using qualitative or quantitative software and digital tools": rawSection3[2],
            "Q7_I am able to_Evaluate a problem by gathering appropriate information using digital tools": rawSection3[3],
            "Q7_I am able to_Generate a new written and/or visual digital product by comparing and synthesising information that was found elsewhere": rawSection3[4],
            "Q7_I am able to_Adapt and integrate a new technology into my learning environment": rawSection3[5],
            "Q8_I am able to_Interact online with people from diverse communities and respect multiple perspect": rawSection4[0],
            "Q8_I am able to_Work remotely with colleagues/students/classmates using online collaborative tools": rawSection4[1],
            "Q8_I am able to_Use technology to ask a question or deliver a message in a socially acceptable way (i.e., netiquette rules)": rawSection4[2],
            "Q8_I am able to_Contribute to comments in online discussions (online forum, blog or wiki) on social issues encountered in everyday life.": rawSection4[3],
            "Q8_I am able to_Find relevant communities and groups online that suit my interests and needs": rawSection4[4],
            "Q8_I am able to_Share content and information using social networks (such as Facebook) and collaborative platforms (such as OneDrive, Google Drive, Dropbox, etc.)": rawSection4[5],
            "Q9_I am able to_Receive and respond to messages in a range of digital media (such as text, graphics, video, animation, audio and multimedia)": rawSection5[0],
            "Q9_I am able to_Database applications to enter and retrieve information required for my studies": rawSection5[1],
            "Q9_I am able to_The filtering and advanced search options in online databases (such as Google Scholar)": rawSection5[2],
            "Q9_I am able to_Assess the truthfulness of information before sharing it on social media or with other students": rawSection5[3],
            "Q9_I am able to_Follow the rules of copyright and give credit for others’ work through proper referencing": rawSection5[4],
            "Q9_I am able to_Distinguish the differences between primary and secondary sources": rawSection5[5],
            "Q10_I am able to_Evaluate content of emails/messages/calls for spam and scam content": rawSection6[0],
            "Q10_I am able to_Protect my personal data in online and offline environments": rawSection6[1],
            "Q10_I am able to_Act positively against others’ damaging online behaviours (e.g., reporting or rejecting cyberbullying)": rawSection6[2],
            "Q10_I am able to_Be considerate of others' privacy when taking video or pictures": rawSection6[3],
            "Q10_I am able to_Adjust the privacy settings of my digital devices and tools": rawSection6[4],
            "Q10_I am able to_Protect my mental, physical, and emotional health when using digital technologies or tools": rawSection6[5]
        });
        
        // page navigation
        setPage0(false);
        setPage1(false);
        setPage2(false);
        setPage3(false);
        setPage4(false);
        setPage5(false);
        setPage6(false);
        setPage7(true);
    }

    function restart()
    {
        // reset the locally stored input values from the user
        let arrayInput = [];
        setSectionsInArray(arrayInput);
        // props.changeSectionsInArray(arrayInput);
        setSection1(0);
        setSection2(0);
        setSection3(0);
        setSection4(0);
        setSection5(0);
        setSection6(0);

        // page navigation back to start
        setPage0(true);
        setPage1(false);
        setPage2(false);
        setPage3(false);
        setPage4(false);
        setPage5(false);
        setPage6(false);
        setPage7(false);
    }

    // pdf exporting the document
    function printDocument() {
        // getting all the images in this page
        const radarImage = document.getElementById('radar');
        const wheel1Image = document.getElementById('wheel-one');
        const wheel2Image = document.getElementById('wheel-two');
        const wheel3Image = document.getElementById('wheel-three');
        const wheel4Image = document.getElementById('wheel-four');
        const wheel5Image = document.getElementById('wheel-five');
        const wheel6Image = document.getElementById('wheel-six');

        const entireResults = document.getElementById('results-wrapper');

        html2canvas(entireResults)
            .then((canvas) => {
                const pdf = new jsPDF();

                // converting radar div const to image
                const imgData = canvas.toDataURL('image/png');

                const imgProps= pdf.getImageProperties(imgData);
                const pdfWidth = pdf.internal.pageSize.getWidth();

                var width = pdf.internal.pageSize.getWidth();
                var height = (imgProps.height * pdfWidth) / imgProps.width;

                pdf.addImage(imgData, 'JPEG', 0, 0, pdfWidth, height);
                pdf.save("digital-capabilities-results.pdf");
            }
        );
    }

    // scroll to the top of the page
    function scrollUp()
    {
        window.scrollTo(0, 0);
    }

    return (
        <div className="input-form">
            {
                page0 === true ? (
                    <form className='form-wrapper'>
                        <div className='survey-section'>
                            <h2>Information Communication Technology (ICT) Proficiency and Productivity</h2>
                        </div>
                        
                        <div className='progress-barz'>
                            <SurveyProgress page={1} />
                        </div>

                        <div className='entry-heading'>
                            <h3>I am able to</h3>
                            <p className='mobile-help-message'>Tip: Swipe left and right on the table to view other options</p>
                        </div>

                        <Questions 
                            surveyQuestions={[
                                'Choose the appropriate digital tools or devices which assist me in reaching my learning goals',
                                'Use digital communication services, tools, and mobile apps (such as email and social networking applications) to communicate with others',
                                'Use software and tools (such as Office 365 and Adobe) to organise, edit, manage, and back up digital documents and files',
                                'Use internet browsers to find the required documents or data',
                                'Perform troubleshooting (i.e., problem-solving) on my computer and digital devices',
                                'Code applications or programs'
                            ]}
                            questionNumber={5}
                        />

                        <button className='button' type="button" onClick={nextPageFrom0}>Next</button>
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

                        <div className='progress-barz'>
                            <SurveyProgress page={2} />
                        </div>
                        
                        <div className='entry-heading'>
                            <h3>I am able to</h3>
                            <p className='mobile-help-message'>Tip: Swipe left and right on the table to view other options</p>
                        </div>

                        <Questions 
                            surveyQuestions={[
                                'Use digital technologies (such as digital calendars/planners) to schedule or plan my study',
                                'Use digital technologies (such as Zoom, Microsoft Teams, BlackBoard or Padlet) to share information with instructors and other students.',
                                'Use digital tools to record learning events (e.g., lectures, tutorials, webinars) or information for later review.',
                                'Sign onto and use the University’s supported platforms (such as BlackBoard, MyUON, the Library databases) to find the required document or data.',
                                'Identify and participate in learning opportunities and courses available in a digital environment (such as YouTube, FutureLearn, and edX online courses).',
                                'Analyse my digital strengths and weaknesses and reflect on my personal learning'
                            ]}
                            questionNumber={6}
                        />
                        
                        <button className='button' type="button" onClick={prevPage}>Back</button>
                        <button className='button' type="button" onClick={nextPageFrom1}>Next</button>
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

                        <div className='progress-barz'>
                            <SurveyProgress page={3} />
                        </div>

                        <div className='entry-heading'>
                            <h3>I am able to</h3>
                            <p className='mobile-help-message'>Tip: Swipe left and right on the table to view other options</p>
                        </div>

                        <Questions 
                            surveyQuestions={[
                                'Use digital tools to edit an image and create a video',
                                'Design and administer online surveys (such as SurveyMonkey, Qualtrics, and Google Docs) to gather qualitative and quantitative data.',
                                'Analyse data using qualitative or quantitative software and digital tools',
                                'Evaluate a problem by gathering appropriate information using digital tools',
                                'Generate a new written and/or visual digital product by comparing and synthesising information that was found elsewhere',
                                'Adapt and integrate a new technology into my learning environment'
                            ]}
                            questionNumber={7}
                        />

                        <button className='button' type="button" onClick={prevPage}>Back</button>
                        <button className='button' type="button" onClick={nextPageFrom2}>Next</button>
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

                        <div className='progress-barz'>
                            <SurveyProgress page={4} />
                        </div>
                        
                        <div className='entry-heading'>
                            <h3>I am able to</h3>
                            <p className='mobile-help-message'>Tip: Swipe left and right on the table to view other options</p>
                        </div>

                        <Questions 
                            surveyQuestions={[
                                'Interact online with people from diverse communities and respect multiple perspectives',
                                'Work remotely with colleagues/students/classmates using online collaborative tools',
                                'Use technology to ask a question or deliver a message in a socially acceptable way (i.e., netiquette rules)',
                                'Contribute to comments in online discussions (online forum, blog or wiki) on social issues encountered in everyday life.',
                                'Find relevant communities and groups online that suit my interests and needs',
                                'Share content and information using social networks (such as Facebook) and collaborative platforms (such as OneDrive, Google Drive, Dropbox, etc.)'
                            ]}
                            questionNumber={8}
                        />

                        <button className='button' type="button" onClick={prevPage}>Back</button>
                        <button className='button' type="button" onClick={nextPageFrom3}>Next</button>
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

                        <div className='progress-barz'>
                            <SurveyProgress page={5} />
                        </div>

                        <div className='entry-heading'>
                            <h3>I am able to</h3>
                            <p className='mobile-help-message'>Tip: Swipe left and right on the table to view other options</p>
                        </div>

                        <Questions 
                            surveyQuestions={[
                                'Receive and respond to messages in a range of digital media (such as text, graphics, video, animation, audio and multimedia)',
                                'Use database applications to enter and retrieve information required for my studies',
                                'Use the filtering and advanced search options in online databases (such as Google Scholar)',
                                'Assess the truthfulness of information before sharing it on social media or with other students',
                                'Follow the rules of copyright and give credit for others’ work through proper referencing',
                                'Distinguish the differences between primary and secondary sources'
                            ]}
                            questionNumber={9}
                        />

                        <button className='button' type="button" onClick={prevPage}>Back</button>
                        <button className='button' type="button" onClick={nextPageFrom4}>Next</button>
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

                        <div className='progress-barz'>
                            <SurveyProgress page={6} />
                        </div>
                        
                        <div className='entry-heading'>
                            <h3>I am able to</h3>
                            <p className='mobile-help-message'>Tip: Swipe left and right on the table to view other options</p>
                        </div>

                        <Questions 
                            surveyQuestions={[
                                'Evaluate content of emails/messages/calls for spam and scam content',
                                'Protect my personal data in online and offline environments',
                                'Act positively against others’ damaging online behaviours (e.g., reporting or rejecting cyberbullying)',
                                'Be considerate of others\' privacy when taking video or pictures',
                                'Adjust the privacy settings of my digital devices and tools',
                                'Protect my mental, physical, and emotional health when using digital technologies or tools'
                            ]}
                            questionNumber={10}
                        />

                        <button className='button' type="button" onClick={prevPage}>Back</button>
                        <button className='button' type="button" onClick={calculate}>Calculate Results</button>
                    </form>
                ) : (
                    null
                )
            }

            {
                page7 === true ? (
                    <div id='form-wrapper'>
                        <div className='chart-wrapper'>                            
                            {/* type of user - calculated */}
                            <UserTypeAndDescription inputData={sectionsInArray} />

                            {/* user description */}
                            <div className='results-information'>
                                <UserDescription inputData={sectionsInArray} />
                            </div>
                        </div>

                        {/* generate radar chart */}
                        <div className='radar' id='radar'>
                            <RadarChart inputData={chartData} />
                        </div>

                        <div className='capabilities-wrapper'>
                            {/* Save results wrap */}
                            <h2 className='results-subheading'>Save Results</h2>
                            <table className='results-table' cellSpacing='0'>
                                <tbody>
                                    {/* download csv file */}
                                    <tr>
                                        <td className='results-shaded-cell'><p className='results-table-text'>Save your results locally on a CSV file to reupload and view in another session.</p></td>
                                        <td className='results-shaded-cell'>
                                            <DownloadCSV chartData={downloadChartData} />
                                        </td>
                                    </tr>
                                    <tr className='dark-border-bottom'>
                                        <td><p className='results-table-text'>Save a PDF print-out of your results with hyperlinks to learning resources intact.</p></td>
                                        <td><button className='button' type="button" onClick={printDocument} >Download PDF</button></td>
                                    </tr>
                                </tbody>
                            </table>
                            <br></br>

                            {/* csv upload */}
                            <div className='csvupload-wrapper'>
                                <h2 className='results-subheading'>Compare Results</h2>
                                <table className='results-table' cellSpacing='0'>
                                    <tbody>
                                        <tr>
                                            <td className='results-shaded-cell'>
                                                <p className='results-table-text'>Reupload your CSV file to compare results from this session and your previous session to track learning and progress.</p>
                                                <UploadCSV onClick={scrollUp}
                                                    changeUploadChartData={uploadedChartData => setUploadedChartData(uploadedChartData)}
                                                />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>                                
                            </div>
                        </div>

                        <div className='capabilities-wrapper'>

                            <h2>Capabilities Breakdown and Resource Links</h2>

                            <div id='wheel-one' className='wheel-1'>
                                <ResultWheel score={sectionsInArray[0]} title='Proficiency &amp; Productivity' />  
                                <ResourceLinks
                                    score={sectionsInArray[0]}

                                    resourceData={[
                                        {
                                            link: 'www.loremipsum.com.au',
                                            label: 'Lorem Ipsum',
                                            weighting: ['Beginner', 'Intermediate']
                                        }
                                    ]}
                                />
                            </div>

                            <div id='wheel-two' className='wheel-2'>
                                <ResultWheel score={sectionsInArray[1]} title='Digital Learning &amp; Development' />
                                <ResourceLinks
                                    score={sectionsInArray[1]}

                                    resourceData={[
                                        {
                                            link: 'www.loremipsum.com.au',
                                            label: 'Lorem Ipsum',
                                            weighting: ['Beginner', 'Intermediate']
                                        }
                                    ]}
                                />
                            </div>

                            <div id='wheel-three' className='wheel-3'>
                                <ResultWheel score={sectionsInArray[2]} title='Digital Creation, Problem Solving &amp; Innovation' />
                                <ResourceLinks
                                    score={sectionsInArray[2]}

                                    resourceData={[
                                        {
                                            link: 'www.loremipsum.com.au',
                                            label: 'Lorem Ipsum',
                                            weighting: ['Beginner', 'Intermediate']
                                        }
                                    ]}
                                />
                            </div>

                            <div id='wheel-four' className='wheel-1'>
                                    <ResultWheel score={sectionsInArray[3]} title='Digital Communication, Collaboration &amp; Participation' />
                                    <ResourceLinks
                                    score={sectionsInArray[3]}

                                    resourceData={[
                                        {
                                            link: 'www.loremipsum.com.au',
                                            label: 'Lorem Ipsum',
                                            weighting: ['Beginner', 'Intermediate']
                                        }
                                    ]}
                                />
                            </div>

                            <div id='wheel-five' className='wheel-2'>
                                <ResultWheel score={sectionsInArray[4]} title='Information Literacy, Data Literacy &amp; Media Literacy' />
                                <ResourceLinks
                                    score={sectionsInArray[4]}

                                    resourceData={[
                                        {
                                            link: 'www.loremipsum.com.au',
                                            label: 'Lorem Ipsum',
                                            weighting: ['Beginner', 'Intermediate']
                                        }
                                    ]}
                                />
                            </div>

                            <div id='wheel-six' className='wheel-3'>
                                <ResultWheel score={sectionsInArray[5]} title='Digital Identity and Wellbeing' />
                                <ResourceLinks
                                    score={sectionsInArray[5]}

                                    resourceData={[
                                        {
                                            link: 'www.loremipsum.com.au',
                                            label: 'Lorem Ipsum',
                                            weighting: ['Beginner', 'Intermediate']
                                        }
                                    ]}
                                />
                            </div>
                        </div>

                        <button className='button' type="button" onClick={restart}>Restart Survey</button>
                    </div>
                ) : (
                    null
                )
            }
            
        </div>
    )
}

export default AssessmentInput;