import { Link } from 'react-router-dom'; 

const PostList = ({ posts, title }) => { 
  return ( 
    <div className='post-list'> 
      <h2>{ title }</h2>
      {posts.map(post => (
        <div className="post-preview" key={post.id}> 
          <Link to={`/post/${post.id}`}> 
            <h2>{ post.title }</h2>
            <p>By { post.author }</p>
          </Link> 
        </div>
      ))}
    </div>
  )
}

export { PostList }; 
