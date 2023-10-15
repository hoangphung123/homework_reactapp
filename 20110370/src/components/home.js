import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css'

const Home = ({ posts, deletePost }) => {
  const [localPosts, setLocalPosts] = useState([]);
  const [commentInput, setCommentInput] = useState('');
  const [comments, setComments] = useState({}); // Sử dụng đối tượng để lưu trữ comment theo postId

  useEffect(() => {
    setLocalPosts(posts);
  }, [posts]);

  const handleDeletePost = (postId) => {
    // Xóa bài viết với id tương ứng
    const updatedPosts = localPosts.filter((post) => post.id !== postId);
    deletePost(updatedPosts);
  };

  const handleAddComment = (postId) => {
    const newComment = commentInput;
    if (newComment.trim() === '') return;

    // Lấy danh sách comment hiện có hoặc tạo mới nếu chưa có comment cho postId này
    const postComments = comments[postId] || [];

    // Thêm comment mới vào danh sách comment
    postComments.push(newComment);

    // Cập nhật trạng thái comment cho postId
    setComments({
      ...comments,
      [postId]: postComments,
    });

    // Xóa nội dung comment khỏi ô nhập
    setCommentInput('');
  };

  return (
    <div>
      <h1>Home Page</h1>
      <ul>
        {localPosts.map((post) => (
          <li key={post.id}>
            {post.title}
            <div>
            <ul class="coment">
              {comments[post.id] &&
                comments[post.id].map((comment, index) => (
                  <li key={index}>{comment}</li>
                ))}
            </ul>
              <div class="comment">
              <input
                type="text"
                placeholder="Add a comment"
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
              />
              <button onClick={() => handleAddComment(post.id)}>
                Add Comment
              </button>
              </div>
              <Link to={`/edit/${post.id}`}>Edit</Link>
              <button class="delete" onClick={() => handleDeletePost(post.id)}>Delete</button>
            </div>
            
          </li>
        ))}
      </ul>
      <Link to="/create">Create New Post</Link>
    </div>
  );
};

export default Home;
