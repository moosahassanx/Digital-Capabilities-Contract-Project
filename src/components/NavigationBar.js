// bootstrap imports
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavigationBar = () => {
    return(       
        // initialising navbar with visual properties
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

            {/* mobile responsiveness to collapse into burger button */}
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">

                    {/* list of buttons in the navbar */}
                    <Nav.Link href="#home">Self Assessment Tool</Nav.Link>
                    <Nav.Link href="https://github.com/moosahassanx/digital-capabilities-survey/tree/main" target='_blank'>GitHub Codebase</Nav.Link>
                    <Nav.Link href="https://www.newcastle.edu.au/current-students/support/it/it-service-desk#:~:text=By%20phone,17000%20(internal%20call)" target='_blank'>Contact</Nav.Link>
                    <Nav.Link href="https://www.newcastle.edu.au/our-uni" target='_blank'>About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar;