import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./navbar.scss";

function Navbar() {
  const [open, setOpen] = useState(false);

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
          <div className="navbarIcon">
                    <img src="/public/hamburger-menu.png" alt="Hamburger-Menu" onClick={() => setOpen((prev) => !prev)} />
                </div>
                <div className={open ? "navbarMenu active" : "navbarMenu"}>
                        <>
                        <NavLink to="/" exact activeClassName="active" id="Home">Home</NavLink>
                        <NavLink to="/About" activeClassName="active" id="About">About Us</NavLink>
                        <NavLink to="/Courses" activeClassName="active" id="Courses">Courses</NavLink>
                        <NavLink to="/Instructors" activeClassName="active" id="Instructors">Instructors</NavLink>
                        <NavLink to="/Blog" activeClassName="active" id="Blog">Blog</NavLink>
                        <NavLink to="/Contact" activeClassName="active" id="Contact">Contact Us</NavLink>
                        </>
                </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
