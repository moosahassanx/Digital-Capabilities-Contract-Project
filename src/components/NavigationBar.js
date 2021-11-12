import { NavigationBarStyling } from '../css/NavigationBarStyling';     // css styling import
import Navbar from 'react-bootstrap/Navbar'                             // react bootstrap import
import Nav from 'react-bootstrap/Nav'                                   // react bootstrap import

const NavigationBar = () => {
    return(
        
        // styling wrapper
        <NavigationBarStyling>
            <div>
                <Navbar bg="dark" variant='dark' expand="lg">

                    {/* main logo area */}
                    <Navbar.Brand href="#home" className='navbar-header'>UoN Self Assessment Tool</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    {/* everything in this wrapper will collapse into a menu in mobile mode */}
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">

                        {/* to add another, simply copy and paste any element from below and change the values */}
                        <Nav.Link href="https://github.com/moosahassanx/digital-capabilities-survey/tree/main" target='_blank'>GitHub Codebase</Nav.Link>
                        <Nav.Link href="https://www.newcastle.edu.au/current-students/support/it/it-service-desk#:~:text=By%20phone,17000%20(internal%20call)" target='_blank'>Contact</Nav.Link>
                        <Nav.Link href="https://www.newcastle.edu.au/our-uni" target='_blank'>About</Nav.Link>
                        {/* <Nav.Link href="https://www.urlgoeshere.com.au" target='_blank'>Text To Display</Nav.Link> */}
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </NavigationBarStyling>
    )
}

export default NavigationBar;