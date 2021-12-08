// import react and community library
import React from "react";
import { CSVDownloader } from "react-papaparse";

const DownloadCSV = (props) => {

    return(
        <CSVDownloader className='button'

            // headers to generate in the CSV file
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

            // second row (the actual data being processed onto the CSV file)
            props.chartData
            ]}
            type="button"
            filename={'digital-capabilities-results'}
            bom={true}
        >
            Download CSV
        </CSVDownloader>
    )
}

export default DownloadCSV;