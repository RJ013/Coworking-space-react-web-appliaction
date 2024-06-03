import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BlogList = () => {
    const [blogs, setBlogs] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await axios.get('https://form2-7uno.onrender.com/api/blogs');
                setBlogs(response.data);
            } catch (error) {
                setError('Failed to fetch blogs. Please try again later.');
                console.error(error);
            }
        };

        fetchBlogs();
    }, []);

    return (
        <div>
            <h1>Blog List</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {blogs.map(blog => (
                <div key={blog._id}>
                    <h2>{blog.heading}</h2>
                    {blog.imageUrl && <img src={blog.imageUrl} alt="Blog" style={{ maxWidth: '300px' }} />}
                    <p>{blog.content}</p>
                    
                </div>
            ))}
        </div>
    );
};

export default BlogList;
