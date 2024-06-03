// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
const IMAGE_URL_PREFIX = 'http://localhost:5000';
import { Link } from 'react-router-dom';
import './css/blog.css';
import NavBar from './NavBar';
import Footer from './Footer';

function Homeblog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/blogs');
      setBlogs(response.data.blogs);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  return ( 
  <div>
    <NavBar/>
  <div className="header">
  <h1>Blogs</h1>
</div>
    <div className="container mt-3">
      <div className="row row-cols-4">
        {blogs.map((blog, index) => (
          <div key={index} className="col">
            <div className="card col all-card" style={{ width: '18rem' }}>
              <img src={`${IMAGE_URL_PREFIX}${blog.coverImageURL}`}  className="card-img-top" alt={blog.title} style={{ maxWidth: '300px' }}/>
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <Link to={`/blog/${blog._id}`} className="btn btn-primary">
                  View
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Homeblog;
