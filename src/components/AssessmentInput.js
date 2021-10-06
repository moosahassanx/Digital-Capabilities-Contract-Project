import { useState, useEffect } from 'react';
import React from 'react';
import '../css/AssessmentInput.css'
import { Radar } from "react-chartjs-2";
import UploadCSV from './UploadCSV';
import { CSVDownloader } from 'react-papaparse';
import { Spinner } from 'react-bootstrap';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import UserDescription from './UserDescription';

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
    const [prefix, setPrefix] = useState("an ");

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

        var totalScore = 0;

		sectionsInArray.forEach(element => {
			totalScore = totalScore + element;
		});

		if(totalScore < 72)
		{
            setPrefix("a ");
			setUserType("Beginner");
		}
		else if(totalScore < 108)
		{
            setPrefix("an ");
			setUserType("Elementary");
		}
		else if(totalScore < 144)
		{
            setPrefix("an ");
			setUserType("Intermediate");
		}
		else if(totalScore < 180)
		{
            setPrefix("an ");
			setUserType("Upper-Intermmediate");
		}
		else if(totalScore < 216)
		{
            setPrefix("an ");
			setUserType("Advanced");
		}
		else
		{
            setPrefix("a ");
			setUserType("Proficient");
		}
    }

    useEffect(() => {
        chart()
    }, [sectionsInArray, uploadedChartData])

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

        if(responses.length < 6)
        {
            alert("Please answer all the questions");
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

        if(responses.length < 6)
        {
            alert("Please answer all the questions");
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

        if(responses.length < 6)
        {
            alert("Please answer all the questions");
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

        if(responses.length < 6)
        {
            alert("Please answer all the questions");
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

        if(responses.length < 6)
        {
            alert("Please answer all the questions");       //TODO: find a way to save the users responses so they dont have to redo after clearing form
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

        if(responses.length < 6)
        {
            alert("Please answer all the questions");
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
        // algorithm for calculating user type
        let arrayInput = [];
        arrayInput.push(section1);
        arrayInput.push(section2);
        arrayInput.push(section3);
        arrayInput.push(section4);
        arrayInput.push(section5);
        arrayInput.push(section6);
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

    return (
        <div className="input-form">
            {
                page0 === true ? (
                    <form className='form-wrapper'>
                        <div className='survey-section'>
                            <h2>Information Communication Technology (ICT) Proficiency and Productivity</h2>
                        </div>

                        <div className='progress-bar'>
                            {/* <ProgressingBar bgcolor={'#6a1b9a'} completed={0} /> */}
                            <Progress percent={0} />
                        </div>

                        <div className='entry-heading'>
                            <h3>I am able to</h3>
                        </div>

                        <table cellSpacing='0'>
                            <thead>
                                <tr>
                                    <td><p className='table-header'></p></td>
                                    <td className='border-bottom'><p className='table-header'>Very poor</p></td>
                                    <td className='shaded'><p className='table-header'>Poor</p></td>
                                    <td className='border-bottom'><p className='table-header'>Needs work</p></td>
                                    <td className='shaded'><p className='table-header'>Satisfactory</p></td>
                                    <td className='border-bottom'><p className='table-header'>Good</p></td>
                                    <td className='shaded'><p className='table-header'>Very Good</p></td>
                                    <td className='border-bottom'><p className='table-header'>Excellent</p></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><p className='question'>Choose the appropriate digital tools or devices which assist me in reaching my learning goals</p></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q5-1' value='Very poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q5-1' value='Poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q5-1' value='Needs work'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q5-1' value='Satisfactory'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q5-1' value='Good'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q5-1' value='Very good'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q5-1' value='Excellent'></input><div className='radio__radio'></div></label></td>
                                </tr>
                                <tr>
                                    <td><p className='question'>Use digital communication services, tools, and mobile apps (such as email and social networking applications) to communicate with others</p></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q5-2' value='Very poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q5-2' value='Poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q5-2' value='Needs work'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q5-2' value='Satisfactory'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q5-2' value='Good'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q5-2' value='Very good'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q5-2' value='Excellent'></input><div className='radio__radio'></div></label></td>
                                </tr>
                                <tr>
                                    <td><p className='question'>Use software and tools (such as Office 365 and Adobe) to organise, edit, manage, and back up digital documents and files</p></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q5-3' value='Very poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q5-3' value='Poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q5-3' value='Needs work'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q5-3' value='Satisfactory'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q5-3' value='Good'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q5-3' value='Very good'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q5-3' value='Excellent'></input><div className='radio__radio'></div></label></td>
                                </tr>
                                <tr>
                                    <td><p className='question'>Use internet browsers to find the required documents or data</p></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q5-4' value='Very poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q5-4' value='Poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q5-4' value='Needs work'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q5-4' value='Satisfactory'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q5-4' value='Good'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q5-4' value='Very good'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q5-4' value='Excellent'></input><div className='radio__radio'></div></label></td>
                                </tr>
                                <tr>
                                    <td><p className='question'>Perform troubleshooting (i.e., problem-solving) on my computer and digital devices</p></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q5-5' value='Very poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q5-5' value='Poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q5-5' value='Needs work'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q5-5' value='Satisfactory'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q5-5' value='Good'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q5-5' value='Very good'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q5-5' value='Excellent'></input><div className='radio__radio'></div></label></td>
                                </tr>
                                <tr>
                                    <td><p className='question'>Code applications or programs</p></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q5-6' value='Very poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q5-6' value='Poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q5-6' value='Needs work'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q5-6' value='Satisfactory'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q5-6' value='Good'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q5-6' value='Very good'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q5-6' value='Excellent'></input><div className='radio__radio'></div></label></td>
                                </tr>
                            </tbody>
                        </table>

                        <br></br>

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

                        <div className='progress-bar'>
                            {/* <ProgressingBar bgcolor={'#6a1b9a'} completed={14.286} /> */}
                            <Progress percent={14.286} />
                        </div>
                        
                        <div className='entry-heading'>
                            <h3>I am able to</h3>
                        </div>

                        <table cellSpacing='0'>
                            <thead>
                                <tr>
                                    <td><p className='table-header'></p></td>
                                    <td className='border-bottom'><p className='table-header'>Very poor</p></td>
                                    <td className='shaded'><p className='table-header'>Poor</p></td>
                                    <td className='border-bottom'><p className='table-header'>Needs work</p></td>
                                    <td className='shaded'><p className='table-header'>Satisfactory</p></td>
                                    <td className='border-bottom'><p className='table-header'>Good</p></td>
                                    <td className='shaded'><p className='table-header'>Very Good</p></td>
                                    <td className='border-bottom'><p className='table-header'>Excellent</p></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><p className='question'>Use digital technologies (such as digital calendars/planners) to schedule or plan my study</p></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q6-1' value='Very poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q6-1' value='Poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q6-1' value='Needs work'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q6-1' value='Satisfactory'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q6-1' value='Good'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q6-1' value='Very good'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q6-1' value='Excellent'></input><div className='radio__radio'></div></label></td>
                                </tr>
                                <tr>
                                    <td><p className='question'>Use digital technologies (such as Zoom, Microsoft Teams, BlackBoard or Padlet) to share information with instructors and other students.</p></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q6-2' value='Very poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q6-2' value='Poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q6-2' value='Needs work'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q6-2' value='Satisfactory'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q6-2' value='Good'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q6-2' value='Very good'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q6-2' value='Excellent'></input><div className='radio__radio'></div></label></td>
                                </tr>
                                <tr>
                                    <td><p className='question'>Use digital tools to record learning events (e.g., lectures, tutorials, webinars) or information for later review.</p></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q6-3' value='Very poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q6-3' value='Poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q6-3' value='Needs work'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q6-3' value='Satisfactory'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q6-3' value='Good'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q6-3' value='Very good'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q6-3' value='Excellent'></input><div className='radio__radio'></div></label></td>
                                </tr>
                                <tr>
                                    <td><p className='question'>Sign onto and use the University’s supported platforms (such as BlackBoard, MyUON, the Library databases) to find the required document or data.</p></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q6-4' value='Very poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q6-4' value='Poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q6-4' value='Needs work'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q6-4' value='Satisfactory'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q6-4' value='Good'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q6-4' value='Very good'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q6-4' value='Excellent'></input><div className='radio__radio'></div></label></td>
                                </tr>
                                <tr>
                                    <td><p className='question'>Identify and participate in learning opportunities and courses available in a digital environment (such as YouTube, FutureLearn, and edX online courses).</p></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q6-5' value='Very poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q6-5' value='Poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q6-5' value='Needs work'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q6-5' value='Satisfactory'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q6-5' value='Good'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q6-5' value='Very good'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q6-5' value='Excellent'></input><div className='radio__radio'></div></label></td>
                                </tr>
                                <tr>
                                    <td><p className='question'>Analyse my digital strengths and weaknesses and reflect on my personal learning</p></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q6-6' value='Very poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q6-6' value='Poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q6-6' value='Needs work'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q6-6' value='Satisfactory'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q6-6' value='Good'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q6-6' value='Very good'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q6-6' value='Excellent'></input><div className='radio__radio'></div></label></td>
                                </tr>
                            </tbody>
                        </table>
                        
                        <br></br>
                        
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

                        <div className='progress-bar'>
                            {/* <ProgressingBar bgcolor={'#6a1b9a'} completed={28.571} /> */}
                            <Progress percent={28.571} />
                        </div>

                        <div className='entry-heading'>
                            <h3>I am able to</h3>
                        </div>

                        <table cellSpacing='0'>
                            <thead>
                                <tr>
                                    <td><p className='table-header'></p></td>
                                    <td className='border-bottom'><p className='table-header'>Very poor</p></td>
                                    <td className='shaded'><p className='table-header'>Poor</p></td>
                                    <td className='border-bottom'><p className='table-header'>Needs work</p></td>
                                    <td className='shaded'><p className='table-header'>Satisfactory</p></td>
                                    <td className='border-bottom'><p className='table-header'>Good</p></td>
                                    <td className='shaded'><p className='table-header'>Very Good</p></td>
                                    <td className='border-bottom'><p className='table-header'>Excellent</p></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><p className='question'>Use digital tools to edit an image and create a video</p></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q7-1' value='Very poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q7-1' value='Poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q7-1' value='Needs work'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q7-1' value='Satisfactory'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q7-1' value='Good'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q7-1' value='Very good'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q7-1' value='Excellent'></input><div className='radio__radio'></div></label></td>
                                </tr>
                                <tr>
                                    <td><p className='question'>Design and administer online surveys (such as SurveyMonkey, Qualtrics, and Google Docs) to gather qualitative and quantitative data.</p></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q7-2' value='Very poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q7-2' value='Poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q7-2' value='Needs work'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q7-2' value='Satisfactory'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q7-2' value='Good'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q7-2' value='Very good'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q7-2' value='Excellent'></input><div className='radio__radio'></div></label></td>
                                </tr>
                                <tr>
                                    <td><p className='question'>Analyse data using qualitative or quantitative software and digital tools</p></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q7-3' value='Very poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q7-3' value='Poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q7-3' value='Needs work'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q7-3' value='Satisfactory'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q7-3' value='Good'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q7-3' value='Very good'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q7-3' value='Excellent'></input><div className='radio__radio'></div></label></td>
                                </tr>
                                <tr>
                                    <td><p className='question'>Evaluate a problem by gathering appropriate information using digital tools</p></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q7-4' value='Very poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q7-4' value='Poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q7-4' value='Needs work'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q7-4' value='Satisfactory'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q7-4' value='Good'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q7-4' value='Very good'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q7-4' value='Excellent'></input><div className='radio__radio'></div></label></td>
                                </tr>
                                <tr>
                                    <td><p className='question'>Generate a new written and/or visual digital product by comparing and synthesising information that was found elsewhere</p></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q7-5' value='Very poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q7-5' value='Poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q7-5' value='Needs work'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q7-5' value='Satisfactory'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q7-5' value='Good'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q7-5' value='Very good'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q7-5' value='Excellent'></input><div className='radio__radio'></div></label></td>
                                </tr>
                                <tr>
                                    <td><p className='question'>Adapt and integrate a new technology into my learning environment</p></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q7-6' value='Very poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q7-6' value='Poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q7-6' value='Needs work'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q7-6' value='Satisfactory'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q7-6' value='Good'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q7-6' value='Very good'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q7-6' value='Excellent'></input><div className='radio__radio'></div></label></td>
                                </tr>
                            </tbody>
                        </table>
                        
                        <br></br>

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

                        <div className='progress-bar'>
                            {/* <ProgressingBar bgcolor={'#6a1b9a'} completed={42.857} /> */}
                            <Progress percent={42.857} />
                        </div>
                        
                        <div className='entry-heading'>
                            <h3>I am able to</h3>
                        </div>

                        <table cellSpacing='0'>
                            <thead>
                                <tr>
                                    <td><p className='table-header'></p></td>
                                    <td className='border-bottom'><p className='table-header'>Very poor</p></td>
                                    <td className='shaded'><p className='table-header'>Poor</p></td>
                                    <td className='border-bottom'><p className='table-header'>Needs work</p></td>
                                    <td className='shaded'><p className='table-header'>Satisfactory</p></td>
                                    <td className='border-bottom'><p className='table-header'>Good</p></td>
                                    <td className='shaded'><p className='table-header'>Very Good</p></td>
                                    <td className='border-bottom'><p className='table-header'>Excellent</p></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><p className='question'>Interact online with people from diverse communities and respect multiple perspectives</p></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q8-1' value='Very poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q8-1' value='Poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q8-1' value='Needs work'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q8-1' value='Satisfactory'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q8-1' value='Good'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q8-1' value='Very good'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q8-1' value='Excellent'></input><div className='radio__radio'></div></label></td>
                                </tr>
                                <tr>
                                    <td><p className='question'>Work remotely with colleagues/students/classmates using online collaborative tools</p></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q8-2' value='Very poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q8-2' value='Poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q8-2' value='Needs work'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q8-2' value='Satisfactory'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q8-2' value='Good'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q8-2' value='Very good'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q8-2' value='Excellent'></input><div className='radio__radio'></div></label></td>
                                </tr>
                                <tr>
                                    <td><p className='question'>Use technology to ask a question or deliver a message in a socially acceptable way (i.e., netiquette rules)</p></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q8-3' value='Very poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q8-3' value='Poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q8-3' value='Needs work'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q8-3' value='Satisfactory'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q8-3' value='Good'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q8-3' value='Very good'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q8-3' value='Excellent'></input><div className='radio__radio'></div></label></td>
                                </tr>
                                <tr>
                                    <td><p className='question'>Contribute to comments in online discussions (online forum, blog or wiki) on social issues encountered in everyday life.</p></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q8-4' value='Very poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q8-4' value='Poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q8-4' value='Needs work'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q8-4' value='Satisfactory'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q8-4' value='Good'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q8-4' value='Very good'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q8-4' value='Excellent'></input><div className='radio__radio'></div></label></td>
                                </tr>
                                <tr>
                                    <td><p className='question'>Find relevant communities and groups online that suit my interests and needs</p></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q8-5' value='Very poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q8-5' value='Poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q8-5' value='Needs work'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q8-5' value='Satisfactory'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q8-5' value='Good'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q8-5' value='Very good'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q8-5' value='Excellent'></input><div className='radio__radio'></div></label></td>
                                </tr>
                                <tr>
                                    <td><p className='question'>Share content and information using social networks (such as Facebook) and collaborative platforms (such as OneDrive, Google Drive, Dropbox, etc.)</p></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q8-6' value='Very poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q8-6' value='Poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q8-6' value='Needs work'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q8-6' value='Satisfactory'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q8-6' value='Good'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q8-6' value='Very good'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q8-6' value='Excellent'></input><div className='radio__radio'></div></label></td>
                                </tr>
                            </tbody>
                        </table>
                        
                        <br></br>

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

                        <div className='progress-bar'>
                            {/* <ProgressingBar bgcolor={'#6a1b9a'} completed={57.143} /> */}
                            <Progress percent={57.143} />
                        </div>

                        <div className='entry-heading'>
                            <h3>I am able to</h3>
                        </div>

                        <table cellSpacing='0'>
                            <thead>
                                <tr>
                                    <td><p className='table-header'></p></td>
                                    <td className='border-bottom'><p className='table-header'>Very poor</p></td>
                                    <td className='shaded'><p className='table-header'>Poor</p></td>
                                    <td className='border-bottom'><p className='table-header'>Needs work</p></td>
                                    <td className='shaded'><p className='table-header'>Satisfactory</p></td>
                                    <td className='border-bottom'><p className='table-header'>Good</p></td>
                                    <td className='shaded'><p className='table-header'>Very Good</p></td>
                                    <td className='border-bottom'><p className='table-header'>Excellent</p></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><p className='question'>Receive and respond to messages in a range of digital media (such as text, graphics, video, animation, audio and multimedia)</p></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q9-1' value='Very poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q9-1' value='Poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q9-1' value='Needs work'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q9-1' value='Satisfactory'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q9-1' value='Good'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q9-1' value='Very good'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q9-1' value='Excellent'></input><div className='radio__radio'></div></label></td>
                                </tr>
                                <tr>
                                    <td><p className='question'>Use database applications to enter and retrieve information required for my studies</p></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q9-2' value='Very poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q9-2' value='Poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q9-2' value='Needs work'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q9-2' value='Satisfactory'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q9-2' value='Good'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q9-2' value='Very good'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q9-2' value='Excellent'></input><div className='radio__radio'></div></label></td>
                                </tr>
                                <tr>
                                    <td><p className='question'>Use the filtering and advanced search options in online databases (such as Google Scholar)</p></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q9-3' value='Very poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q9-3' value='Poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q9-3' value='Needs work'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q9-3' value='Satisfactory'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q9-3' value='Good'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q9-3' value='Very good'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q9-3' value='Excellent'></input><div className='radio__radio'></div></label></td>
                                </tr>
                                <tr>
                                    <td><p className='question'>Assess the truthfulness of information before sharing it on social media or with other students</p></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q9-4' value='Very poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q9-4' value='Poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q9-4' value='Needs work'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q9-4' value='Satisfactory'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q9-4' value='Good'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q9-4' value='Very good'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q9-4' value='Excellent'></input><div className='radio__radio'></div></label></td>
                                </tr>
                                <tr>
                                    <td><p className='question'>Follow the rules of copyright and give credit for others’ work through proper referencing</p></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q9-5' value='Very poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q9-5' value='Poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q9-5' value='Needs work'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q9-5' value='Satisfactory'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q9-5' value='Good'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q9-5' value='Very good'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q9-5' value='Excellent'></input><div className='radio__radio'></div></label></td>
                                </tr>
                                <tr>
                                    <td><p className='question'>Distinguish the differences between primary and secondary sources</p></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q9-6' value='Very poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q9-6' value='Poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q9-6' value='Needs work'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q9-6' value='Satisfactory'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q9-6' value='Good'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q9-6' value='Very good'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q9-6' value='Excellent'></input><div className='radio__radio'></div></label></td>
                                </tr>
                            </tbody>
                        </table>

                        <br></br>

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

                        <div className='progress-bar'>
                            {/* <ProgressingBar bgcolor={'#6a1b9a'} completed={71.429} /> */}
                            <Progress percent={71.429} />
                        </div>
                        
                        <div className='entry-heading'>
                            <h3>I am able to</h3>
                        </div>

                        <table cellSpacing='0'>
                            <thead>
                                <tr>
                                    <td><p className='table-header'></p></td>
                                    <td className='border-bottom'><p className='table-header'>Very poor</p></td>
                                    <td className='shaded'><p className='table-header'>Poor</p></td>
                                    <td className='border-bottom'><p className='table-header'>Needs work</p></td>
                                    <td className='shaded'><p className='table-header'>Satisfactory</p></td>
                                    <td className='border-bottom'><p className='table-header'>Good</p></td>
                                    <td className='shaded'><p className='table-header'>Very Good</p></td>
                                    <td className='border-bottom'><p className='table-header'>Excellent</p></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><p className='question'>Evaluate content of emails/messages/calls for spam and scam content</p></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q10-1' value='Very poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q10-1' value='Poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q10-1' value='Needs work'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q10-1' value='Satisfactory'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q10-1' value='Good'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q10-1' value='Very good'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q10-1' value='Excellent'></input><div className='radio__radio'></div></label></td>
                                </tr>
                                <tr>
                                    <td><p className='question'>Protect my personal data in online and offline environments</p></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q10-2' value='Very poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q10-2' value='Poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q10-2' value='Needs work'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q10-2' value='Satisfactory'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q10-2' value='Good'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q10-2' value='Very good'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q10-2' value='Excellent'></input><div className='radio__radio'></div></label></td>
                                </tr>
                                <tr>
                                    <td><p className='question'>Act positively against others’ damaging online behaviours (e.g., reporting or rejecting cyberbullying)</p></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q10-3' value='Very poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q10-3' value='Poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q10-3' value='Needs work'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q10-3' value='Satisfactory'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q10-3' value='Good'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q10-3' value='Very good'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q10-3' value='Excellent'></input><div className='radio__radio'></div></label></td>
                                </tr>
                                <tr>
                                    <td><p className='question'>Be considerate of others' privacy when taking video or pictures</p></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q10-4' value='Very poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q10-4' value='Poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q10-4' value='Needs work'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q10-4' value='Satisfactory'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q10-4' value='Good'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q10-4' value='Very good'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q10-4' value='Excellent'></input><div className='radio__radio'></div></label></td>
                                </tr>
                                <tr>
                                    <td><p className='question'>Adjust the privacy settings of my digital devices and tools</p></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q10-5' value='Very poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q10-5' value='Poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q10-5' value='Needs work'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q10-5' value='Satisfactory'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q10-5' value='Good'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q10-5' value='Very good'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q10-5' value='Excellent'></input><div className='radio__radio'></div></label></td>
                                </tr>
                                <tr>
                                    <td><p className='question'>Protect my mental, physical, and emotional health when using digital technologies or tools</p></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q10-6' value='Very poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q10-6' value='Poor'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q10-6' value='Needs work'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q10-6' value='Satisfactory'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q10-6' value='Good'></input><div className='radio__radio'></div></label></td>
                                    <td className='shaded'><label className='radio'><input className='radio__input' type='radio' name='Q10-6' value='Very good'></input><div className='radio__radio'></div></label></td>
                                    <td className='border-bottom'><label className='radio'><input className='radio__input' type='radio' name='Q10-6' value='Excellent'></input><div className='radio__radio'></div></label></td>
                                </tr>
                            </tbody>
                        </table>
                        
                        <br></br>

                        <button className='button' type="button" onClick={prevPage}>Back</button>
                        <button className='button' type="button" onClick={nextPageFrom5}>Next</button>
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

                        <div className='progress-bar'>
                            {/* <ProgressingBar bgcolor={'#6a1b9a'} completed={85.714} /> */}
                            <Progress percent={85.714} />
                        </div>

                        <div className='entry-heading'>
                            <h3>Review your responses</h3>
                        </div>

                        <table>
                            <tbody>
                                {/* Section 1 */}
                                <tr>
                                    <td><p className='question-summary'>Choose the appropriate digital tools or devices which assist me in reaching my learning goals: </p></td>
                                    <td><p className='answer-summary'>{rawSection1[0]}</p></td>
                                </tr>
                                <tr>
                                    <td><p className='question-summary'>Use digital communication services, tools, and mobile apps (such as email and social networking applications) to communicate with others</p></td>
                                    <td><p className='answer-summary'>{rawSection1[1]}</p></td>
                                </tr>
                                <tr>
                                    <td><p className='question-summary'>Use software and tools (such as Office 365 and Adobe) to organise, edit, manage, and back up digital documents and files</p></td>
                                    <td><p className='answer-summary'>{rawSection1[2]}</p></td>
                                </tr>
                                <tr>
                                    <td><p className='question-summary'>Use internet browsers to find the required documents or data</p></td>
                                    <td><p className='answer-summary'>{rawSection1[3]}</p></td>
                                </tr>
                                <tr>
                                    <td><p className='question-summary'>Perform troubleshooting (i.e., problem-solving) on my computer and digital devices</p></td>
                                    <td><p className='answer-summary'>{rawSection1[4]}</p></td>
                                </tr>
                                <tr>
                                    <td><p className='question-summary'>Code applications or programs</p></td>
                                    <td><p className='answer-summary'>{rawSection1[5]}</p></td>
                                </tr>

                                {/* Section 2 */}
                                <tr>
                                    <td><p className='question-summary'>Use digital technologies (such as digital calendars/planners) to schedule or plan my study</p></td>
                                    <td><p className='answer-summary'>{rawSection2[0]}</p></td>
                                </tr>
                                <tr>
                                    <td><p className='question-summary'>Use digital technologies (such as Zoom, Microsoft Teams, BlackBoard or Padlet) to share information with instructors and other students.</p></td>
                                    <td><p className='answer-summary'>{rawSection2[1]}</p></td>
                                </tr>
                                <tr>
                                    <td><p className='question-summary'>Use digital tools to record learning events (e.g., lectures, tutorials, webinars) or information for later review.</p></td>
                                    <td><p className='answer-summary'>{rawSection2[2]}</p></td>
                                </tr>
                                <tr>
                                    <td><p className='question-summary'>Sign onto and use the University’s supported platforms (such as BlackBoard, MyUON, the Library databases) to find the required document or data.</p></td>
                                    <td><p className='answer-summary'>{rawSection2[3]}</p></td>
                                </tr>
                                <tr>
                                    <td><p className='question-summary'>Identify and participate in learning opportunities and courses available in a digital environment (such as YouTube, FutureLearn, and edX online courses).</p></td>
                                    <td><p className='answer-summary'>{rawSection2[4]}</p></td>
                                </tr>
                                <tr>
                                    <td><p className='question-summary'>Analyse my digital strengths and weaknesses and reflect on my personal learning</p></td>
                                    <td><p className='answer-summary'>{rawSection2[5]}</p></td>
                                </tr>

                                {/* Section 3 */}
                                <tr>
                                    <td><p className='question-summary'>Use digital tools to edit an image and create a video</p></td>
                                    <td><p className='answer-summary'>{rawSection3[0]}</p></td>
                                </tr>
                                <tr>
                                    <td><p className='question-summary'>Design and administer online surveys (such as SurveyMonkey, Qualtrics, and Google Docs) to gather qualitative and quantitative data.</p></td>
                                    <td><p className='answer-summary'>{rawSection3[1]}</p></td>
                                </tr>
                                <tr>
                                    <td><p className='question-summary'>Analyse data using qualitative or quantitative software and digital tools</p></td>
                                    <td><p className='answer-summary'>{rawSection3[2]}</p></td>
                                </tr>
                                <tr>
                                    <td><p className='question-summary'>Evaluate a problem by gathering appropriate information using digital tools</p></td>
                                    <td><p className='answer-summary'>{rawSection3[3]}</p></td>
                                </tr>
                                <tr>
                                    <td><p className='question-summary'>Generate a new written and/or visual digital product by comparing and synthesising information that was found elsewhere</p></td>
                                    <td><p className='answer-summary'>{rawSection3[4]}</p></td>
                                </tr>
                                <tr>
                                    <td><p className='question-summary'>Adapt and integrate a new technology into my learning environment</p></td>
                                    <td><p className='answer-summary'>{rawSection3[5]}</p></td>
                                </tr>

                                {/* Section 4 */}
                                <tr>
                                    <td><p className='question-summary'>Interact online with people from diverse communities and respect multiple perspectives</p></td>
                                    <td><p className='answer-summary'>{rawSection3[0]}</p></td>
                                </tr>
                                <tr>
                                    <td><p className='question-summary'>Work remotely with colleagues/students/classmates using online collaborative tools</p></td>
                                    <td><p className='answer-summary'>{rawSection3[1]}</p></td>
                                </tr>
                                <tr>
                                    <td><p className='question-summary'>Use technology to ask a question or deliver a message in a socially acceptable way (i.e., netiquette rules)</p></td>
                                    <td><p className='answer-summary'>{rawSection3[2]}</p></td>
                                </tr>
                                <tr>
                                    <td><p className='question-summary'>Contribute to comments in online discussions (online forum, blog or wiki) on social issues encountered in everyday life.</p></td>
                                    <td><p className='answer-summary'>{rawSection3[3]}</p></td>
                                </tr>
                                <tr>
                                    <td><p className='question-summary'>Find relevant communities and groups online that suit my interests and needs</p></td>
                                    <td><p className='answer-summary'>{rawSection3[4]}</p></td>
                                </tr>
                                <tr>
                                    <td><p className='question-summary'>Share content and information using social networks (such as Facebook) and collaborative platforms (such as OneDrive, Google Drive, Dropbox, etc.)</p></td>
                                    <td><p className='answer-summary'>{rawSection3[5]}</p></td>
                                </tr>

                                {/* Section 5 */}
                                <tr>
                                    <td><p className='question-summary'>Receive and respond to messages in a range of digital media (such as text, graphics, video, animation, audio and multimedia)</p></td>
                                    <td><p className='answer-summary'>{rawSection4[0]}</p></td>
                                </tr>
                                <tr>
                                    <td><p className='question-summary'>Use database applications to enter and retrieve information required for my studies</p></td>
                                    <td><p className='answer-summary'>{rawSection4[1]}</p></td>
                                </tr>
                                <tr>
                                    <td><p className='question-summary'>Use the filtering and advanced search options in online databases (such as Google Scholar)</p></td>
                                    <td><p className='answer-summary'>{rawSection4[2]}</p></td>
                                </tr>
                                <tr>
                                    <td><p className='question-summary'>Assess the truthfulness of information before sharing it on social media or with other students</p></td>
                                    <td><p className='answer-summary'>{rawSection4[3]}</p></td>
                                </tr>
                                <tr>
                                    <td><p className='question-summary'>Follow the rules of copyright and give credit for others’ work through proper referencing</p></td>
                                    <td><p className='answer-summary'>{rawSection4[4]}</p></td>
                                </tr>
                                <tr>
                                    <td><p className='question-summary'>Distinguish the differences between primary and secondary sources</p></td>
                                    <td><p className='answer-summary'>{rawSection4[5]}</p></td>
                                </tr>

                                {/* Section 6 */}
                                <tr>
                                    <td><p className='question-summary'>Evaluate content of emails/messages/calls for spam and scam content</p></td>
                                    <td><p className='answer-summary'>{rawSection5[0]}</p></td>
                                </tr>
                                <tr>
                                    <td><p className='question-summary'>Protect my personal data in online and offline environments</p></td>
                                    <td><p className='answer-summary'>{rawSection5[1]}</p></td>
                                </tr>
                                <tr>
                                    <td><p className='question-summary'>Act positively against others’ damaging online behaviours (e.g., reporting or rejecting cyberbullying)</p></td>
                                    <td><p className='answer-summary'>{rawSection5[2]}</p></td>
                                </tr>
                                <tr>
                                    <td><p className='question-summary'>Be considerate of others' privacy when taking video or pictures</p></td>
                                    <td><p className='answer-summary'>{rawSection5[3]}</p></td>
                                </tr>
                                <tr>
                                    <td><p className='question-summary'>Adjust the privacy settings of my digital devices and tools</p></td>
                                    <td><p className='answer-summary'>{rawSection5[4]}</p></td>
                                </tr>
                                <tr>
                                    <td><p className='question-summary'>Protect my mental, physical, and emotional health when using digital technologies or tools</p></td>
                                    <td><p className='answer-summary'>{rawSection5[5]}</p></td>
                                </tr>
                            </tbody>
                        </table>

                        <button className='button' type="button" onClick={prevPage}>Back</button>
                        <button className='button' type="button" onClick={calculate}>Calculate Results</button>
                    </form>
                ) : (
                    null
                )
            }

            {
                page7 === true ? (
                    <div>
                        <div className='chart-wrapper'>
                            <h2>Results</h2>
                            
                            <h4>You are {prefix}<span className='user-type'>{userType}</span> user.</h4>

                            <div className='radar'>
                                <Radar data = {chartData} options={{
                                    type: "radar",
                                    responsive: true,
                                    title: {text: 'CHART TITLE', display: true},
                                    scale: {
                                        ticks: {
                                            beginAtZero: true,
                                            max: 45,
                                            min: 0
                                        }
                                    }
                                }} />
                            </div>
                            <div className='results-information'>
                                <p>testing user type component placeholder will be here</p>
                                <UserDescription sections={sectionsInArray} />
                            </div>
                            
                            <div className='csv-download'>
                                <CSVDownloader className='button'
                                    data={[
                                    {
                                        "Raters Group": "GroupCaption",
                                        "Rater ID": "RaterID",
                                        "First Name": "Rater_FirstName",
                                        "Last Name": "Rater_LastName",
                                        "Email": "Rater_FullEmail",
                                        "Mobile Number": "Rater_FullCell",
                                        "Q1_Gender_Gender": "Q2Row1",
                                        "Q2_Age_Age": "Q3Row1",
                                        "Q3_I'm a_I'm a": "Q4Row1",
                                        "Q4_I'm a student at the school of_I'm a student at the school of": "Q5Row1",
                                        "Q4_I'm a student at the school of_I'm a student at the school of_Comments": "Q5Comment1",
                                        "Q5_I am able to_Choose the appropriate digital tools or devices which assist me in reaching my learning goals": "Q8Row1",
                                        "Q5_I am able to_Use digital communication services, tools, and mobile apps (such as email and social networking applications) to communicate with others": "Q8Row2",
                                        "Q5_I am able to_Use software and tools (such as Office 365 and Adobe) to organise, edit, manage, and back up digital documents and files.": "Q8Row3",
                                        "Q5_I am able to_Use internet browsers to find the required documents or data": "Q8Row4",
                                        "Q5_I am able to_Perform troubleshooting (i.e., problem-solving) on my computer and digital devices": "Q8Row5",
                                        "Q5_I am able to_Code applications or programs": "Q8Row6",
                                        "Q6_I am able to_Use digital technologies (such as digital calendars/planners) to schedule or plan my study": "Q11Row1",
                                        "Q6_I am able to_Use digital technologies (such as Zoom, Microsoft Teams, BlackBoard or Padlet) to share information with instructors and other students.": "Q11Row2",
                                        "Q6_I am able to_Use digital tools to record learning events (e.g., lectures, tutorials, webinars) or information for later review": "Q11Row3",
                                        "Q6_I am able to_Sign onto and use the University’s supported platforms (such as BlackBoard, MyUON, the Library databases) to find the required document or data.": "Q11Row4",
                                        "Q6_I am able to_Identify and participate in learning opportunities and courses available in a digital environment (such as YouTube, FutureLearn, and edX online courses).": "Q11Row5",
                                        "Q6_I am able to_Analyse my digital strengths and weaknesses and reflect on my personal learning": "Q11Row6",
                                        "Q7_I am able to_Use digital tools to edit an image and create a video": "Q14Row1",
                                        "Q7_I am able to_Sesign and administer online surveys (such as SurveyMonkey, Qualtrics, and Google Docs) to gather qualitative and quantitative data.": "Q14Row2",
                                        "Q7_I am able to_Analyse data using qualitative or quantitative software and digital tools": "Q14Row3",
                                        "Q7_I am able to_Evaluate a problem by gathering appropriate information using digital tools": "Q14Row4",
                                        "Q7_I am able to_Generate a new written and/or visual digital product by comparing and synthesising information that was found elsewhere": "Q14Row5",
                                        "Q7_I am able to_Adapt and integrate a new technology into my learning environment": "Q14Row6",
                                        "Q8_I am able to_Interact online with people from diverse communities and respect multiple perspect": "Q20Row1",
                                        "Q8_I am able to_Work remotely with colleagues/students/classmates using online collaborative tools": "Q20Row2",
                                        "Q8_I am able to_Use technology to ask a question or deliver a message in a socially acceptable way (i.e., netiquette rules)": "Q20Row3",
                                        "Q8_I am able to_Contribute to comments in online discussions (online forum, blog or wiki) on social issues encountered in everyday life.": "Q20Row4",
                                        "Q8_I am able to_Find relevant communities and groups online that suit my interests and needs": "Q20Row5",
                                        "Q8_I am able to_Share content and information using social networks (such as Facebook) and collaborative platforms (such as OneDrive, Google Drive, Dropbox, etc.)": "Q20Row6",
                                        "Q9_I am able to_Receive and respond to messages in a range of digital media (such as text, graphics, video, animation, audio and multimedia)": "Q23Row1",
                                        "Q9_I am able to_Database applications to enter and retrieve information required for my studies": "Q23Row2",
                                        "Q9_I am able to_The filtering and advanced search options in online databases (such as Google Scholar)": "Q23Row3",
                                        "Q9_I am able to_Assess the truthfulness of information before sharing it on social media or with other students": "Q23Row4",
                                        "Q9_I am able to_Follow the rules of copyright and give credit for others’ work through proper referencing": "Q23Row5",
                                        "Q9_I am able to_Distinguish the differences between primary and secondary sources": "Q23Row6",
                                        "Q10_I am able to_Evaluate content of emails/messages/calls for spam and scam content": "Q26Row1",
                                        "Q10_I am able to_Protect my personal data in online and offline environments": "Q26Row2",
                                        "Q10_I am able to_Act positively against others’ damaging online behaviours (e.g., reporting or rejecting cyberbullying)": "Q26Row3",
                                        "Q10_I am able to_Be considerate of others' privacy when taking video or pictures": "Q26Row4",
                                        "Q10_I am able to_Adjust the privacy settings of my digital devices and tools": "Q26Row5",
                                        "Q10_I am able to_Protect my mental, physical, and emotional health when using digital technologies or tools": "Q26Row6"
                                    },
                                    downloadChartData
                                    ]}
                                    type="button"
                                    filename={'filenameTest'}
                                    bom={true}
                                >
                                    Download CSV File
                                </CSVDownloader>
                            </div>

                            <div className='csv-upload'>
                                <UploadCSV
                                    changeUploadChartData={uploadedChartData => setUploadedChartData(uploadedChartData)}
                                />
                            </div>

                            <button className='button' type="button" onClick={restart}>Restart Survey</button>
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