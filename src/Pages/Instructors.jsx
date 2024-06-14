import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Instructors.scss";

function Instructors() {
  
  const [images, setImages] = useState([]);

  useEffect(() => {
    Promise.all(
      Array.from({ length: 5 }).map(() =>
        fetch("https://picsum.photos/200")
          .then((response) => response.url)
          .catch((error) => console.error("Error fetching image:", error))
      )
    ).then((imageUrls) => setImages(imageUrls));
  }, []);

  return (
    <div className="Instructors">
      <div className="Intro">
        <h1>Instructors</h1>
      </div>

      <div className="wrapper">
        <div className="links">
          <Link to="/">Home</Link>
          <p>&gt;</p>
          <p>Instructors</p>
        </div>

        <div className="instructors-cards">
          {images.map((image, index) => (
            <div className="card" key={index}>
              <img src={image} alt="Avatar" />
              <div className="details">
                <p>Full Name</p>
                <p>Available Courses</p>
                <p>Average Rating</p>
                
                <Link to="/">
                <button id="b">View Course</button>
                </Link>
                <h2>John Doe</h2>
                <h3>12</h3>
                <h3>4.75</h3>
                <p id="p">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
                  incidunt ut quae modi et neque tempore quas corrupti quibusdam
                  autem ab aut, quis nemo enim voluptas, laborum consectetur, iure
                  laudantium. <br />
                  <br /> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quisquam vel suscipit aspernatur voluptatibus consectetur ad,
                  modi deleniti cupiditate sunt, harum aut mollitia explicabo
                  voluptatum quis culpa, asperiores ullam. Odit, nesciunt.
                </p>
              </div>
            </div>
          ))}
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

export default Instructors;
