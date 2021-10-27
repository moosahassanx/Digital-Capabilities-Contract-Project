import { NavigationBarStyling } from '../css/NavigationBarStyling';
import { GiHamburgerMenu } from "react-icons/gi";
import { useState, useEffect } from "react";

const NavigationBar = () => {

    // boolean variable used to track click status on burger menu
    const [isOpen, setIsOpen] = useState(true);

    // track state of the boolean variable
    useEffect(() => {
        openMenu()
    }, isOpen)

    // flip boolean statement and trigger css
    function openMenu ()
    {
        if(isOpen === true)
        {
            setIsOpen(false);
            document.getElementById("opener1").style.display = "block";
            document.getElementById("opener2").style.display = "block";
            document.getElementById("opener3").style.display = "block";
        }
        else
        {
            setIsOpen(true);
            document.getElementById("opener1").style.display = "none";
            document.getElementById("opener2").style.display = "none";
            document.getElementById("opener3").style.display = "none";
        }
    }

    // display HTML code dynamically
    return(
        <NavigationBarStyling>
            <div className='navbar'>
                <ul>
                    <li className='first-wrapper'><a className='active' href="#home" id='first-element'>Self Assessment Tool</a><a onClick={openMenu} className='burger-wrapper'><GiHamburgerMenu className='burger'/></a></li>
                    <li className='opener' id='opener1'><a href="https://github.com/moosahassanx/digital-capabilities-survey/tree/main" target='blank'>GitHub Codebase</a></li>
                    <li className='opener' id='opener2'><a href="https://www.newcastle.edu.au/current-students/support/it/it-service-desk#:~:text=By%20phone,17000%20(internal%20call)" target='_blank'>Contact</a></li>
                    <li className='opener' id='opener3'><a href="https://www.newcastle.edu.au/our-uni" target='_blank'>About</a></li>
                </ul>
            </div>
        </NavigationBarStyling>  
    )
}

export default NavigationBar;