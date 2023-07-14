import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { Link } from "react-router-dom";

function PageNavbar() {
  return (
    <Navbar bg="primary" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Ammar Blog{" "}
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        <Nav className="me-auto">
          <Nav.Link as={Link} to='/'>Home</Nav.Link>
          <Nav.Link as={Link} to='/add'>add</Nav.Link>
          <Nav.Link as={Link} to='/signUp'>Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  // return (
  //   <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary m-2">
  //     <a className="navbar-brand"  href="/">
  //       Ammar Blog
  //     </a>

  //     <button
  //       className="navbar-toggler"
  //       type="button"
  //       data-toggle="collapse"
  //       data-target="#navbarNav"
  //       aria-controls="navbarNav"
  //       aria-expanded="false"
  //       aria-label="Toggle navigation"
  //     >
  //       <span className="navbar-toggler-icon"></span>
  //     </button>
  //     <div className="collapse navbar-collapse" id="navbarNav">
  //       <ul className="navbar-nav">
  //         <li className="nav-item active">
  //           <Link className="nav-link" to="/">
  //             Home
  //           </Link>
  //         </li>

  //         <li className="nav-item">
  //           <Link className="nav-link" to="/add">
  //             Add
  //           </Link>
  //         </li>

  //         <li className="nav-item">
  //           <Link className="nav-link" to="/signUp">
  //             SingUp
  //           </Link>
  //         </li>

  //         <li className="nav-item">
  //           <Link className="nav-link" to="#">
  //             About
  //           </Link>
  //         </li>
  //       </ul>
  //     </div>
  //   </nav>
  // );
}

export default PageNavbar;

//rfce shortcut
