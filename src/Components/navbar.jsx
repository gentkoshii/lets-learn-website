import { NavLink } from "react-router-dom";
import "./navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <NavLink to="/"><img src="./public/logo.png" alt="Logo" /></NavLink>
        </div>
        <div className="link">
          <NavLink to="/" exact activeClassName="active" id="Home">Home</NavLink>
          <NavLink to="/About" activeClassName="active" id="About">About Us</NavLink>
          <NavLink to="/Courses" activeClassName="active" id="Courses">Courses</NavLink>
          <NavLink to="/Instructors" activeClassName="active" id="Instructors">Instructors</NavLink>
          <NavLink to="/Blog" activeClassName="active" id="Blog">Blog</NavLink>
          <NavLink to="/Contact" activeClassName="active" id="Contact">Contact Us</NavLink>
          <button ><img src="./public/search.png" alt="Search" /></button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
