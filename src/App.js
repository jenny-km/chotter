import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './component/Home';
import Post from './component/Post';
import Login from './component/Login';
import Register from './component/Register';


function App() {
  return (
   <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<Post />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          {/* <Route path="/logout" element={<Login />} /> */}
       </Routes>
    
    </>
  );
}

export default App;
