import React, { useState } from 'react';
import axios from 'axios';

const CreateBlogPage = () => {
    const [heading, setHeading] = useState('');
    const [content, setContent] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!heading || !content || !imageUrl) {
            setError('Please fill in all fields.');
            return;
        }
        try {
            setSubmitting(true);
            const response = await axios.post('https://form2-7uno.onrender.com/api/blogs', { heading, content, imageUrl });
            setSuccessMessage('Blog post submitted successfully!');
            setHeading('');
            setContent('');
            setImageUrl('');
            console.log(response.data); // Newly created blog object
        } catch (error) {
            setError('Failed to submit blog post. Please try again later.');
            console.error(error);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div>
            <h1>Create a New Blog Post</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Heading" value={heading} onChange={(e) => setHeading(e.target.value)} />
                <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} />
                <input type="text" placeholder="Image URL" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                <button type="submit" disabled={submitting}>Submit</button>
            </form>
        </div>
    );
};

export default CreateBlogPage;
