import { React, useEffect, useState } from 'react';
import Card from "/src/Card";
import Navbar from "/src/Navbar"


export default function App() {

  const [posts, setPosts] = useState([]);
  const [subreddit, setSubreddit] = useState("");

  const handleChange = (e) => {
    setSubreddit(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    fetch(`https://www.reddit.com/r/${subreddit}/top/.json?t=all&limit=5`)
      .then(res => {
        if (res.status !== 200) {
          console.warn("Warning: Something is wrong with the api.");
          return;
        }
        res.json().then(data => {
          if (data != null) {
            console.log(data);
            setPosts(data.data.children);
          }
        });
      });
      
  };

  useEffect(() => {
    fetch("https://www.reddit.com/r/wallpapers/top/.json?t=all&limit=5").then(
      res => {
        if (res.status !== 200) {
          console.warn("Warning: Something is wrong with the api.");
          return;
        }
        res.json().then(data => {
          if (data != null) {
            console.log(data);
            setPosts(data.data.children);
          }
        });
      }
    );
  }, []);

  const postElements = posts.map(post => {
    return (
      <Card
        ups={post.data.ups}
        title={<a href={`https://www.reddit.com${post.data.permalink}`}target="_blank">{post.data.title}</a>}
        subreddit={post.data.subreddit}
        preview={post.data.preview}
        permalink={post.data.permalink}
        author={post.data.author}
        comments={<a href={`https://www.reddit.com${post.data.permalink}comments?sort=top`}target="_blank">{post.data.num_comments} comments</a>}
        selftext={post.data.selftext}
        created={post.data.created}
        key = {post.data.id}
        
      />
    );
  });


  return (
    <>
      <Navbar />
      <form className = "input-form" onSubmit={handleSubmit}>
        <input className ="input-area" type="text" value={subreddit} onChange={handleChange} placeholder="Enter subreddit name, e.g. 'wallpapers'" />
        <button className = "submit" type="submit">GET TOP 5</button>
      </form>

      <h1 className="subreddit-title">{subreddit !== "" ? `r/ ${subreddit}` : null}</h1>

      <div className="main">

        
        {postElements}


      </div>

    </>
  )
}
