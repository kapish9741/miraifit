import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Dumbbell, Brain, Loader2 } from 'lucide-react';
import { useUser } from '@clerk/clerk-react';

const Ai = () => {
  const navigate = useNavigate();
  const { isLoaded, isSignedIn } = useUser();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    weight: '',
    height: '',
    activityLevel: '',
    fitnessGoal: '',
    medicalConditions: '',
    dietaryRestrictions: '',
    equipment: '',
    timeAvailability: ''
  });

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      toast.error('Please sign in to access this feature');
      navigate('/');
    }
  }, [isLoaded, isSignedIn, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isLoaded || !isSignedIn) {
      toast.error('Please sign in to continue');
      navigate('/');
      return;
    }

    setLoading(true);
    try {
      const userData = {
        ...formData,
        timestamp: new Date().toISOString()
      };
      localStorage.setItem('fitnessData', JSON.stringify(userData));

      const basicPlan = {
        workoutPlan: {
          frequency: formData.timeAvailability === '30' ? '3-4 times per week' : '4-5 times per week',
          duration: `${formData.timeAvailability} minutes per session`,
          focus: formData.fitnessGoal,
          equipment: formData.equipment,
          schedule: 'Morning or evening based on your preference'
        },
        nutritionPlan: {
          goal: formData.fitnessGoal,
          restrictions: formData.dietaryRestrictions || 'No specific restrictions',
          recommendations: [
            'Stay hydrated - drink at least 2-3 liters of water daily',
            'Eat protein-rich foods for muscle maintenance',
            'Include complex carbohydrates for energy',
            'Consume healthy fats in moderation'
          ]
        },
        recommendations: [
          'Start with a 5-10 minute warm-up before each workout',
          'Include both cardio and strength training',
          'Allow 1-2 rest days per week for recovery',
          'Track your progress and adjust as needed'
        ]
      };

      localStorage.setItem('fitnessPlan', JSON.stringify(basicPlan));
      
      toast.success('Fitness plan generated successfully!');
      
      navigate('/fitness-plan');
    } catch (error) {
      console.error('Error:', error);
      toast.error('Failed to generate fitness plan. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <Brain className="w-8 h-8 text-primary-500" />
            AI Fitness Planner
          </h1>
          <p className="text-gray-400 text-lg">
            Get your personalized fitness and nutrition plan powered by AI
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8 bg-gray-900/50 p-8 rounded-2xl backdrop-blur-sm border border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Age
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-black/50 border border-gray-800 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-500"
                placeholder="Enter your age"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-black/50 border border-gray-800 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Weight (kg)
              </label>
              <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-black/50 border border-gray-800 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-500"
                placeholder="Enter your weight"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Height (cm)
              </label>
              <input
                type="number"
                name="height"
                value={formData.height}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-black/50 border border-gray-800 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-500"
                placeholder="Enter your height"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Activity Level
              </label>
              <select
                name="activityLevel"
                value={formData.activityLevel}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-black/50 border border-gray-800 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
              >
                <option value="">Select activity level</option>
                <option value="sedentary">Sedentary</option>
                <option value="light">Lightly Active</option>
                <option value="moderate">Moderately Active</option>
                <option value="very">Very Active</option>
                <option value="extra">Extra Active</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Fitness Goal
              </label>
              <select
                name="fitnessGoal"
                value={formData.fitnessGoal}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-black/50 border border-gray-800 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
              >
                <option value="">Select your goal</option>
                <option value="weight-loss">Weight Loss</option>
                <option value="muscle-gain">Muscle Gain</option>
                <option value="maintenance">Maintenance</option>
                <option value="endurance">Endurance</option>
                <option value="flexibility">Flexibility</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Medical Conditions (if any)
              </label>
              <textarea
                name="medicalConditions"
                value={formData.medicalConditions}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-black/50 border border-gray-800 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-500"
                placeholder="List any medical conditions or injuries"
                rows="2"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Dietary Restrictions
              </label>
              <textarea
                name="dietaryRestrictions"
                value={formData.dietaryRestrictions}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-black/50 border border-gray-800 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-500"
                placeholder="List any dietary restrictions or preferences"
                rows="2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Available Equipment
              </label>
              <select
                name="equipment"
                value={formData.equipment}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-black/50 border border-gray-800 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
              >
                <option value="">Select equipment availability</option>
                <option value="none">No Equipment</option>
                <option value="basic">Basic (Dumbbells, Resistance Bands)</option>
                <option value="full">Full Gym Access</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Time Availability
              </label>
              <select
                name="timeAvailability"
                value={formData.timeAvailability}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-black/50 border border-gray-800 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white"
              >
                <option value="">Select time availability</option>
                <option value="30">30 minutes</option>
                <option value="45">45 minutes</option>
                <option value="60">60 minutes</option>
                <option value="90">90+ minutes</option>
              </select>
            </div>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Generating Plan...
                </>
              ) : (
                <>
                  <Dumbbell className="w-5 h-5" />
                  Generate My Plan
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Ai;