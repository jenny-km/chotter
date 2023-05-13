import React, {useState} from "react";
import './Post.css';
import Navbar from './Navbar';


export const Post = (props) => {
    const[name, setName] = useState('');
    const[university, setUniversity] = useState('');
    const[course, setCourse] = useState('');
    const[selectedFile, setSelectedFile] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
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
                        <label className="upload-labels" for="name">Post Name:</label>
                        <br/>
                        <input value={name} onChange={(e)=> setName(e.target.value)} type="text" id="name" className="upload-input"/>
                        <br/>
                        <br/>
                        <label className="upload-labels description-label" for="course">Description:</label>
                        <br/>
                        <textarea className="description" cols="60" rows="10"></textarea>
                        <br/>
                        <br/>
                        {/* <input value={course} onChange={(e)=> setCourse(e.target.value)} type="text" /> */}
                        <button className="button" type="submit">Post</button>
                    </div>

                    <div className="flex-child">
                       
                    </div>
                    </div>
                </form>
            </div>

        </div>
    )
}
export default Post;