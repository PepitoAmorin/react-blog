const PostList = ({ posts, title }) => { 
  return ( 
    <div className='post-list'> 
      <h2>{ title }</h2>
      {posts.map(post => (
        <div className="post-preview" key={post.id}>
          <h2>{ post.title }</h2>
          <p>By { post.author }</p> 
        </div>
      ))}
    </div>
  )
}

export { PostList }; 
