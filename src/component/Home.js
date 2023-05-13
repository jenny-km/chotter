import React, { useState, useEffect } from "react";
import './Home.css';
import Navbar from './Navbar';
import Axios from 'axios';
import Card from '../Card';

export const Home = (props) => {
    const[name, setName] = useState('');
    const[posts, setPosts] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                const newPosts = res.data.map(post => [post.title, post.body]);
                setPosts(newPosts);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return(
        // body
        <div>
             {/* top bar */}
             <Navbar/>
            <div>
                <form className="upload-form" onSubmit={handleSubmit}>
                    <div className="flex-container">
                    <div className="flex-child">
                        <label className="upload-labels" htmlFor="name">Let's Look Up Some Chatter!</label>
                        <br/>
                        <input value={name} onChange={(e)=> setName(e.target.value)} type="text" id="name" className="upload-input" placeholder="Post Name"/>
                        <br/>
                        <button className="button" type="submit">Search</button>
                    </div>

                    <div className="flex-child">
                        <br/>
                        {/* <label className="upload-labels" htmlFor="filter">Filter Your Search:</label>
                        <br/>
                        <input value={university} onChange={(e)=> setUniversity(e.target.value)} type="text" className="upload-input" placeholder="University/School"/>
                        <br/>
                        <br/>
                        <label className="upload-labels" htmlFor="course">Course:</label>
                        <br/>
                        <input value={course} onChange={(e)=> setCourse(e.target.value)} type="text" className="upload-input" placeholder="Course/Subject"/> */}
                    </div>
                    </div>
                </form>
                <br/>
                <br/>
                <Card
        title='Card Title'
        imageUrl='https://cdn.discordapp.com/attachments/1106981555227873422/1107011761640583178/chotter-logo.png'
        body='Card information
        '/>
                    <table className="search-table">
                    <tr>
                        <th>Post Name</th>
                        <th>Description</th>
                    </tr>
                    {posts.map((post, index) => (
                        <tr key={index}>
                            <td>{post[0]}</td>
                            <td>{post[1]}</td>
                        </tr>
                    ))}
                    </table>
            </div>

        </div>
    )
}
export default Home;
