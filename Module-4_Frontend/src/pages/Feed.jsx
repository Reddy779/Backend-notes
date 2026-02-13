import React from 'react'
import { useState, useEffect } from 'react'
import axios from "axios";

const Feed = () => {

  const [posts, setPosts] = useState([
    // {
    //   _id: "1",
    //   image: "https://ik.imagekit.io/eyceqgtvqw/image_M6yII7mhx.jpg",
    //   caption: "test_caption_2"

    // }
  ])

  useEffect(() => {

    axios.get("http://localhost:3000/posts/")
      .then((res) => {

        setPosts(res.data.posts);

      })

  }, [])



  return (
    <section className='feed-section'>
      <h1>Posts</h1>
      {
        posts.length > 0 ? (
          posts.map((post) => (
            <div key={post._id} className='post-card'>
              <img src={post.image} alt={post.caption} />
              <p>{post.caption}</p>
            </div>
          ))
        ) : (
          <h1> No Posts Available</h1>
        )
      }
    </section>
  )
}

export default Feed
