import React from "react";
import Lander from '../components/layout/Lander.jsx';
import WhyChooseUs from "../components/layout/WhyChooseUs.jsx";
import CalorieCounter from '../components/layout/CalorieCounter.jsx'
import HeroVideo from '../components/layout/HeroVideo.jsx'
import MarqueeDemoVertical from '../components/layout/MarqueeDemoVertical.jsx'
import Pricing from '../components/layout/Pricing.jsx'
import FAQSection from "../components/layout/FAQSection.jsx";
import Sponsers from '../components/layout/Sponsers.jsx'

const Home = () => {
  return (
    <>
        <section className="w-screen pt-[5vh] sm:pt-[10vh] flex flex-col items-center justify-center"><Lander /></section>
        
        <section className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-extrabold bg-gradient-to-b from-neutral-100 via-neutral-200 to-neutral-300 bg-clip-text text-transparent w-screen py-[4vh] sm:py-[6vh] md:py-[8vh] lg:py-[10vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center">Train. Transform. Thrive.</div>
        </section>
        
        <section className="w-screen py-[4vh] sm:py-[6vh] md:py-[8vh] lg:py-[10vh] flex flex-col items-center justify-center"><HeroVideo /></section>
        
        <section className="w-screen py-[4vh] sm:py-[6vh] md:py-[8vh] lg:py-[10vh] flex flex-col items-center justify-center overflow-hidden relative">
          <div className="absolute top-0 left-0 h-full w-16 sm:w-24 md:w-48 lg:w-96 z-20 pointer-events-none bg-gradient-to-r from-black to-transparent" />
          <div className="absolute top-0 right-0 h-full w-16 sm:w-24 md:w-48 lg:w-96 z-20 pointer-events-none bg-gradient-to-l from-black to-transparent" />
          <Sponsers />
        </section>
        
        <section className="w-screen flex flex-col items-center justify-center"><WhyChooseUs /></section>
        
        <section className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-extrabold bg-gradient-to-b from-neutral-200 via-neutral-100 to-neutral-300 bg-clip-text text-transparent w-screen pt-[4vh] sm:pt-[6vh] md:pt-[8vh] lg:pt-[10vh] pb-[1vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center">Join 20K+ Happy Users Transforming Their Lives.</div>
        </section>
        
        <section className="w-screen py-[4vh] sm:py-[6vh] md:py-[8vh] lg:py-[10vh] flex flex-col items-center justify-center"><CalorieCounter /></section>
        
        <section className="text-xl sm:text-2xl lg:text-4xl font-extrabold bg-gradient-to-b from-neutral-200 via-neutral-100 to-neutral-300 bg-clip-text text-transparent w-screen pt-[4vh] sm:pt-[6vh] md:pt-[8vh] lg:pt-[10vh] pb-[1vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center">Choose Your Plan</div>
        </section>
        
        <section className="text-xs sm:text-sm md:text-base lg:text-xl font-medium text-neutral-500 w-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-4xl flex items-center justify-center text-center leading-relaxed">
            Select the perfect plan for your fitness journey and start transforming your life today.
          </div>
        </section>
        
        <section className="w-screen py-[4vh] sm:py-[6vh] md:py-[8vh] lg:py-[10vh] flex flex-col items-center justify-center"><Pricing /></section>
        
        <section className="text-xl sm:text-2xl lg:text-4xl font-extrabold bg-gradient-to-b from-neutral-200 via-neutral-100 to-neutral-300 bg-clip-text text-transparent w-screen pt-[4vh] sm:pt-[6vh] md:pt-[8vh] lg:pt-[10vh] pb-[1vh] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center">Frequently Asked Questions</div>
        </section>
        
        <section className="text-xs sm:text-sm md:text-base lg:text-xl font-medium text-neutral-500 w-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-4xl flex items-center justify-center text-center leading-relaxed">
            Answers to common questions about MiraiFit your smart companion for fitness and nutrition.
          </div>
        </section>
        
        <section className="w-screen pb-[4vh] sm:pb-[6vh] md:pb-[8vh] lg:pb-[10vh] flex flex-col items-center justify-center"><FAQSection /></section>
    </>
  );
};

export default Home;
