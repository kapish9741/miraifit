import React from "react";

const FeatureCard = ({ icon, title, description }) => {
    return (
      <div className="bg-neutral-950 p-6 rounded-lg border border-neutral-800 shadow-lg hover:shadow-xl transition-shadow">
        <div className="text-neutral-300 text-4xl mb-4">
          {icon}
        </div>
        <h3 className="text-neutral-100 text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    );
  };
  
  export default FeatureCard;