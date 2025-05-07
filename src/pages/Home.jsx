import React from "react";
import Lander from '../components/layout/Lander.jsx';
import WhyChooseUs from "../components/layout/WhyChooseUs.jsx";
import CalorieCounter from '../components/layout/CalorieCounter.jsx'

const Home = () => {
  return (
    <>
        <section className="w-screen h-[90vh] flex flex-col items-center justify-center pb-20"><Lander /></section>
        <section className="w-screen h-[60vh] flex flex-col items-center justify-center"><WhyChooseUs /></section>
        <section className="w-screen h-[90vh] flex flex-col items-center justify-center"><CalorieCounter /></section>
    </>
  );
};

export default Home;
