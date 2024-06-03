// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const IMAGE_URL_PREFIX = 'https://form2-7uno.onrender.com';

function App() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('https://form2-7uno.onrender.com/api/blogs');
      setBlogs(response.data.blogs);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  return (
    <div>
      <h1>All Blogs</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog._id}>
            <h2>{blog.title}</h2>
            <p>{blog.body}</p>
            {blog.coverImageURL && (
              <img src={`${IMAGE_URL_PREFIX}${blog.coverImageURL}`} alt="Cover" style={{ maxWidth: '300px' }} />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
