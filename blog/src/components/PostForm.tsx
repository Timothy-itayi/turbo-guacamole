// components/PostForm.tsx
import { useState } from 'react';

const  PostForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const response = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, content }),
    });
    if (response.ok) {
      setTitle('');
      setDescription('');
      setContent('');
      
      
      alert('Post added successfully!');
    }
  };

    return (
      <div className='flex text-black bg-white p-8'>
        <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-lg">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded text-black"
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded text-black"
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded text-black"
          />
          <button 
            type="submit" 
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Add Post
          </button>
        </form>
      </div>
    );
  }
  
   
 

export default PostForm;
