import {React, useEffect, useState} from 'react'
import Card from "/src/Card"


export default function App () {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("https://www.reddit.com/r/pics/top/.json?t=all&limit=3").then(
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




  return (
    <Card 
      
    
    />
  )
}
