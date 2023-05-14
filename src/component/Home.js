import React, {useState, useEffect} from "react";
import './Home.css';
import Navbar from './Navbar';
import Axios from 'axios';


export const Home = (props) => {
    const[name, setName] = useState('');
    const[postList, setPostList] = useState([]);

    useEffect(()=> {
        Axios.get('http://localhost:3001/getposts').then((response)=>{
            setPostList(response.data)
        })
    }, []);



    return(
        // body
        <div>
             {/* top bar */}
             <Navbar/>
            <div>
                <form className="upload-form" >
                    <div className="flex-container">
                    <div className="flex-child">
                        <label className="upload-labels" for="name">Let's Read Some Chatter!</label>
                        <br/>
                        {/* <input value={name} onChange={(e)=> setName(e.target.value)} type="text" id="name" className="upload-input" placeholder="Post Name"/>
                        <br/>
                        <button className="button" type="submit">Search</button> */}
                    </div>
                
                    </div>

                    {postList.map((val)=>{
                    return <div className ='card-container'>
                        <div className ="card-content">
                            <div className = "card-title">
                                <h3>{val.name}</h3>
                            </div>
            
                            <div className="card-body">
                                <p>{val.description}</p>
                            </div>
                        </div>
                    </div>
                })}
                </form>


                <br/>
            </div>

        </div>
    )
}
export default Home;