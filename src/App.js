import React from 'react';
import logo from './logo.svg';
import './App.css';
import PostForm from './components/PostForm'
import PostList from './components/PostList'



function App() {
  return (
    <div className="App">
      <PostForm />
      <PostList />
      </div>
  );
}

export default App;

