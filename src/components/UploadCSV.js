import React from "react";
import CSVReader from "react-csv-reader";
import { useState } from 'react';

// https://www.npmjs.com/package/react-csv-reader
// https://github.com/cluemediator/read-csv-file-react/blob/master/src/App.js

const UploadCSV = () => {

    const handleForce = (data, fileInfo) => setResults(data);
    const [data, setData] = useState([]);
    const [results, setResults] = useState([]);

    const papaparseOptions = {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      transformHeader: header => header.toLowerCase().replace(/\W/g, "_")
    };

    function generateValues()
    {
      console.log("testing generateValues()");
      console.log(results);

      var userValues = results[1]

      // question 5
      console.log("question 5 - Proficiency and Productivity");
      console.log(userValues.q5_i_am_able_to_choose_the_appropriate_digital_tools_or_devices_which_assist_me_in_reaching_my_learning_goals);
      console.log(userValues.q5_i_am_able_to_code_applications_or_programs);
      console.log(userValues.q5_i_am_able_to_perform_troubleshooting__i_e___problem_solving__on_my_computer_and_digital_devices);
      console.log(userValues.q5_i_am_able_to_use_digital_communication_services__tools__and_mobile_apps__such_as_email_and_social_networking_applications__to_communicate_with_others);
      console.log(userValues.q5_i_am_able_to_use_internet_browsers_to_find_the_required_documents_or_data);
      console.log(userValues.q5_i_am_able_to_use_software_and_tools__such_as_office_365_and_adobe__to_organise__edit__manage__and_back_up_digital_documents_and_files_);

      // question 6
      console.log("question 6 - Digital Learning and Development");
      console.log(userValues.q6_i_am_able_to_analyse_my_digital_strengths_and_weaknesses_and_reflect_on_my_personal_learning);
      console.log(userValues.q6_i_am_able_to_identify_and_participate_in_learning_opportunities_and_courses_available_in_a_digital_environment__such_as_youtube__futurelearn__and_edx_online_courses__);
      console.log(userValues.q6_i_am_able_to_sign_onto_and_use_the_university_s_supported_platforms__such_as_blackboard__myuon__the_library_databases__to_find_the_required_document_or_data_);
      console.log(userValues.q6_i_am_able_to_use_digital_technologies__such_as_digital_calendars_planners__to_schedule_or_plan_my_study);
      console.log(userValues.q6_i_am_able_to_use_digital_technologies__such_as_zoom__microsoft_teams__blackboard_or_padlet__to_share_information_with_instructors_and_other_students_);
      console.log(userValues.q6_i_am_able_to_use_digital_tools_to_record_learning_events__e_g___lectures__tutorials__webinars__or_information_for_later_review);

      // question 7
      console.log("question 7 - Digital Creation, Problem Solving and Innocation");
      console.log(userValues.q7_i_am_able_to_adapt_and_integrate_a_new_technology_into_my_learning_environment);
      console.log(userValues.q7_i_am_able_to_analyse_data_using_qualitative_or_quantitative_software_and_digital_tools);
      console.log(userValues.q7_i_am_able_to_evaluate_a_problem_by_gathering_appropriate_information_using_digital_tools);
      console.log(userValues.q7_i_am_able_to_generate_a_new_written_and_or_visual_digital_product_by_comparing_and_synthesising_information_that_was_found_elsewhere);
      console.log(userValues.q7_i_am_able_to_sesign_and_administer_online_surveys__such_as_surveymonkey__qualtrics__and_google_docs__to_gather_qualitative_and_quantitative_data_);
      console.log(userValues.q7_i_am_able_to_use_digital_tools_to_edit_an_image_and_create_a_video);

      // question 8
      console.log("question 8 - Digital Communication, Collaboration and Participation");
      console.log(userValues.q8_i_am_able_to_contribute_to_comments_in_online_discussions__online_forum__blog_or_wiki__on_social_issues_encountered_in_everyday_life_);
      console.log(userValues.q8_i_am_able_to_find_relevant_communities_and_groups_online_that_suit_my_interests_and_needs);
      console.log(userValues.q8_i_am_able_to_interact_online_with_people_from_diverse_communities_and_respect_multiple_perspect);
      console.log(userValues.q8_i_am_able_to_share_content_and_information_using_social_networks__such_as_facebook__and_collaborative_platforms__such_as_onedrive__google_drive__dropbox__etc__);
      console.log(userValues.q8_i_am_able_to_use_technology_to_ask_a_question_or_deliver_a_message_in_a_socially_acceptable_way__i_e___netiquette_rules_);
      console.log(userValues.q8_i_am_able_to_work_remotely_with_colleagues_students_classmates_using_online_collaborative_tools);

      // question 9
      console.log("question 9 - Information Literacy, Data Literacy and Media Literacy");
      console.log(userValues.q9_i_am_able_to_assess_the_truthfulness_of_information_before_sharing_it_on_social_media_or_with_other_students);
      console.log(userValues.q9_i_am_able_to_database_applications_to_enter_and_retrieve_information_required_for_my_studies);
      console.log(userValues.q9_i_am_able_to_distinguish_the_differences_between_primary_and_secondary_sources);
      console.log(userValues.q9_i_am_able_to_follow_the_rules_of_copyright_and_give_credit_for_others__work_through_proper_referencing);
      console.log(userValues.q9_i_am_able_to_receive_and_respond_to_messages_in_a_range_of_digital_media__such_as_text__graphics__video__animation__audio_and_multimedia_);
      console.log(userValues.q9_i_am_able_to_the_filtering_and_advanced_search_options_in_online_databases__such_as_google_scholar_);

      // question 10
      console.log("question 10 - Digital Identity and Wellbeing");
      console.log(userValues.q10_i_am_able_to_act_positively_against_others__damaging_online_behaviours__e_g___reporting_or_rejecting_cyberbullying_);
      console.log(userValues.q10_i_am_able_to_adjust_the_privacy_settings_of_my_digital_devices_and_tools);
      console.log(userValues.q10_i_am_able_to_be_considerate_of_others__privacy_when_taking_video_or_pictures);
      console.log(userValues.q10_i_am_able_to_evaluate_content_of_emails_messages_calls_for_spam_and_scam_content);
      console.log(userValues.q10_i_am_able_to_protect_my_mental__physical__and_emotional_health_when_using_digital_technologies_or_tools);
      console.log(userValues.q10_i_am_able_to_protect_my_personal_data_in_online_and_offline_environments);

    }


    return (
      <div className="container">
        <CSVReader
          cssClass="react-csv-input"
          label="Upload CSV File: "
          onFileLoaded={handleForce}
          parserOptions={papaparseOptions}
        />
        <p>Check console after uploading (should be array element 2 for Ruth's new csv file)</p>

        <button onClick={generateValues}>Calculate values</button>
      </div>
    );

}

export default UploadCSV;