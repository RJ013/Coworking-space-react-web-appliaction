import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';


const IMAGE_URL_PREFIX = 'http://localhost:5000';

const Eachblog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/blogs/${id}`);
        console.log('Fetched blog data:', res.data); // Add logging here
        if (res.data.success) {
          setBlog(res.data.blogs); // Use res.data.blogs to set the blog data
        } else {
          setError('Failed to fetch blog');
        }
      } catch (err) {
        console.error('Error fetching blog:', err); // Add logging here
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <>
      <NavBar />
      <div className="blog-container">
        {blog ? (
          <>
            <h1 className="blog-title">{blog.title}</h1>
            <img
              src={`${IMAGE_URL_PREFIX}${blog.coverImageURL}`}
              className="blog-image"
              alt={blog.title}
            />
            <div className="blog-body" dangerouslySetInnerHTML={{ __html: blog.body }} />
          </>
        ) : (
          <div className="no-blog">No blog found</div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Eachblog;
