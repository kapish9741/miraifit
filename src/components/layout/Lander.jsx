import React from 'react';
import { MoveRight } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedCard from '../cards/AnimatedCard'


const Lander = () => {
  return (
    <>
        <div className="flex flex-col gap-20 lg:flex-row w-full min-h-[60vh] items-center px-4 sm:px-8 lg:px-16 xl:px-24 max-w-7xl mx-auto">
        <div className="w-full lg:w-1/2 flex flex-col items-center text-center lg:text-left lg:items-start">
            <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}      
            className="text-3xl md:text-5xl font-extrabold bg-gradient-to-b from-neutral-300 via-neutral-200 to-neutral-700 bg-clip-text text-transparent mb-6">
            Transform Your Fitness Journey With AI-Powered Guidance
            </motion.h1>

            <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-lg md:text-xl text-neutral-400 mb-6">
            ApexFitness uses advanced AI to create personalized workout and meal plans tailored to your unique goals and preferences.
            </motion.p>

            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4">
            <button className="uiverse-button-a">
                <MoveRight />
                <div className="text">Get Started</div>
            </button>

            <button className="px-6 py-3 rounded-lg border border-neutral-100 text-neutral-100 hover:bg-neutral-300 hover:text-neutral-950 transition-colors cursor-pointer">
                Learn More
            </button>
            </motion.div>
        </div>

        <div className="w-full lg:w-1/2 flex justify-center items-center lg:mt-0">
            <AnimatedCard />
        </div>
        </div>
    </>
  );
};

export default Lander;
