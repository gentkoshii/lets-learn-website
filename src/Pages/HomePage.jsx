import React, { useState } from "react";
import "./HomePage.scss";

const cardData = [
  { id: 1, instructor: "John Doe", courseName: "Course Name Example", students: 123, comments: 12, price: 24 },
  { id: 2, instructor: "Jane Smith", courseName: "Course Name Example", students: 234, comments: 23, price: 30 },
  { id: 3, instructor: "Emily Johnson", courseName: "Course Name Example", students: 345, comments: 34, price: 20 },
  { id: 4, instructor: "Michael Brown", courseName: "Course Name Example", students: 456, comments: 45, price: 40 },
  { id: 5, instructor: "Chris Davis", courseName: "Course Name Example", students: 567, comments: 56, price: 50 },
  { id: 6, instructor: "Patricia Wilson", courseName: "Course Name Example", students: 678, comments: 67, price: 35 },
];

function Homepage() {
  const [formData, setFormData] = useState({
    name: "",
    lname: "",
    phone: "",
    email: "",
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 3;

  const handleNext = () => {
    if (currentIndex < cardData.length - cardsPerPage) {
      setCurrentIndex(currentIndex + cardsPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - cardsPerPage);
    }
  };

  const top = () => (window.scrollTo(0, 0))
  return (
    <div className="Homepage">

      <div className="Intro">
        <img src="./public/ed-slide.png" alt="Client" />
        <div className="lets-learn">
          <h1># lets Learn</h1>
          <p>Complete Solution For Your Education Needs!</p>
          <a href="">
            <button>GET STARTED</button>
          </a>
        </div>
      </div>

      <div className="info">
        <div>
          <img src="./public/1.png" alt="Number 1" />
          <img src="./public/money.png" alt="Find Your Course" />
          <div>
            <p>STEP 1</p>
            <h3>Find Your Course</h3>
          </div>
        </div>
        <div>
          <img src="./public/2.png" alt="Number 2" />
          <img src="./public/note-pad.png" alt="Make a Register" />
          <div>
            <p>STEP 2</p>
            <h3>Make a Register</h3>
          </div>
        </div>
        <div>
          <img src="./public/3.png" alt="Number 3" />
          <img src="./public/laptop.png" alt="Enjoy and Learn" />
          <div>
            <p>STEP 3</p>
            <h3>Enjoy and Learn</h3>
          </div>
        </div>
      </div>

      <div className="popular">
        <h1>Popular Courses</h1>
        <div className="courses">
          <button className="prev" onClick={handlePrev} disabled={currentIndex === 0}>
            &lt;
          </button>
          <div className="cards">
            {cardData.slice(currentIndex, currentIndex + cardsPerPage).map((card) => (
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
          <button className="next" onClick={handleNext} disabled={currentIndex >= cardData.length - cardsPerPage}>
            &gt;
          </button>
        </div>
        <div className="view-all">
          <a href="/Contact">
            <button>GET STARTED</button>
          </a>
        </div>
      </div>

      <div className="countdown">
            <div>
              <h2>Register Now</h2>
              <p>Get 50% OFF For All Courses</p>
              <div id="clockdiv">
                <div>
                  <span class="days">229</span>
                  <div class="text">Days</div>
                </div>
                <div>
                  <span class="hours">23</span>
                  <div class="text">Hours</div>
                </div>
                <div>
                  <span class="minutes">59</span>
                  <div class="text">Minutes</div>
                </div>
                <div>
                  <span class="seconds">59</span>
                  <div class="text">Seconds</div>
                </div>
              </div>
              <div id="form">
                <form onSubmit={handleSubmit}>
                  <input type="text" name="name" placeholder="FIRST NAME*" value={formData.name} onChange={handleChange} />
                  <input type="text" name="lname" placeholder="LAST NAME*" value={formData.lname} onChange={handleChange}/>
                  <input type="tel" name="phone" placeholder="PHONE*" value={formData.phone} onChange={handleChange}/>
                  <input type="email" name="email" placeholder="EMAIL*" value={formData.email} onChange={handleChange}/>
                  <a href="/">
                    <button>
                      GET IT NOW
                    </button>
                  </a>
                </form>
              </div>
            </div>
            <img src="./public/clients.png" alt="Clients" />

      </div>

      <div className="quotes">
            <h1>What Students Say</h1>
            <img src="./public/avatar1.jpg" alt="Student" />
            <p><span>"</span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam optio quis, repudiandae atque eos ipsa, odio alias dolorum explicabo neque praesentium doloribus eligendi. Fugiat pariatur, maiores neque consequatur numquam facere?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam tempore hic, consectetur, earum maiores vitae dolorem sed sapiente magnam voluptatibus explicabo quia itaque sequi minima quam? Aut earum molestias blanditiis.<span>"</span></p>
            <h4>John Smith</h4>
      </div>

      <div className="latest">
            <h2>Latest News</h2>
            <div className="latest-cards">
              <div className="latest-card">
                <img src="./public/blog-1.jpg" alt="Blog" />
                <div>
                  <p>10 JAN 2024</p>
                  <p> 3 COMMENTS</p>
                  <p> JOHN DOE</p>
                </div>
                <a href="/">
                <h4>Lorem ipsum dolor sit amet</h4>
                </a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolor sunt architecto maxime nam iure nulla dolores quia, placeat impedit reiciendis ipsam laborum at nesciunt quas? Maiores nostrum pariatur repudiandae!</p>
                <a href="/">Read More</a>
              </div>

              <div className="latest-card">
                <img src="./public/blog-2.jpg" alt="Blog" />
                <div>
                  <p>10 JAN 2024</p>
                  <p> 3 COMMENTS</p>
                  <p> JOHN DOE</p>
                </div>
                <a href="/">
                <h4>Lorem ipsum dolor sit amet</h4>
                </a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolor sunt architecto maxime nam iure nulla dolores quia, placeat impedit reiciendis ipsam laborum at nesciunt quas? Maiores nostrum pariatur repudiandae!</p>
                <a href="/">Read More</a>
              </div>

              <div className="latest-card">
                <img src="./public/blog-3.jpg" alt="Blog" />
                <div>
                  <p>10 JAN 2024</p>
                  <p> 3 COMMENTS</p>
                  <p> JOHN DOE</p>
                </div>
                <a href="/">
                <h4>Lorem ipsum dolor sit amet</h4>
                </a>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolor sunt architecto maxime nam iure nulla dolores quia, placeat impedit reiciendis ipsam laborum at nesciunt quas? Maiores nostrum pariatur repudiandae!</p>
                <a href="/">Read More</a>
              </div>
            </div>
      </div>

      <div className="awards">
            <img src="./public/Teacher.png" alt="Teacher" />
            <div className="content">
              <div>
                <img src="./public/badge.png" alt="Achievment" />
                <div>
                <h3>National Awards</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis elit vitae enim vehicula fermentum consectetur adipiscing elit.</p>
                </div>
              </div>

              <div>
                <img src="./public/note-pad.png" alt="Courses" />
                <div>
                <h3>Many Courses</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis elit vitae enim vehicula fermentum consectetur adipiscing elit.</p>
                </div>
              </div>

              <div>
                <img src="./public/id.png" alt="Certified" />
                <div>
                <h3>The Best Instructors</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis elit vitae enim vehicula fermentum consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
      </div>

      <div className="topbtn">
        <button onClick={top}>
          <img src="./public/top.png" alt="up-arrow" />
        </button>
      </div>

    </div>
  );
}

export default Homepage;
