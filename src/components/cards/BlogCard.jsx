import React from 'react';

const BlogCard = ({ post }) => {
  return (
    <div className="bg-neutral-950 border border-neutral-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
      {post.image ? (
        <img src={post.image} alt={post.title} className="h-40 w-full object-cover" />
        ) : (
        <div className="h-40 bg-neutral-700 flex items-center justify-center text-neutral-500">
            <span className="text-sm">📷 Image Placeholder</span>
        </div>
        )}
      <div className="p-4">
        <p className="text-sm text-neutral-400">{post.category} • {post.date}</p>
        <h2 className="text-lg font-bold mt-2 mb-1">{post.title}</h2>
        <p className="text-sm text-neutral-300 mb-4">{post.description}</p>
        <div className="flex items-center justify-between text-sm text-neutral-400">
          <span>👤 {post.author}</span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
