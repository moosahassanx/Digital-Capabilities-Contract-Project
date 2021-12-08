// importing react and community library
import React from "react";
import { useState, useEffect } from 'react';


const UserTypeAndDescription = (props) => {

      // use states
      const [prefix, setPrefix] = useState("[prefix]");
      const [userType, setUserType] = useState("[user_type]");

      // use effect
      useEffect(() => {
            determinePrefix();
      }, [])
    
      // correct grammar when reading the sentence
      function determinePrefix()
      {
            var totalScore = 0;

            props.inputData.forEach(element => {
                  totalScore = totalScore + element;
            });

            if(totalScore < 72)
            {
                  setPrefix("a");
                  setUserType("Beginner");
            }
            else if(totalScore < 108)
            {
                  setPrefix("an");
                  setUserType("Elementary");
            }
            else if(totalScore < 144)
            {
                  setPrefix("an");
                  setUserType("Intermediate");
            }
            else if(totalScore < 180)
            {
                  setPrefix("an");
                  setUserType("Upper-Intermmediate");
            }
            else if(totalScore < 216)
            {
                  setPrefix("an");
                  setUserType("Advanced");
            }
            else
            {
                  setPrefix("a");
                  setUserType("Proficient");
            }
      }

      return(
            <h2>You are {prefix}<span className='user-type'> {userType}</span> user.</h2>
      )
}

export default UserTypeAndDescription;