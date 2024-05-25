import "./footer.scss";

function Footer() {
    return (
      <div className="footer">
        <div className="logo">
          <a href="/" className="logo-footer"><img src="./public/logo-footer2.png" alt="Logo" /></a>
          <div className="icons">
            <a href="https://www.instagram.com" className="icons-footer"><img src="./public/instagram.png" alt="Instagram" /></a>
            <a href="https://www.twitter.com" className="icons-footer"><img src="./public/twitter.png" alt="Twitter" /></a>
            <a href="https://www.facebook.com" className="icons-footer"><img src="./public/facebook.png" alt="Facebook" /></a>
          </div>
          <p>Porto Education. © 2024. <br /> All Rights Reserved</p>
        </div>
        <div className="Information">
        <div className="About">
          <h3>About Us</h3>
            <p>Porto Education</p>
            <p>123 Porto Blvd, Suite 100</p>
            <p>New York, NY</p>
            <p>Phone: <a href="tel:123-456-7890">123-456-7890</a></p>
            <p>Email: <a href="mailto:porto@domain.com">porto@domain.com</a></p>
        </div>
        <div className="Navigation">
          <h3>Navigation</h3>
            <a href="/">- Home</a>
            <a href="/About">- About Us</a>
            <a href="/Courses">- Courses</a>
            <a href="/Instructors">- Instructors</a>
            <a href="/Blog">- Blog</a>
            <a href="/Contact">- Contact Us</a>
        </div>
        <div className="Support">
          <h3>Support</h3>
            <a href="/">- Documentation</a>
            <a href="/">- Forums</a>
            <a href="/">- Open a Ticket</a>
            <a href="/">- FAQ's</a>
        </div>
        <div className="More">
          <h3>More</h3>
            <a href="/">- Terms of Use</a>
            <a href="/">- Privacy Policy</a>
        </div>
      </div>
      </div>

    )
  }
  
  export default Footer