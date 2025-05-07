import React, { useState } from 'react';
import { toast } from 'react-hot-toast';

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
    <div className="p-6 bg-white rounded-xl shadow-md max-w-md mx-auto mt-10">
      <h2 className="text-xl font-semibold mb-4">Nutrition Search</h2>
      <input
        type="text"
        placeholder="e.g. 1 apple"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border border-gray-300 rounded px-3 py-2 w-full mb-4"
      />
      <button
        onClick={fetchNutrition}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Search
      </button>

      {result && (
        <div className="mt-6">
          <h3 className="font-bold text-lg mb-2">{result.food_name}</h3>
          <p>Calories: {result.nf_calories}</p>
          <p>Protein: {result.nf_protein}g</p>
          <p>Carbs: {result.nf_total_carbohydrate}g</p>
          <p>Fat: {result.nf_total_fat}g</p>
        </div>
      )}
    </div>
  );
};

export default CalorieCounter;
