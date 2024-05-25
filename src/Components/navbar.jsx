import { Link } from "react-router-dom"
function Navbar() {
    return (
      <div>
        <div>
          <Link href=""><img src="" alt="" /></Link>
        </div>
        <div>
          <Link to="/" id="Home">Home</Link>
          <Link to="/About" id="About">About Us</Link>
          <Link to="/Courses" id="Courses">Courses</Link>
          <Link to="/Instructors" id="Instructors">Instructors</Link>
          <Link to="/Blog" id="Blog">Blog</Link>
          <Link to="/Contact" id="Contact">Contact Us</Link>
          <button><img src="" alt="" /></button>
        </div>
      </div>
    )
  }
  
  export default Navbar