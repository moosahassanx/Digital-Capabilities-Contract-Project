import { useState, useEffect } from 'react';

const UserDescription = (props) => {

    // use state to create dynamic hook
    const [messageType, setMessageType] = useState("");

    function displayMessageType()
    {
        // use prop parameter to dynamically generate description
        var totalScore = 0;

        props.inputData.forEach(element => {
            totalScore = totalScore + element;
        });

        if(totalScore < 72)
		{
            setMessageType("You can use digital technologies for simple tasks and need to work with an expert/mentor for highly structured support and modeling.");
		}
		else if(totalScore < 108)
		{
            setMessageType("You can use digital technologies for simple tasks and need prompting and/or advice from an expert/mentor.");
		}
		else if(totalScore < 144)
		{
            setMessageType("You can use digital technologies for regular and other well-defined tasks. You can solve straightforward problems and may request support from an expert/mentor.");
		}
		else if(totalScore < 180)
		{
            setMessageType("You can use digital technologies for well-defined tasks independently. You can solve non-regular problems independently.");
		}
		else if(totalScore < 216)
		{
            setMessageType("You can use digital technologies for several tasks independently and act as a mentor for others. You can solve many problems independently.");
		}
		else
		{
            setMessageType("You can use digital technologies for almost all tasks independently. You can find solutions for almost all the problems.");
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