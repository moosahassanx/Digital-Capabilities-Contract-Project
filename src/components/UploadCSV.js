import React from "react";
import CSVReader from "react-csv-reader";
import { useState, useEffect } from 'react';

// https://www.npmjs.com/package/react-csv-reader
// https://github.com/cluemediator/read-csv-file-react/blob/master/src/App.js

const UploadCSV = (props) => {

  const handleForce = (data, fileInfo) => setResults(data);

  const [data, setData] = useState({});
  const [results, setResults] = useState([]);

  // this is the function which executes every time there is an update on the use state
  useEffect(() => {
    props.changeUploadChartData(data);
  }, [data])

  // reading the csv file
  const papaparseOptions = {
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: header => header.toLowerCase().replace(/\W/g, "_")
  };

  function generateValues(props)
  {
    var userValues = results[1];          // get the second column of the csv array

    // no csv file was uploaded (or corruption in file)
    if(userValues === undefined)
    {
      alert("Please upload CSV File before comparing results.");
      return;
    }
    
    // array string values from the user, this will be converted into values using the use-effect function
    let inputStringsQ5 = [];
    let inputStringsQ6 = [];
    let inputStringsQ7 = [];
    let inputStringsQ8 = [];
    let inputStringsQ9 = [];
    let inputStringsQ10 = [];

    // question 5 - Proficiency and Productivity
    inputStringsQ5.push(userValues.q5_i_am_able_to_choose_the_appropriate_digital_tools_or_devices_which_assist_me_in_reaching_my_learning_goals);
    inputStringsQ5.push(userValues.q5_i_am_able_to_code_applications_or_programs);
    inputStringsQ5.push(userValues.q5_i_am_able_to_perform_troubleshooting__i_e___problem_solving__on_my_computer_and_digital_devices);
    inputStringsQ5.push(userValues.q5_i_am_able_to_use_digital_communication_services__tools__and_mobile_apps__such_as_email_and_social_networking_applications__to_communicate_with_others);
    inputStringsQ5.push(userValues.q5_i_am_able_to_use_internet_browsers_to_find_the_required_documents_or_data);
    inputStringsQ5.push(userValues.q5_i_am_able_to_use_software_and_tools__such_as_office_365_and_adobe__to_organise__edit__manage__and_back_up_digital_documents_and_files_);

    // question 6 - Digital Learning and Development
    inputStringsQ6.push(userValues.q6_i_am_able_to_analyse_my_digital_strengths_and_weaknesses_and_reflect_on_my_personal_learning);
    inputStringsQ6.push(userValues.q6_i_am_able_to_identify_and_participate_in_learning_opportunities_and_courses_available_in_a_digital_environment__such_as_youtube__futurelearn__and_edx_online_courses__);
    inputStringsQ6.push(userValues.q6_i_am_able_to_sign_onto_and_use_the_university_s_supported_platforms__such_as_blackboard__myuon__the_library_databases__to_find_the_required_document_or_data_);
    inputStringsQ6.push(userValues.q6_i_am_able_to_use_digital_technologies__such_as_digital_calendars_planners__to_schedule_or_plan_my_study);
    inputStringsQ6.push(userValues.q6_i_am_able_to_use_digital_technologies__such_as_zoom__microsoft_teams__blackboard_or_padlet__to_share_information_with_instructors_and_other_students_);
    inputStringsQ6.push(userValues.q6_i_am_able_to_use_digital_tools_to_record_learning_events__e_g___lectures__tutorials__webinars__or_information_for_later_review);

    // question 7 - Digital Creation, Problem Solving and Innocation
    inputStringsQ7.push(userValues.q7_i_am_able_to_adapt_and_integrate_a_new_technology_into_my_learning_environment);
    inputStringsQ7.push(userValues.q7_i_am_able_to_analyse_data_using_qualitative_or_quantitative_software_and_digital_tools);
    inputStringsQ7.push(userValues.q7_i_am_able_to_evaluate_a_problem_by_gathering_appropriate_information_using_digital_tools);
    inputStringsQ7.push(userValues.q7_i_am_able_to_generate_a_new_written_and_or_visual_digital_product_by_comparing_and_synthesising_information_that_was_found_elsewhere);
    inputStringsQ7.push(userValues.q7_i_am_able_to_sesign_and_administer_online_surveys__such_as_surveymonkey__qualtrics__and_google_docs__to_gather_qualitative_and_quantitative_data_);
    inputStringsQ7.push(userValues.q7_i_am_able_to_use_digital_tools_to_edit_an_image_and_create_a_video);

    // question 8 - Digital Communication, Collaboration and Participation
    inputStringsQ8.push(userValues.q8_i_am_able_to_contribute_to_comments_in_online_discussions__online_forum__blog_or_wiki__on_social_issues_encountered_in_everyday_life_);
    inputStringsQ8.push(userValues.q8_i_am_able_to_find_relevant_communities_and_groups_online_that_suit_my_interests_and_needs);
    inputStringsQ8.push(userValues.q8_i_am_able_to_interact_online_with_people_from_diverse_communities_and_respect_multiple_perspect);
    inputStringsQ8.push(userValues.q8_i_am_able_to_share_content_and_information_using_social_networks__such_as_facebook__and_collaborative_platforms__such_as_onedrive__google_drive__dropbox__etc__);
    inputStringsQ8.push(userValues.q8_i_am_able_to_use_technology_to_ask_a_question_or_deliver_a_message_in_a_socially_acceptable_way__i_e___netiquette_rules_);
    inputStringsQ8.push(userValues.q8_i_am_able_to_work_remotely_with_colleagues_students_classmates_using_online_collaborative_tools);

    // question 9 - Information Literacy, Data Literacy and Media Literacy
    inputStringsQ9.push(userValues.q9_i_am_able_to_assess_the_truthfulness_of_information_before_sharing_it_on_social_media_or_with_other_students);
    inputStringsQ9.push(userValues.q9_i_am_able_to_database_applications_to_enter_and_retrieve_information_required_for_my_studies);
    inputStringsQ9.push(userValues.q9_i_am_able_to_distinguish_the_differences_between_primary_and_secondary_sources);
    inputStringsQ9.push(userValues.q9_i_am_able_to_follow_the_rules_of_copyright_and_give_credit_for_others__work_through_proper_referencing);
    inputStringsQ9.push(userValues.q9_i_am_able_to_receive_and_respond_to_messages_in_a_range_of_digital_media__such_as_text__graphics__video__animation__audio_and_multimedia_);
    inputStringsQ9.push(userValues.q9_i_am_able_to_the_filtering_and_advanced_search_options_in_online_databases__such_as_google_scholar_);

    // question 10 - Digital Identity and Wellbeing
    inputStringsQ10.push(userValues.q10_i_am_able_to_act_positively_against_others__damaging_online_behaviours__e_g___reporting_or_rejecting_cyberbullying_);
    inputStringsQ10.push(userValues.q10_i_am_able_to_adjust_the_privacy_settings_of_my_digital_devices_and_tools);
    inputStringsQ10.push(userValues.q10_i_am_able_to_be_considerate_of_others__privacy_when_taking_video_or_pictures);
    inputStringsQ10.push(userValues.q10_i_am_able_to_evaluate_content_of_emails_messages_calls_for_spam_and_scam_content);
    inputStringsQ10.push(userValues.q10_i_am_able_to_protect_my_mental__physical__and_emotional_health_when_using_digital_technologies_or_tools);
    inputStringsQ10.push(userValues.q10_i_am_able_to_protect_my_personal_data_in_online_and_offline_environments);

    // ========= calculating values to send to parent hook component =========
    // Q5 calculations
    var valueQ5 = 0;
    inputStringsQ5.forEach(element => {
      switch(element)
      {
        case 'Very poor':
          valueQ5 = valueQ5 + 1;
          break;
        case 'Poor':
          valueQ5 = valueQ5 + 2;
          break;
        case 'Needs work':
          valueQ5 = valueQ5 + 3;
          break;
        case 'Satisfactory':
          valueQ5 = valueQ5 + 4;
          break;
        case 'Good':
          valueQ5 = valueQ5 + 5;
          break;
        case 'Very good':
          valueQ5 = valueQ5 + 6;
          break;
        case 'Excellent':
          valueQ5 = valueQ5 + 7;
          break;
        default:
          console.log("ERROR: Unexpect value - CSV file has been tampered.");
          break;
      }
    });
    console.log("valueQ5: " + valueQ5);

    // Q6 calculations
    var valueQ6 = 0;
    inputStringsQ6.forEach(element => {
      switch(element)
      {
        case 'Very poor':
          valueQ6 = valueQ6 + 1;
          break;
        case 'Poor':
          valueQ6 = valueQ6 + 2;
          break;
        case 'Needs work':
          valueQ6 = valueQ6 + 3;
          break;
        case 'Satisfactory':
          valueQ6 = valueQ6 + 4;
          break;
        case 'Good':
          valueQ6 = valueQ6 + 5;
          break;
        case 'Very good':
          valueQ6 = valueQ6 + 6;
          break;
        case 'Excellent':
          valueQ6 = valueQ6 + 7;
          break;
        default:
          console.log("ERROR: Unexpect value - CSV file has been tampered.");
          break;
      }
    });
    console.log("valueQ6: " + valueQ6);

    // Q7 calculations
    var valueQ7 = 0;
    inputStringsQ7.forEach(element => {
      switch(element)
      {
        case 'Very poor':
          valueQ7 = valueQ7 + 1;
          break;
        case 'Poor':
          valueQ7 = valueQ7 + 2;
          break;
        case 'Needs work':
          valueQ7 = valueQ7 + 3;
          break;
        case 'Satisfactory':
          valueQ7 = valueQ7 + 4;
          break;
        case 'Good':
          valueQ7 = valueQ7 + 5;
          break;
        case 'Very good':
          valueQ7 = valueQ7 + 6;
          break;
        case 'Excellent':
          valueQ7 = valueQ7 + 7;
          break;
        default:
          console.log("ERROR: Unexpect value - CSV file has been tampered.");
          break;
      }
    });
    console.log("valueQ7: " + valueQ7);

    // Q8 calculations
    var valueQ8 = 0;
    inputStringsQ8.forEach(element => {
      switch(element)
      {
        case 'Very poor':
          valueQ8 = valueQ8 + 1;
          break;
        case 'Poor':
          valueQ8 = valueQ8 + 2;
          break;
        case 'Needs work':
          valueQ8 = valueQ8 + 3;
          break;
        case 'Satisfactory':
          valueQ8 = valueQ8 + 4;
          break;
        case 'Good':
          valueQ8 = valueQ8 + 5;
          break;
        case 'Very good':
          valueQ8 = valueQ8 + 6;
          break;
        case 'Excellent':
          valueQ8 = valueQ8 + 7;
          break;
        default:
          console.log("ERROR: Unexpect value - CSV file has been tampered.");
          break;
      }
    });
    console.log("valueQ8: " + valueQ8);

    // Q9 calculations
    var valueQ9 = 0;
    inputStringsQ9.forEach(element => {
      switch(element)
      {
        case 'Very poor':
          valueQ9 = valueQ9 + 1;
          break;
        case 'Poor':
          valueQ9 = valueQ9 + 2;
          break;
        case 'Needs work':
          valueQ9 = valueQ9 + 3;
          break;
        case 'Satisfactory':
          valueQ9 = valueQ9 + 4;
          break;
        case 'Good':
          valueQ9 = valueQ9 + 5;
          break;
        case 'Very good':
          valueQ9 = valueQ9 + 6;
          break;
        case 'Excellent':
          valueQ9 = valueQ9 + 7;
          break;
        default:
          console.log("ERROR: Unexpect value - CSV file has been tampered.");
          break;
      }
    });
    console.log("valueQ9: " + valueQ9);

    // Q10 calculations
    var valueQ10 = 0;
    inputStringsQ10.forEach(element => {
      switch(element)
      {
        case 'Very poor':
          valueQ10 = valueQ10 + 1;
          break;
        case 'Poor':
          valueQ10 = valueQ10 + 2;
          break;
        case 'Needs work':
          valueQ10 = valueQ10 + 3;
          break;
        case 'Satisfactory':
          valueQ10 = valueQ10 + 4;
          break;
        case 'Good':
          valueQ10 = valueQ10 + 5;
          break;
        case 'Very good':
          valueQ10 = valueQ10 + 6;
          break;
        case 'Excellent':
          valueQ10 = valueQ10 + 7;
          break;
        default:
          console.log("ERROR: Unexpect value - CSV file has been tampered.");
          break;
      }
    });
    console.log("valueQ10: " + valueQ10);

    setData({
      label:'Previous Score (CSV Upload)',
      data:[
          valueQ5,
          valueQ6,
          valueQ7,
          valueQ8,
          valueQ9,
          valueQ10
      ],
      backgroundColor: 'rgba(0, 255, 255, 0.1)',
      borderColor: '#00FFFF',
      borderWidth: 2
    });

  }


  return (
    <div className="container">

      {/* csv file uploader and reader */}
      <CSVReader className='button'
        cssClass="react-csv-input"
        label="Upload CSV File: "
        onFileLoaded={handleForce}
        parserOptions={papaparseOptions}
      />
      
      <button className='button' onClick={generateValues}>Compare Results</button>

    </div>
  );

}

export default UploadCSV;