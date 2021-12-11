import { useState, useEffect } from 'react'; 
import { PostList } from './PostList'; 

const fetchUrl = 'http://localhost:8000/postsi'; 

const Home = () => {  
  const [posts, setPosts] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => { 
    setTimeout(() => {
      fetch(fetchUrl) 
        .then(response => { 
          console.log(response); 
          if (!response.ok) {
            throw Error(`Posts can't be fetched, please reload.`)
          }
          return response.json(); 
        })
        .then(data => {
          setPosts(data); 
          setLoading(false); 
          setError(null); 
        }) 
        .catch(error => {
          setError(error.message); 
          setLoading(false); 
        }) 
    }, 3000)  
  }, []); 
  
  return (
    <div className='home'> 
      {error && <p>{ error }</p>}
      {loading && <p>Loading...</p>}
      {posts && <PostList posts={ posts } title='All posts'/>} 
    </div>
  )
}

export { Home }; 