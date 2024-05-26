import { Link } from "react-router-dom"
import "./Instructors.scss";


function Instructors() {
    return (
        <div className="Instructors">
          <div className="Intro">
              <h1>Instructors</h1>
          </div>
          <div className="links">
            <Link to="/">Home</Link>
            <p>&gt;</p>
            <p>Instructors</p>
          </div>
        </div>
    )
  }
  
  export default Instructors