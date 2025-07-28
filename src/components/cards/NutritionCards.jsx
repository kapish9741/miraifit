import React from "react";

const NutritionCards = ({ icon, title, description }) => {
    return (
      <div className="bg-neutral-950 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1rem)] xl:w-[calc(20%-1rem)] p-4 sm:p-6 rounded-lg border border-neutral-800 shadow-lg hover:shadow-xl transition-shadow">
        <div className="text-neutral-300 text-2xl sm:text-3xl lg:text-4xl mb-3 sm:mb-4">
          {icon}
        </div>
        <div className="flex flex-col justify-between items-start">
            <h3 className="text-neutral-100 text-lg sm:text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-400 text-sm sm:text-base">{description}</p>
        </div>
      </div>
    );
  };
  
  export default NutritionCards;