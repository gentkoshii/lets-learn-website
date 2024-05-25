import "./footer.scss";

function Footer() {
    return (
      <div>
        <div className="Logo">
          <a href="/" className="logo-footer"><img src="./public/logo.png" alt="Logo" /></a>
          <a href="https://www.facebook.com" className="icons-footer"><img src="./public/facebook.png" alt="Facebook" /></a>
          <a href="https://www.instagram.com" className="icons-footer"><img src="./public/instagram.png" alt="Instagram" /></a>
          <a href="https://www.twitter.com" className="icons-footer"><img src="./public/twitter.png" alt="Twitter" /></a>
          <p>Porto Education. © 2024. <br /> All Rights Reserved</p>
        </div>
        <div className="AboutUs">
          <h2>About Us</h2>
            <p>- Porto Education</p>
            <p>- 123 Porto Blvd, Suite 100</p>
            <p>- New York, NY</p>
            <p>- Phone: <a href="tel:123-456-7890">123-456-7890</a></p>
            <p>- Email: <a href="mailto:porto@domain.com">porto@domain.com</a></p>
        </div>
        <div className="Navigation">
          <h2>Navigation</h2>
            <a href="/">- Home</a>
            <a href="/About">- About Us</a>
            <a href="/Courses">- Courses</a>
            <a href="/Instructors">- Instructors</a>
            <a href="/Blog">- Blog</a>
            <a href="/Contact">- Contact Us</a>
        </div>
        <div className="Support">
          <h2>Support</h2>
            <a href="/">- Documentation</a>
            <a href="/">- Forums</a>
            <a href="/">- Open a Ticket</a>
            <a href="/">- FAQ's</a>
        </div>
        <div className="More">
          <h2>More</h2>
            <a href="/">- Terms of Use</a>
            <a href="/">- Privacy Policy</a>
        </div>
      </div>
    )
  }
  
  export default Footer