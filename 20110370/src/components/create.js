import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/create.css'
const Create = ({ createPost }) => {
  const [title, setTitle] = useState('');
  const navigate = useNavigate(); // Sử dụng hook useNavigate

  const handleCreatePost = () => {
    // Handle the creation of a new post
    createPost({ id: Date.now(), title: title });

    // Sau khi tạo bài viết, sử dụng navigate để quay về trang Home
    navigate('/');
  };

  return (
    <div>
      <h1>Create Post</h1>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={handleCreatePost}>Create</button>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default Create;
