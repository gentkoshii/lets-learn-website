import { Link } from "react-router-dom"
import "./Blog.scss";


function Blog() {
  return (
    <div className="Blog">
      <div className="Intro">
          <h1>Blog</h1>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <p>&gt;</p>
        <p>Blog</p>
      </div>
    </div>
)
}
  
  export default Blog