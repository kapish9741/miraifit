import React from 'react'

const AnimatedCard = () => {
    return (
      <div className="outer w-full max-w-[350px] h-[250px] sm:h-[300px] mx-auto">
        <div className="dot"></div>
        <div className="card">
          <div className="ray"></div>
          <div className="line topl"></div>
          <div className="line bottoml"></div>
          <div className="line leftl"></div>
          <div className="line rightl"></div>
          <div className="text text-3xl sm:text-4xl">10K+</div>
          <div className="text-lg sm:text-2xl bg-gradient-to-tr from-neutral-700 via-neutral-100 to-neutral-300 bg-clip-text text-transparent">users</div>
        </div>
      </div>
    );
  };

export default AnimatedCard;