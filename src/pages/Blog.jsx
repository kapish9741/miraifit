import React, { useState } from 'react';
import BlogCard from '../components/cards/BlogCard';

const categories = ['All', 'Fitness', 'Nutrition', 'Wellness', 'Technology', 'Tips'];

const posts = [
  {
    id: 1,
    title: "The Science Behind AI-Powered Fitness",
    description: "Discover how artificial intelligence is revolutionizing personalized fitness training and nutrition planning.",
    category: "Technology",
    date: "March 15, 2024",
    author: "Dr. Sarah Chen",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop"
  },
  {
    id: 2,
    title: "10 Essential Nutrients for Muscle Growth",
    description: "Learn about the key nutrients your body needs to build muscle and recover effectively.",
    category: "Nutrition",
    date: "March 12, 2024",
    author: "Mike Johnson",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&h=300&fit=crop"
  },
  {
    id: 3,
    title: "Building a Sustainable Workout Routine",
    description: "Tips and strategies for creating a fitness routine that fits your lifestyle and sticks.",
    category: "Fitness",
    date: "March 10, 2024",
    author: "Emma Wilson",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&h=300&fit=crop"
  },
  {
    id: 4,
    title: "Mental Health and Physical Fitness",
    description: "Exploring the powerful connection between exercise and mental well-being.",
    category: "Wellness",
    date: "March 8, 2024",
    author: "Dr. Alex Martinez",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop"
  },
  {
    id: 5,
    title: "Pre-Workout Nutrition Guide",
    description: "What to eat before your workout to maximize performance and results.",
    category: "Nutrition",
    date: "March 5, 2024",
    author: "Lisa Park",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&h=300&fit=crop"
  },
  {
    id: 6,
    title: "Recovery Techniques for Athletes",
    description: "Advanced recovery methods to help you bounce back faster and stronger.",
    category: "Fitness",
    date: "March 3, 2024",
    author: "Tom Davis",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop"
  },
  {
    id: 7,
    category: 'Technology',
    date: 'June 10, 2023',
    title: 'Wearable Tech Trends in 2023',
    description: 'Explore the top wearable devices enhancing fitness tracking and performance this year.',
    author: 'Alex Rivera',
    readTime: '4 min read',
    image: 'https://images.pexels.com/photos/267394/pexels-photo-267394.jpeg',
  },
  {
    id: 8,
    category: 'Nutrition',
    date: 'May 30, 2023',
    title: 'Hydration Hacks for Peak Performance',
    description: 'How much water do you *really* need? Tips for staying optimally hydrated during training.',
    author: 'Nina Patel, RD',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/1137340/pexels-photo-1137340.jpeg',
  },
  {
    id: 9,
    category: 'Mindset',
    date: 'May 18, 2023',
    title: 'Using Visualization to Improve Fitness Results',
    description: 'Train your brain to visualize success and boost your physical performance.',
    author: 'Dr. Brian Shaw',
    readTime: '7 min read',
    image: 'https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg',
  },
  {
    id: 10,
    category: 'Recovery',
    date: 'April 25, 2023',
    title: 'The Benefits of Active Recovery Days',
    description: 'Learn why doing *something* on rest days can actually speed up recovery.',
    author: 'Ashley Kim',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/3823039/pexels-photo-3823039.jpeg',
  },
  {
    id: 11,
    category: 'Fitness',
    date: 'April 5, 2023',
    title: 'High-Intensity vs Steady-State Cardio',
    description: 'Which is better for fat loss and endurance? Let’s break it down.',
    author: 'Carlos Mendes',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/4662438/pexels-photo-4662438.jpeg',
  },
  {
    id: 12,
    category: 'Nutrition',
    date: 'March 20, 2023',
    title: 'Plant-Based Protein Sources That Work',
    description: 'Fuel your gains with these powerful and complete plant-based protein options.',
    author: 'Jenna Brooks',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
  }
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts =
    selectedCategory === 'All'
      ? posts
      : posts.filter(post => post.category === selectedCategory);

  return (
    <div className="bg-black min-h-screen text-neutral-100 px-4 sm:px-6 py-12 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-b from-neutral-300 via-neutral-200 to-neutral-600 bg-clip-text text-transparent">
          MiraiFit Blogs
        </h1>
        <p className="text-neutral-400 mb-6 text-sm sm:text-base">
          Expert insights, tips, and the latest research on fitness, nutrition, and wellness.
        </p>

        <div className="flex gap-2 flex-wrap mb-8">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full transition text-xs sm:text-sm ${
                selectedCategory === category
                  ? 'bg-blue-600 text-neutral-100'
                  : 'bg-neutral-800 text-neutral-300 hover:bg-blue-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredPosts.map(post => (
            <div key={post.id} className="w-full">
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
