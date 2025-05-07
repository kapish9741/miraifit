import React from 'react';
import FeatureCard from '../cards/features';
import {Brain, Dumbbell, Utensils, Clock, ChartNoAxesColumnIncreasing, CircleUser} from 'lucide-react';
const WhyChooseUs = () => {
  const features = [
    {
      icon: <Brain className="w-10 h-10" />,
      title: 'AI-Powered Guidance',
      description: 'Get personalized workout and nutrition plans created by advanced AI.'
    },
    {
      icon: <Dumbbell className="w-10 h-10" />,
      title: 'Custom Workout Plans',
      description: 'Receive tailored exercise routines based on your goals and abilities.'
    },
    {
      icon: <Utensils className="w-10 h-10" />,
      title: 'Personalized Meal Plans',
      description: 'Discover meal recommendations that align with your nutritional needs.'
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: 'Time-Efficient',
      description: 'Optimize your workouts to fit your schedule and maximize results.'
    },
    {
      icon: <ChartNoAxesColumnIncreasing className="w-10 h-10" />,
      title: 'Progress Tracking',
      description: 'Monitor your fitness journey with detailed progress analytics.'
    },
    {
      icon: <CircleUser className="w-10 h-10" />,
      title: 'Personal Profile',
      description: 'Maintain your fitness data in a secure, accessible profile.'
    }
  ];

  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-b from-neutral-300 via-neutral-100 to-neutral-600 bg-clip-text text-transparent">Why Choose MiraiFit?</h2>
        <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
          Our AI-powered platform offers unique benefits to help you reach your fitness goals.
        </p>
        
        <div className="flex flex-wrap justify-center">
          {features.map((feature, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;