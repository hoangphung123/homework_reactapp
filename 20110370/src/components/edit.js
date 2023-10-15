import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import '../styles/edit.css'

const Edit = ({ posts, updatePost }) => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const navigate = useNavigate(); // Sử dụng hook useNavigate

  useEffect(() => {
    // Tìm bài viết cần chỉnh sửa dựa trên "id" và thiết lập nội dung vào trạng thái (state)
    const postToEdit = posts.find((post) => post.id === Number(id));
    if (postToEdit) {
      setTitle(postToEdit.title);
    }
  }, [id, posts]);

  const handleUpdatePost = () => {
    // Cập nhật bài viết với nội dung mới
    const updatedPosts = posts.map((post) => {
      if (post.id === Number(id)) {
        return { id: post.id, title };
      }
      return post;
    });

    // Gọi hàm cập nhật danh sách bài viết trong trang chính
    updatePost(updatedPosts);

    // Sau khi cập nhật bài viết, sử dụng navigate để quay về trang Home
    navigate('/');
  };

  return (
    <div>
      <h1>Edit Post</h1>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button onClick={handleUpdatePost}>Update</button>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default Edit;
