import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home'
import Create from './components/create'
import Edit from './components/edit'
import React, { useState } from 'react';

const App = () => {
  const [posts, setPosts] = useState([]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const updatePost = (updatedPosts) => {
    setPosts(updatedPosts);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home posts={posts} deletePost={updatePost} />}
        />
        <Route
          path="/create"
          element={<Create createPost={createPost} />}
        />
        <Route
          path="/edit/:id"
          element={<Edit posts={posts} updatePost={updatePost} />}
        />
      </Routes>
    </Router>
  );
};

export default App;