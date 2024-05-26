import { Link } from "react-router-dom";
import "./Courses.scss";

const cardData = [
  { id: 1, instructor: "John Doe", courseName: "Course Name Example", students: 123, comments: 12, price: 24 },
  { id: 2, instructor: "Jane Smith", courseName: "Course Name Example", students: 234, comments: 23, price: 30 },
  { id: 3, instructor: "Emily Johnson", courseName: "Course Name Example", students: 345, comments: 34, price: 20 },
  { id: 4, instructor: "Michael Brown", courseName: "Course Name Example", students: 456, comments: 45, price: 40 },
  { id: 5, instructor: "Chris Davis", courseName: "Course Name Example", students: 567, comments: 56, price: 50 },
  { id: 6, instructor: "Patricia Wilson", courseName: "Course Name Example", students: 678, comments: 67, price: 35 },
  { id: 7, instructor: "Linda Martinez", courseName: "Course Name Example", students: 789, comments: 78, price: 25 },
  { id: 8, instructor: "Robert Anderson", courseName: "Course Name Example", students: 890, comments: 89, price: 45 },
  { id: 9, instructor: "David Thomas", courseName: "Course Name Example", students: 901, comments: 90, price: 55 }
];

function Courses() {
  return (
    <div className="Courses">
      <div className="Intro">
        <h1>Courses</h1>
      </div>

      <div className="wrapper">

        <div className="links">
          <Link to="/">Home</Link>
          <p>&gt;</p>
          <p>Courses</p>
        </div>
      
        <div className="Content">
          <div className="cards">
            {cardData.map(card => (
              <div className="card" key={card.id}>
                <a href="/">
                  <img src={`./public/course${card.id}.jpg`} alt="Course" />
                  <img src={`./public/avatar${card.id}.jpg`} id="avatar" alt="Avatar" />
                  <div className="wrapper-title">
                    <p>{card.instructor}</p>
                    <h2>{card.courseName}</h2>
                  </div>
                  <div className="wrapper-stats">
                    <div className="stats">
                      <img src="./public/user.png" alt="students" />
                      <p>{card.students}</p>
                      <img src="./public/conversation.png" alt="comments" />
                      <p>{card.comments}</p>
                    </div>
                    <h2>${card.price}</h2>
                  </div>
                </a>
              </div>
            ))}
          </div>

          <aside>
            <div className="categories">
              <h2>Categories</h2>
              <a href="/Courses">&gt; Design(2)</a>
              <a href="/Courses">&gt; Web Development(4)</a>
              <a href="/Courses" className="web">&gt; Data Science(4)</a>
              <a href="/Courses" className="web">&gt; Mobile Development(3)</a>
              <a href="/Courses" className="web">&gt; Software Testing(3)</a>
              <a href="/Courses" className="web">&gt; Development Tools(3)</a>
              <a href="/Courses">&gt; Personal Development(3)</a>
              <a href="/Courses">&gt; Business(2)</a>
              <a href="/Courses">&gt; Photography(1)</a>
            </div>

            <div className="latest">
              <h2>Latest Courses</h2>
              <a href="/Courses">
                <img src="./public/course1.jpg" alt="Clients" />
                <div className="container">
                  <h4>Course Name Example</h4>
                  <p>$79</p>
                </div>
              </a>
            </div>
            <div className="latest">
              <h2>Latest Courses</h2>
              <a href="/Courses">
                <img src="./public/course1.jpg" alt="Clients" />
                <div className="container">
                  <h4>Course Name Example</h4>
                  <p>$79</p>
                </div>
              </a>
            </div>

            <div className="get-started">
              <div className="container2">
                <h3>Ready to kick-start your career?</h3>
                <a href="/Courses">
                <button>GET STARTED NOW</button>
                </a>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </div>
  );
}

export default Courses;
