import { NavigationBarStyling } from '../css/NavigationBarStyling';

const NavigationBar = () => {

    // display HTML code dynamically
    return(
        <NavigationBarStyling>
            <div className='navbar'>
                <ul>
                    <li><a class='active' href="#home" id='first-element'>Self Assessment Tool</a><button className='burger'>burger</button></li>
                    <li className='opener'><a href="https://github.com/moosahassanx/digital-capabilities-survey/tree/main" target='blank'>GitHub Codebase</a></li>
                    <li className='opener'><a href="https://www.newcastle.edu.au/current-students/support/it/it-service-desk#:~:text=By%20phone,17000%20(internal%20call)" target='_blank'>Contact</a></li>
                    <li className='opener'><a href="https://www.newcastle.edu.au/our-uni" target='_blank'>About</a></li>
                </ul>
            </div>
        </NavigationBarStyling>  
    )
}

export default NavigationBar;