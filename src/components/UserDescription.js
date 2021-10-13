import { useState, useEffect } from 'react';

const UserDescription = (props) => {

    // use state to create dynamic hook
    const [messageType, setMessageType] = useState("");

    function displayMessageType()
    {
        // use prop parameter to dynamically generate description
        switch(props.passedUserType) {
            case "Beginner":
              setMessageType("You can use digital technologies for simple tasks and need to work with an expert/mentor for highly structured support and modeling.");
              break;
            case "Elementary":
                setMessageType("You can use digital technologies for simple tasks and need prompting and/or advice from an expert/mentor.");
                break;
            case "Intermediate":
                setMessageType("You can use digital technologies for regular and other well-defined tasks. You can solve straightforward problems and may request support from an expert/mentor.");
                break;
            case "Upper-Intermmediate":
                setMessageType("You can use digital technologies for well-defined tasks independently. You can solve non-regular problems independently.");
                break;
            case "Advanced":
                setMessageType("You can use digital technologies for several tasks independently and act as a mentor for others. You can solve many problems independently.");
                break;
            case "Proficient":
                setMessageType("You can use digital technologies for almost all tasks independently. You can find solutions for almost all the problems.");
                break;
            
            // user type could not be identified from the given string, display error
            default:
                setMessageType("ERROR displaying user description.");
                break;
          }
    }

    // run function upon prop parameter input
    useEffect(() => {
        displayMessageType();
    }, [props])

    // display HTML code dynamically
    return(
        <div>
            <p>{messageType}</p>
        </div>        
    )
}

export default UserDescription;