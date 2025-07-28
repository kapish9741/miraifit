import React from 'react';
import { User } from 'lucide-react'

const BlogCard = ({ post }) => {
  return (
    <div className="bg-neutral-950 border border-neutral-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 h-full flex flex-col">
      {post.image ? (
        <img src={post.image} alt={post.title} className="h-40 sm:h-48 lg:h-60 w-full object-cover" />
        ) : (
        <div className="h-32 sm:h-40 lg:h-48 bg-neutral-700 flex items-center justify-center text-neutral-500">
            <span className="text-xs sm:text-sm">📷 Image Placeholder</span>
        </div>
        )}
      <div className="p-3 sm:p-4 flex-1 flex flex-col">
        <p className="text-xs sm:text-sm text-neutral-400 mb-2">{post.category} • {post.date}</p>
        <h2 className="text-sm sm:text-base lg:text-lg font-bold mb-2 flex-1">{post.title}</h2>
        <p className="text-xs sm:text-sm text-neutral-300 mb-3 flex-1">{post.description}</p>
        <div className="flex items-center justify-between text-xs sm:text-sm text-neutral-400 mt-auto">
          <span className="flex items-center gap-1"><User className='w-3 h-3 sm:w-4 sm:h-4' />{post.author}</span>
          <span>{post.readTime}</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
