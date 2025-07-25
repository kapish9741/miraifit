import {React, useState} from 'react';
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
    <div className="bg-black min-h-screen text-neutral-100 px-6 py-20">
      <h1 className="text-4xl font-bold mb-2 bg-gradient-to-b from-neutral-300 via-neutral-200 to-neutral-600 bg-clip-text text-transparent">
        MiraiFit Blogs
      </h1>
      <p className="text-neutral-400 mb-6">
        Expert insights, tips, and the latest research on fitness, nutrition, and wellness.
      </p>

      <div className="flex gap-2 flex-wrap mb-8">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-1 rounded-full transition ${
              selectedCategory === category
                ? 'bg-blue-600 text-neutral-100'
                : 'bg-neutral-800 text-neutral-300 hover:bg-blue-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-6">
        {filteredPosts.map(post => (
          <div key={post.id} className="w-full sm:w-[20vw] md:w-[30vw]">
            <BlogCard post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
