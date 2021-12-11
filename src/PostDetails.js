import { useHistory, useParams } from "react-router"; 
import { useFetch } from './useFetch'; 


const PostDetails = () => { 
  const { id } = useParams();  
  const fetchUrl = `http://localhost:8000/posts/${id}`;
  const { data: posts, loading, error } = useFetch(fetchUrl); 
  const hist = useHistory(); 

  const handleDelete = () => {
    fetch(fetchUrl, {
      method: 'DELETE' 
    }).then(() => {
      hist.push('/'); 
    }) 
  } 
  
  return ( 

    <div className='post-details'> 
      {error && <p>{ error }</p>}
      {loading && <p>Loading...</p>} 
      { posts && ( 
        <article>
          <h2>{ posts.title}</h2> 
          <h3>By { posts.author }</h3>
          <p>{ posts.body } </p> 
          <button onClick={ handleDelete }>Delete post</button>
        </article>
      )}
      
    </div>
  )
}

export { PostDetails };  

