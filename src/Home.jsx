import { useFetch } from './useFetch'; 
import { PostList } from './PostList'; 


const fetchUrl = 'http://localhost:8000/posts'; 

const Home = () => {  
  const { data: posts, loading, error } = useFetch(fetchUrl);  
  
  return (
    <div className='home'> 
      {error && <p>{ error }</p>}
      {loading && <p>Loading...</p>}
      {posts && <PostList posts={ posts } title='All posts'/>} 
    </div>
  )
}

export { Home }; 