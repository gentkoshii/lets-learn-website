import { Link } from "react-router-dom"
import "./About.scss";

function About() {
    return (
      <div className="AboutUs">
        <div className="Intro">
            <h1>About Us</h1>
        </div>
        <div className="content">
          <div className="links">
            <Link to="/">Home</Link>
            <p>&gt;</p>
            <p>About Us</p>
          </div>
          <p id="p">Founded in 2001 by John Doe, gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum ultricies nunc, eu interdum enim convallis pretium. Quisque eu neque augue. Aliquam egestas nunc at efficitur faucibus. Praesent mauris eros, tincidunt id enim sodales, rhoncus malesuada ligula.</p>
          <div className="stats">
            <div className="certified-instructors">
              <h1>30+</h1>
              <h4>Certified Instructors</h4>
            </div>
            <div className="students-enrolled">
              <h1>2000+</h1>
              <h4>Students Enrolled</h4>
            </div>
            <div className="complete-courses">
              <h1>200+</h1>
              <h4>Complete Courses</h4>
            </div>
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum ultricies nunc, eu interdum enim convallis pretium. Quisque eu neque augue. Aliquam egestas nunc at efficitur faucibus. Praesent mauris eros, tincidunt id enim sodales, rhoncus malesuada ligula.</p>
          <img src="./public/generic-1.jpg" alt="Happy Clients" />
          <div className="JoeDoe">
            <p id="quote"><span>"</span>Pellentesque ultricies nibh gravida, accumsan libero luctus, molestie nunc. In nibh ipsum, blandit id faucibus accumsan libero luctus, molestie nunc. <span>"</span></p>
            <h4>John Doe - CEO & Founder</h4>
            <img src="./public/signature.png" alt="Joe Doe Signature" />
          </div>
          <div className="goals">
            <div className="mission">
              <h2>Our Misson</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus elementum ante quis commodo. Fusce tincidunt pretium pellentesque. Nulla vitae ante tincidunt, suscipit dui sit amet, posuere tortor. Sed elementum ex fringilla, molestie nibh eu, pulvinar diam. Fusce vestibulum nisl a lectus consequat, vel semper arcu tempor. Sed ac consequat nunc.</p>
            </div>
            <div className="vision">
              <h2>Our Vision</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus elementum ante quis commodo. Fusce tincidunt pretium pellentesque. Nulla vitae ante tincidunt, suscipit dui sit amet, posuere tortor. Sed elementum ex fringilla, molestie nibh eu, pulvinar diam. Fusce vestibulum nisl a lectus consequat, vel semper arcu tempor. Sed ac consequat nunc.</p>
            </div>
          </div>
        </div>
        <div className="get-started">
          <div className="container">
            <h1>Ready to kick-start your career?</h1>
            <a href="/Courses">
              <button>GET STARTED NOW</button>
            </a>

          </div>
        </div>
      </div>
    )
  }
  
  export default About