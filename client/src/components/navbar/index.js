import React from "react";
import {Link} from "react-router-dom";



export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">
        Google Books Search
      </a>
      <Link 
      to="/"
      style={{ color: "white"}}
      className="px-2"
      >
        Search Books
      </Link>
      <Link 
      to="/saved"
      style={{ color: "blue"}}

      >
        Saved Books
      </Link>

    </nav>

// export default function NavBar(props) {
//   return(
//       <Navbar fixed="top" bg="dark" variant="dark" expand="md" bg-color="darkgrey">
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//               <Nav className="mr-auto">
//               <Nav.Link
//                       href="/"
//                       onClick={() => props.handlePageChange("myBooks")}
//                       activeClass="active"
//                       to="myBooks"
//                       spy={true}
//                       smooth={true}
//                       offset={-70}
//                       duration={800}
//                       activeClassName="text-white"
//                       className="d-inline-block align-top">
//                       Saved Books
//                   </Nav.Link>
                  
//               </Nav>
              
//   </Navbar.Collapse>
// </Navbar>

  )
}
