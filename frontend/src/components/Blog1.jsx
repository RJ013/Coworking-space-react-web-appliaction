import React, { useState } from 'react';
import axios from 'axios';
import './css/Blog1.css';

function Blog1() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [coverImage, setCoverImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCoverImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('body', body); // Assuming body contains HTML or plain text with newlines
    formData.append('coverImage', coverImage);

    try {
      await axios.post('http://localhost:5000/api/blogs', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Blog posted successfully!');
      // Clear form fields after successful submission
      setTitle('');
      setBody('');
      setCoverImage(null);
      setPreviewImage(null);
    } catch (error) {
      console.error('Error posting blog:', error);
      alert('Failed to post blog. Please try again later.');
    }
  };

  return (
    <div className='signin-form'>
      <h1>Post a Blog</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <textarea
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="coverImage">Cover Image:</label>
          <input
            type="file"
            id="coverImage"
            accept="image/*"
            onChange={handleFileChange}
            required
          />
          {previewImage && (
            <img src={previewImage} alt="Preview" className="preview-image" />
          )}
        </div>
        <button type="submit">Post Blog</button>
      </form>
    </div>
  );
}

export default Blog1;
