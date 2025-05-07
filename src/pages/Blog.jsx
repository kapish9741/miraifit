import React from 'react';
import BlogCard from '../components/cards/BlogCard';

const categories = ['All', 'Fitness', 'Nutrition', 'Technology', 'Mindset', 'Recovery'];

const posts = [
  {
    id: 1,
    category: 'Technology',
    date: 'May 2, 2023',
    title: 'How AI is Revolutionizing Personal Fitness',
    description:
      'Discover how artificial intelligence is transforming the way we approach fitness and health goals.',
    author: 'Dr. Sarah Johnson',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg',
  },
  {
    id: 2,
    category: 'Fitness',
    date: 'April 15, 2023',
    title: 'The Science Behind Effective Workout Plans',
    description:
      'Learn about the scientific principles that make workout plans effective and how to apply them.',
    author: 'Mike Thompson',
    readTime: '8 min read',
    image: 'https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg',
  },
  {
    id: 3,
    category: 'Nutrition',
    date: 'March 28, 2023',
    title: 'Nutrition Myths Debunked by Science',
    description:
      'Separating fact from fiction: common nutrition myths that might be holding back your fitness progress.',
    author: 'Lisa Chen, RD',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/949129/pexels-photo-949129.jpeg',
  },
  {
    id: 4,
    category: 'Mindset',
    date: 'March 10, 2023',
    title: 'Building Mental Resilience for Long-Term Fitness',
    description:
      'Explore techniques to strengthen your mental game and stay consistent with your fitness routine over time.',
    author: 'James Keller',
    readTime: '7 min read',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 5,
    category: 'Recovery',
    date: 'February 5, 2023',
    title: 'The Science of Sleep and Muscle Recovery',
    description:
      'Learn how proper sleep affects recovery, performance, and gains — and how to improve it.',
    author: 'Dr. Monica Reyes',
    readTime: '6 min read',
    image: 'https://images.pexels.com/photos/1552249/pexels-photo-1552249.jpeg',
  },
  {
    id: 6,
    category: 'Fitness',
    date: 'January 20, 2023',
    title: 'Bodyweight Workouts That Build Muscle',
    description:
      'No gym? No problem. Discover powerful bodyweight exercises that effectively develop strength and muscle mass.',
    author: 'Kevin Park',
    readTime: '5 min read',
    image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg',
  }  
  
];

const Blog = () => {
  return (
    <div className="bg-black min-h-screen text-neutral-100 px-6 py-20">
      <h1 className="text-4xl font-bold  mb-2 bg-gradient-to-b from-neutral-300 via-neutral-200 to-neutral-600 bg-clip-text text-transparent">MiraiFit Blogs</h1>
      <p className="text-neutral-400 mb-6">Expert insights, tips, and the latest research on fitness, nutrition, and wellness.</p>

      <div className="flex gap-2 flex-wrap mb-8">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-1 rounded-full ${
              category === 'All' ? 'bg-blue-600 text-neutral-100' : 'bg-neutral-800 text-neutral-300'
            } hover:bg-blue-700 transition`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-6">
        {posts.map(post => (
          <div key={post.id} className="w-full sm:w-[20vw] md:w-[30vw]">
            <BlogCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
