// importing react libraries and community libraries
import React from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

const ResourceLinks = (props) => {

    // use states
    const [resources, setResources] = useState([]);

    // use effect
    useEffect(() => {
        displayResources();
    }, [props])

    // function to categorise user
    function determineSectionScore()
    {
        if(props.score <= 14)
        {
            return "Beginner";
        }
        else if(props.score <= 28)
        {
            return "Intermediate";
        }
        else
        {
            return "Advanced";
        }
    }

    // function to start making list of resources in passed parameter
    function displayResources()
    {
        // initialising and setting
        let strings = [];
        var userScore = determineSectionScore();

        // cycle through all the links
        for (var i = 0; i < props.resourceData.length; i++)
        {
            // select correct resources to display
            var scoreMatches = false;
            for (var j = 0; j < props.resourceData[i].weighting.length; j++)
            {
                if(props.resourceData[i].weighting[j] === userScore || props.resourceData[i].weighting[j] === 'General')
                {
                    scoreMatches = true;
                }
            }

            // push the selected resource onto an array
            if(scoreMatches === true)
            {
                strings.push(<li><a href={props.resourceData[i].link} target='_blank'>{props.resourceData[i].label}</a></li>);
            }
        }

        // set the new array to be displayed to the user
        setResources(strings);
    }

    // menu contoller (open menu when the user clicks the link)
    const [anchorEl1, setAnchorEl1] = React.useState(null);
    const handleClick1 = (event) => {
        setAnchorEl1(event.currentTarget);
    };
    const handleClose1 = () => {
        setAnchorEl1(null);
    };
    const open1 = Boolean(anchorEl1);
    const id1 = open1 ? 'simple-popover' : undefined;

    return(
        <div className='dropdown-wrapper'>

            {/* display button for user to click */}
            <Button variant="text" className='dropdown-button' aria-describedby={id1} onClick={handleClick1}>
                Click to see resource links <KeyboardArrowDownIcon />
            </Button>

            {/* display menu when clicked */}
            <Popover
                id={id1}
                open={open1}
                anchorEl={anchorEl1}
                onClose={handleClose1}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                
                {/* display contents of the popover menu */}
                <Typography sx={{ p: 2 }}>
                    <ol>
                        {resources}
                    </ol>
                </Typography>
            </Popover>
        </div>
    )
}

export default ResourceLinks;