import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./blogCard.scss";


const blogData = [
  { id: 1, author: "JOHN DOE", date: "10 JAN 2024", comments: "3 COMMENTS", title: "The Education Business", text: "This is a description..." },
  { id: 2, author: "JOHN SMITH", date: "23 FEB 2024", comments: "2 COMMENTS", title: "How to Grow your Business", text: "This is a description..." },
];

function Card() {

  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/`);
  };

  return (
    <div className="blogCard">
      {blogData.map(blog => (
        <div className="blog" key={blog.id}>
          <a href=""><img src={`./public/course${blog.id}.jpg`} alt="blogPic" /></a>
          <div className='wrapper'>
            <p>{blog.date}</p>
            <p>{blog.comments}</p>
            <p>{blog.author}</p>
          </div>
          <h2>{blog.title}</h2>
          <p>{blog.text}</p>
          <button onClick={() => handleClick(blog.id)}>Read More</button>
        </div>
      ))}
    </div>
  );
}

export default Card;
