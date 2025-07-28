import React from 'react';
import FeatureCard from '../cards/features';
import {Brain, Dumbbell, Utensils, Clock, BarChart3, CircleUser} from 'lucide-react';
const WhyChooseUs = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: 'AI-Powered Guidance',
      description: 'Get personalized workout and nutrition plans created by advanced AI.'
    },
    {
      icon: <Dumbbell className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: 'Custom Workout Plans',
      description: 'Receive tailored exercise routines based on your goals and abilities.'
    },
    {
      icon: <Utensils className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: 'Personalized Meal Plans',
      description: 'Discover meal recommendations that align with your nutritional needs.'
    },
    {
      icon: <Clock className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: 'Time-Efficient',
      description: 'Optimize your workouts to fit your schedule and maximize results.'
    },
    {
      icon: <BarChart3 className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: 'Progress Tracking',
      description: 'Monitor your fitness journey with detailed progress analytics.'
    },
    {
      icon: <CircleUser className="w-8 h-8 sm:w-10 sm:h-10" />,
      title: 'Personal Profile',
      description: 'Maintain your fitness data in a secure, accessible profile.'
    }
  ];

  return (
    <section className="bg-black py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-3 sm:mb-4 bg-gradient-to-b from-neutral-300 via-neutral-100 to-neutral-600 bg-clip-text text-transparent">Why Choose MiraiFit?</h2>
        <p className="text-base sm:text-lg lg:text-xl text-neutral-400 text-center mb-8 sm:mb-10 lg:mb-12 max-w-3xl mx-auto px-4">
          Our AI-powered platform offers unique benefits to help you reach your fitness goals.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="w-full">
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