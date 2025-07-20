import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dumbbell, Utensils, Lightbulb } from 'lucide-react';

const FitnessPlan = () => {
  const navigate = useNavigate();
  const [plan, setPlan] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const storedPlan = localStorage.getItem('fitnessPlan');
    const storedData = localStorage.getItem('fitnessData');

    if (!storedPlan || !storedData) {
      navigate('/ai');
      return;
    }

    setPlan(JSON.parse(storedPlan));
    setUserData(JSON.parse(storedData));
  }, [navigate]);

  if (!plan || !userData) {
    return null;
  }

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Your Personalized Fitness Plan</h1>
          <p className="text-gray-400 text-lg">
            Based on your goals and preferences
          </p>
        </div>

        <div className="space-y-8">
          <div className="bg-gray-900/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-800">
            <div className="flex items-center gap-3 mb-6">
              <Dumbbell className="w-8 h-8 text-primary-500" />
              <h2 className="text-2xl font-bold">Workout Plan</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Frequency</h3>
                <p className="text-gray-400">{plan.workoutPlan.frequency}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Duration</h3>
                <p className="text-gray-400">{plan.workoutPlan.duration}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Focus</h3>
                <p className="text-gray-400">{plan.workoutPlan.focus}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Equipment</h3>
                <p className="text-gray-400">{plan.workoutPlan.equipment}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-800">
            <div className="flex items-center gap-3 mb-6">
              <Utensils className="w-8 h-8 text-primary-500" />
              <h2 className="text-2xl font-bold">Nutrition Plan</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">Goal</h3>
                <p className="text-gray-400">{plan.nutritionPlan.goal}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Dietary Restrictions</h3>
                <p className="text-gray-400">{plan.nutritionPlan.restrictions}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Recommendations</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  {plan.nutritionPlan.recommendations.map((rec, index) => (
                    <li key={index}>{rec}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-800">
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-8 h-8 text-primary-500" />
              <h2 className="text-2xl font-bold">General Recommendations</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              {plan.recommendations.map((rec, index) => (
                <li key={index}>{rec}</li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => navigate('/ai')}
              className="px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-colors duration-200"
            >
              Edit My Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitnessPlan; 