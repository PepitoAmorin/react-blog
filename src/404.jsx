import { Link } from "react-router-dom"

const FourOhFour = () => {
  return (
    <div className="four-oh-four">
      <h2>Page not found</h2> 
      <p>Sorry, we cant find the page you're looking for. Try the 
        <Link to='/react-blog/'> Home Page</Link>. 
      </p>
    </div>
  )
} 

export { FourOhFour }; 