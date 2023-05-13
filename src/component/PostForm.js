import React, { useState } from 'react';
import Axios from 'axios';

function PostForm() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  const [data, setData] = useState({
    title: " ",
    post: " ",
  });

  function handleSubmit(e) {
    e.preventDefault();
    Axios.post(url, data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function handleInputChange(e) {
    const { id, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id="title"
          value={data.title}
          placeholder="Title"
          type="text"
          onChange={handleInputChange}
        />
        <input
          id="post"
          value={data.post}
          placeholder="Post"
          type="text"
          onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default PostForm;
