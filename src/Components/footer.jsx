import { Link } from "react-router-dom"
function Footer() {
    return (
      <div>
        <div className="Logo">
          <Link href="" className="logo-footer"><img src="" alt="" /></Link>
          <Link href="" className="icons-footer"><img src="" alt="" /></Link>
          <Link href="" className="icons-footer"><img src="" alt="" /></Link>
          <Link href="" className="icons-footer"><img src="" alt="" /></Link>
          <p>Porto Education. © 2024. <br /> All Rights Reserved</p>
        </div>
        <div className="AboutUs">
          <h1>About Us</h1>
          <p>Porto Education</p>
          <p>123 Porto Blvd, Suite 100</p>
          <p>New York, NY</p>
          <p>Phone: 123-456-7890</p>
          <p>Email: porto@domain.com</p>
        </div>
        <div className="Navigation">
          <h1>Navigation</h1>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Courses</li>
            <li>Instructors</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className="Support">
          <h1>Support</h1>
          <ul>
            <li>Documentation</li>
            <li>Forums</li>
            <li>Open a Ticket</li>
            <li>FAQ's</li>
          </ul>
        </div>
        <div className="More">
          <h1>More</h1>
          <ul>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    )
  }
  
  export default Footer