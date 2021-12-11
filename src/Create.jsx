import { useState } from 'react'; 
import { useHistory } from 'react-router-dom'; 

const fetchUrl = 'http://localhost:8000/posts'; 

 

const Create = () => { 
  const [title, setTitle] = useState(''); 
  const [body, setBody] = useState(''); 
  const [author, setAuthor] = useState('none'); 
  const [posting, setPosting] = useState(false); 
  const hist = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault(); 
    const postObject = { title, body, author }; 
    setPosting(true); 

    fetch(fetchUrl, {
      method: 'POST', 
      headers: {"Content-Type": "application/json"}, 
      body: JSON.stringify(postObject)
    }).then(() => {
      setPosting(false); 
      hist.push('/react-blog/'); 
    }) 
  }

  return (
    <div className='create'>
      <h2>Add a new post! </h2> 
      <form onSubmit={ handleSubmit }>
        <label>Title: </label> 
        <input 
          type="text" 
          required  
          value={ title } 
          onChange={(e) => setTitle(e.target.value)}
        /> 
        <label>Body: </label> 
        <textarea 
          required 
          value={ body } 
          onChange={(e) => setBody(e.target.value)}
        >
        </textarea> 
        <label>Author: </label> 
        <select 
          value={ author } 
          onChange={(e) => setAuthor(e.target.value)}
        > 
          <option value="none" disabled hidden>Select an author</option>
          <option value="Juan Carlos">Juan Carlos</option> 
          <option value="Alberto">Alberto</option> 
          <option value="Federico">Federico</option>
        </select> 
        {!posting && <button>Add post</button>}
        {posting && <button disabled>Posting to your blog!</button>}
      </form> 
      <p>{ title }</p>
      <p>{ body }</p>
      <p>Author: { author }</p>
    </div>
  )
}

export { Create }; 
