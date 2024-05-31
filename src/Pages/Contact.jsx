import { useState } from "react";
import { Link } from "react-router-dom";
import "./Contact.scss";

function Contact() {
  const [formData, setFormData] = useState({
    	    name: "",
    	    phone: "",
    	    email: "",
    	    subject: "",
    	    message: ""
    	  });
    	
    	  const handleChange = (e) => {
    	    const { name, value } = e.target;
    	    setFormData((prevData) => ({
    	      ...prevData,
    	      [name]: value
    	    }));
    	  };
    	
    	  const handleSubmit = (e) => {
    	    e.preventDefault();
    	    console.log(formData);
  	    };
  return (
    <div className="Contact">
      <div className="Intro">
        <h1>Contact</h1>
      </div>
      <div className="wrapper">
        <div className="links">
          <Link to="/">Home</Link>
          <p>&gt;</p>
          <p>Contact</p>
        </div>
        <div className="paragraphs">
          <p id="p">Founded in 2001 by John Doe, gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin bibendum ultricies nunc, eu interdum enim convallis pretium. Quisque eu neque augue. Aliquam egestas nunc at efficitur faucibus. Praesent mauris eros, tincidunt id enim sodales, rhoncus malesuada ligula.</p>
        </div>
        <div className="info">
          <div className="icons">
            <img src="./public/location.png" alt="Address" />
            <p>ADDRESS</p>
            <h3>123 Porto Blvd, Suite 100</h3>
          </div>
          <div className="icons">
            <img src="./public/phone.png" alt="Phone" />
            <p>PHONE NUMBER</p>
            <a href="tel:(800) 123-4567"><h3>(800) 123-4567</h3></a>
          </div>
          <div className="icons">
            <img src="./public/email.png" alt="Email" />
            <p>E-MAIL ADDRESS</p>
            <a href="mailto:porto@domain.com"><h3>porto@portotheme.com</h3></a>
          </div>
          <div className="icons">
            <img src="./public/calendar.png" alt="Shifts" />
            <p>WORKING DAYS / HOURS</p>
            <h3>9:00AM - 8:00PM</h3>
          </div>
        </div>
        <div className="form">
          <h2>Send a Message</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name"  placeholder="Your Name" value={formData.name} onChange={handleChange}/>
            <input type="tel" name="phone"  placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
            <input type="text" name="email"  placeholder="Your Email" value={formData.email} onChange={handleChange} />
            <input type="text" name="subject"  placeholder="Subject" value={formData.subject}  onChange={handleChange} />
            <input type="text" name="message"  placeholder="Your Message" value={formData.message} onChange={handleChange} />
            <input type="submit" id="Submit" value="Send a Message" />
          </form>
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
  );
}

export default Contact;
