import { Link } from 'react-router-dom'; 

const Navbar = () => {
  return (
    <div className='navbar'> 
      <h1>Blog title</h1>
      <div className="links">
        <Link to="/react-blog/">Home</Link>
        <Link to="/react-blog/create/">New post</Link>
      </div>
      
    </div>
  )
}

export { Navbar } 
