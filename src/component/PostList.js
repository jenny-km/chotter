import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function PostList() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    Axios.get(url)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Posts:</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.post}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostList;
