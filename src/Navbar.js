import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
  import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap';

class Navb extends Component{
    constructor(props) {
        super(props);

    }

    render() {
        return (


           <div className="container-fluid nav_bg">
    <div className="row">

    <div className="col-10 mx-auto">

            <Navbar bg="dark" variant="light" expand="lg" sticky="top">
                                <Nav.Link className="navbar-brand"  href="/">Cinemato_Nagar 📷</Nav.Link>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="ml-auto" >
                                    <Nav.Link  className="nav-link  active linkhover" aria-current="page"  href="/">Home</Nav.Link>
                                    <Nav.Link  className="nav-link  active linkhover" aria-current="page"  href="/service">Service</Nav.Link>
                                    <Nav.Link  className="nav-link  active linkhover" aria-current="page"  href="/about">About</Nav.Link>
                                    <Nav.Link  className="nav-link  active linkhover" aria-current="page"  href="/contact">Contact</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>


    
    </div>
    </div>

    </div>

        );
    }

}
export default Navb;