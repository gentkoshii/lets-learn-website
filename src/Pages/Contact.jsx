import { Link } from "react-router-dom"
import "./Contact.scss";


function Contact() {
  return (
      <div className="Contact">
        <div className="Intro">
            <h1>Contact</h1>
        </div>
        <div className="links">
          <Link to="/">Home</Link>
          <p>&gt;</p>
          <p>Contact</p>
        </div>
      </div>
  )
}
  
  export default Contact