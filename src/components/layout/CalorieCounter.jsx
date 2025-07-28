import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import NutritionCards from '../cards/NutritionCards.jsx';
import {Wheat, Pizza, EggFried, Flame} from 'lucide-react'

const CalorieCounter = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);

  const APP_ID = import.meta.env.VITE_NUTRITIONIX_APP_ID;
  const API_KEY = import.meta.env.VITE_NUTRITIONIX_API_KEY;   

  const fetchNutrition = async () => {
    const loadingToast = toast.loading('Fetching nutrition data...');
    try {
      const res = await fetch('https://trackapi.nutritionix.com/v2/natural/nutrients', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-app-id': APP_ID,
          'x-app-key': API_KEY,
        },
        body: JSON.stringify({ query }),
      });

      const data = await res.json();
      toast.dismiss(loadingToast);

      if (data.foods) {
        setResult(data.foods[0]);
        toast.success('Item added successfully!');
      } else {
        toast.error('No data found.');
      }
    } catch (err) {
      toast.dismiss(loadingToast);
      toast.error('An error occurred while fetching data.');
    }
  };

  return (
    <div className='w-full h-full flex flex-col items-center justify-center gap-6 sm:gap-10 px-4 sm:px-6'>
      <div className="p-4 sm:p-6 w-full sm:w-3/4 lg:w-1/2 bg-neutral-950 border-2 border-neutral-800 rounded-xl shadow-md max-w-md mx-auto mt-6 sm:mt-10">
        <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-neutral-100">Nutrition Search</h2>
        <input
          type="text"
          placeholder="e.g. 1 apple"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border bg-neutral-900 border-neutral-600 rounded px-3 py-2 w-full mb-3 sm:mb-4 focus:outline-1 focus:outline-neutral-100 text-neutral-100 text-sm sm:text-base"
        />
        <button
          onClick={fetchNutrition}
          className="bg-blue-600 text-neutral-100 px-4 py-2 rounded hover:bg-blue-700 cursor-pointer text-sm sm:text-base w-full"
        >
          Search
        </button>
      </div>
      {result && (
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-10 justify-center items-center w-full max-w-4xl">
          <NutritionCards 
            icon={<Flame className="w-5 h-5 sm:w-6 sm:h-6" />}
            title={'Calories'}
            description={result.nf_calories}
          />
          <NutritionCards 
            icon={<EggFried className="w-5 h-5 sm:w-6 sm:h-6" />}
            title={'Protein'}
            description={result.nf_protein}
          />
          <NutritionCards 
            icon={<Wheat className="w-5 h-5 sm:w-6 sm:h-6" />}
            title={'Carbs'}
            description={result.nf_total_carbohydrate}
          />
          <NutritionCards 
            icon={<Pizza className="w-5 h-5 sm:w-6 sm:h-6" />}
            title={'Fat'}
            description={result.nf_total_fat}
          />
        </div>
      )}
    </div>
  );
};

export default CalorieCounter;
