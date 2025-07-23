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
        <section className="w-screen pt-[10vh] flex flex-col items-center justify-center"><Lander /></section>
        <section className="text-3xl md:text-5xl font-extrabold bg-gradient-to-b from-neutral-100 via-neutral-200 to-neutral-300 bg-clip-text text-transparent w-screen py-[10vh] flex flex-col items-center justify-center">Train. Transform. Thrive.</section>
        <section className="w-screen py-[10vh]] flex flex-col items-center justify-center"><HeroVideo /></section>
        <section className="w-screen py-[10vh] flex flex-col items-center justify-center overflow-hidden relative">
          <div className="absolute top-0 left-0 h-full w-96 z-20 pointer-events-none bg-gradient-to-r from-black to-transparent" />
          <div className="absolute top-0 right-0 h-full w-96 z-20 pointer-events-none bg-gradient-to-l from-black to-transparent" />
          <Sponsers />
        </section>
        <section className="w-screen flex flex-col items-center justify-center"><WhyChooseUs /></section>
        <section className="text-2xl md:text-4xl font-extrabold bg-gradient-to-b from-neutral-200 via-neutral-100 to-neutral-300 bg-clip-text text-transparent w-screen pt-[10vh] pb-[1vh] flex flex-col items-center justify-center">Join 20K+ Happy Users Transforming Their Lives.</section>
        <section className="text-sm md:text-xl font-medium text-neutral-500 w-screen flex flex-col items-center justify-center"><div className="w-[90vw] flex items-center justify-center text-center">From weight loss to muscle gain, our AI-crafted meal and workout plans are helping real people hit real goals faster and smarter.</div></section>
        <section className="w-screen py-[10vh] flex flex-col items-center justify-center"><MarqueeDemoVertical /></section>
        <section className="text-2xl md:text-4xl font-extrabold bg-gradient-to-b from-neutral-200 via-neutral-100 to-neutral-300 bg-clip-text text-transparent w-screen pt-[10vh] pb-[1vh] flex flex-col items-center justify-center">Plans That Flex With You</section>
        <section className="text-sm md:text-xl font-medium text-neutral-500 w-screen flex flex-col items-center justify-center"><div className="w-[90vw] flex items-center justify-center text-center">From goal-setting to custom training and nutrition — start free, upgrade only when you're seeing real progress.</div></section>
        <section className="w-screen py-[10vh] flex flex-col items-center justify-center"><Pricing /></section>
        <section className="text-2xl md:text-4xl font-extrabold bg-gradient-to-b from-neutral-200 via-neutral-100 to-neutral-300 bg-clip-text text-transparent w-screen pt-[10vh] pb-[1vh] flex flex-col items-center justify-center">Know Exactly What You’re Eating</section>
        <section className="text-sm md:text-xl font-medium text-neutral-500 w-screen flex flex-col items-center justify-center"><div className="w-[90vw] flex items-center justify-center text-center">From calories to protein and more — get accurate food breakdowns powered by trusted nutrition data.</div></section>
        <section className="w-screen py-[10vh] flex flex-col items-center justify-center"><CalorieCounter /></section>
        <section className="text-2xl md:text-4xl font-extrabold bg-gradient-to-b from-neutral-200 via-neutral-100 to-neutral-300 bg-clip-text text-transparent w-screen pt-[10vh] pb-[1vh] flex flex-col items-center justify-center">Frequently Asked Questions</section>
        <section className="text-sm md:text-xl font-medium text-neutral-500 w-screen flex flex-col items-center justify-center"><div className="w-[90vw] flex items-center justify-center text-center">Answers to common questions about MiraiFit your smart companion for fitness and nutrition.</div></section>
        <section className="w-screen pb-[10vh] flex flex-col items-center justify-center"><FAQSection /></section>
    </>
  );
};

export default Home;
