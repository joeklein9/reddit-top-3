import {React, useEffect, useState} from 'react'
import Card from "/src/Card"


export default function App () {

  const [posts, setPosts] = useState([])
  const [subreddit, setSubreddit] = useState ("")

  const handleChange = (e) => {
    setSubreddit (e.target.value)
  }

 

  useEffect(() => {
    fetch("https://www.reddit.com/r/frontend/top/.json?t=all&limit=3").then(
      res => {
        if (res.status !== 200) {
          console.warn("Warning: Something is wrong with the api.");
          return;
        }
        res.json().then(data => {
          if (data != null)
            console.log(data)
            setPosts(data.data.children)
            
        });
      }
    )
  }, []);

  const postElements  = posts.map(post => {
    return <Card 
      ups = {post.data.ups}
      title = {post.data.title}
      subreddit = {post.data.subreddit}
      preview = {post.data.preview}
      permalink = {post.data.permalink}
      author = {post.data.author}
      comments = {post.data.num_comments}
    
    
    />
  })


  return (
  <div>
   r/ <input type="text" value={subreddit} onChange={handleChange} placeholder = "Enter subreddit name" />
  
    {postElements}

    
  </div>
    
    
  )
}
