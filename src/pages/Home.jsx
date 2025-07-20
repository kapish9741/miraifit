import React from "react";
import Lander from '../components/layout/Lander.jsx';
import WhyChooseUs from "../components/layout/WhyChooseUs.jsx";
import CalorieCounter from '../components/layout/CalorieCounter.jsx'
import HeroVideo from '../components/layout/HeroVideo.jsx'

const Home = () => {
  return (
    <>
        <section className="w-screen pt-[10vh] flex flex-col items-center justify-center"><Lander /></section>
        <section className="w-screen py-[10vh] flex flex-col items-center justify-center"><WhyChooseUs /></section>
        <section className="w-screen py-[10vh]] flex flex-col items-center justify-center"><HeroVideo /></section>
        <section className="w-screen py-[10vh] flex flex-col items-center justify-center"><CalorieCounter /></section>
    </>
  );
};

export default Home;
