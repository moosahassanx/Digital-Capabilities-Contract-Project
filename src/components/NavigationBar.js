import { NavigationBarStyling } from '../css/NavigationBarStyling';
// import { GiHamburgerMenu } from "react-icons/gi";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'


const NavigationBar = () => {
    return(       
        // initialising navbar with visual properties
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

    // boolean variable used to track click status on burger menu

    // display HTML code dynamically
    return(
        <NavigationBarStyling>
            <div>
                <Navbar bg="dark" variant='dark' expand="lg">
                    <Navbar.Brand href="#home" className='navbar-header'>UoN Self Assessment Tool</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="https://github.com/moosahassanx/digital-capabilities-survey/tree/main" target='_blank'>GitHub Codebase</Nav.Link>
                        <Nav.Link href="https://www.newcastle.edu.au/current-students/support/it/it-service-desk#:~:text=By%20phone,17000%20(internal%20call)" target='_blank'>Contact</Nav.Link>
                        <Nav.Link href="https://www.newcastle.edu.au/our-uni" target='_blank'>About</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </NavigationBarStyling>
    )
}

export default NavigationBar;