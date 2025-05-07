import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import NutritionCards from '../cards/nutritionCards';
import {Wheat, Pizza, EggFried, Ham} from 'lucide-react'

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
    <div className='w-full h-full flex flex-col items-center justify-center gap-10'>
    <div className="p-6 w-1/2 bg-neutral-950 border-2 border-neutral-800 rounded-xl shadow-md max-w-md mx-auto mt-10">
      <h2 className="text-xl font-semibold mb-4 text-neutral-100">Nutrition Search</h2>
      <input
        type="text"
        placeholder="e.g. 1 apple"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border border-gray-600 rounded px-3 py-2 w-full mb-4 focus:outline-2 focus:outline-blue-700 text-neutral-100"
      />
      <button
        onClick={fetchNutrition}
        className="bg-blue-600 text-neutral-100 px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
      >
        Search
      </button>
    </div>
    {result && (
        <div className="flex flex-row gap-10 justify-center items-center">
          <NutritionCards 
          icon={<Ham />}
          title={'Calories'}
          description={result.nf_calories}
          />
          <NutritionCards 
          icon={<EggFried />}
          title={'Protein'}
          description={result.nf_protein}
          />
          <NutritionCards 
          icon={<Wheat />}
          title={'Carbs'}
          description={result.nf_total_carbohydrate}
          />
          <NutritionCards 
          icon={<Pizza />}
          title={'Fat'}
          description={result.nf_total_fat}
          />
        </div>
      )}
    </div>
  );
};

export default CalorieCounter;
