import React, { useState } from "react";
import './Post.css';
import Axios from 'axios';
import Navbar from './Navbar';


export const Post = (props) => {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const [data, setData] = useState({
        name: "",
        description: "",
    });
    const [posts, setPosts] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        Axios.post(url, data)
            .then((res) => {
                console.log(res.data);
                setPosts([...posts, res.data]); // add the new post to the existing array of posts
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

    return(
        <div>
            <Navbar/>
            <div>
                <form className="upload-form" onSubmit={handleSubmit}>
                    <div className="flex-container">
                    <div className="flex-child">
                        <label className="upload-labels" for="name">Post Name:</label>
                        <br/>
                        <input value={data.name} onChange={handleInputChange} type="text" id="name" className="upload-input"/>
                        <br/>
                        <br/>
                        <label className="upload-labels description-label" for="course">Description:</label>
                        <br/>
                        <textarea  className="description" onChange={handleInputChange} id="description" cols="60" rows="10"></textarea>
                        <br/>
                        <br/>
                        <button className="button" type="submit">Post</button>
                    </div>

                    <div className="flex-child">
                       
                    </div>
                    </div>
                </form>
            </div>
            <div>
                <h2>Posts:</h2>
                <ul>
                    {posts.map(post => (
                        <li key={post.id}>{post.name}: {post.description}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
export default Post;
