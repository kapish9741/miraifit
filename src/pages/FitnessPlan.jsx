import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Dumbbell, Utensils, Lightbulb, User, Target, Activity, Clock, Heart, TrendingUp, BarChart3, Calendar, Zap } from 'lucide-react';

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
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <Zap className="w-8 h-8 text-neutral-400" />
            Your Personalized Fitness Plan
          </h1>
          <p className="text-neutral-400 text-lg">
            Comprehensive plan tailored to your goals and preferences
          </p>
        </div>

        <div className="space-y-8">
          {/* Personal Analysis */}
          {plan.analysis && (
            <div className="bg-neutral-900/50 p-8 rounded-2xl backdrop-blur-sm border border-neutral-800">
              <div className="flex items-center gap-3 mb-6">
                <User className="w-8 h-8 text-neutral-400" />
                <h2 className="text-2xl font-bold">Personal Analysis</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-black/30 p-4 rounded-lg border border-neutral-800">
                  <h3 className="text-lg font-semibold mb-2 text-neutral-300">BMI Analysis</h3>
                  <p className="text-2xl font-bold text-white">{plan.analysis.bmi}</p>
                  <p className="text-sm text-neutral-400">{plan.analysis.bmiCategory}</p>
                </div>
                <div className="bg-black/30 p-4 rounded-lg border border-neutral-800">
                  <h3 className="text-lg font-semibold mb-2 text-neutral-300">Timeline</h3>
                  <p className="text-sm text-neutral-400">{plan.analysis.timeline}</p>
                </div>
                <div className="bg-black/30 p-4 rounded-lg border border-neutral-800">
                  <h3 className="text-lg font-semibold mb-2 text-neutral-300">Considerations</h3>
                  <p className="text-sm text-neutral-400">{plan.analysis.considerations}</p>
                </div>
              </div>
              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-3 text-neutral-300">Current Assessment</h3>
                <p className="text-neutral-400 leading-relaxed">{plan.analysis.currentAssessment}</p>
              </div>
            </div>
          )}

          {/* Workout Plan */}
          <div className="bg-neutral-900/50 p-8 rounded-2xl backdrop-blur-sm border border-neutral-800">
            <div className="flex items-center gap-3 mb-6">
              <Dumbbell className="w-8 h-8 text-neutral-400" />
              <h2 className="text-2xl font-bold">Workout Plan</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-black/30 p-4 rounded-lg border border-neutral-800">
                <h3 className="text-lg font-semibold mb-2 text-neutral-300">Frequency</h3>
                <p className="text-white font-medium">{plan.workoutPlan.frequency}</p>
              </div>
              <div className="bg-black/30 p-4 rounded-lg border border-neutral-800">
                <h3 className="text-lg font-semibold mb-2 text-neutral-300">Duration</h3>
                <p className="text-white font-medium">{plan.workoutPlan.duration}</p>
              </div>
              <div className="bg-black/30 p-4 rounded-lg border border-neutral-800">
                <h3 className="text-lg font-semibold mb-2 text-neutral-300">Focus</h3>
                <p className="text-white font-medium">{plan.workoutPlan.focus}</p>
              </div>
              <div className="bg-black/30 p-4 rounded-lg border border-neutral-800">
                <h3 className="text-lg font-semibold mb-2 text-neutral-300">Equipment</h3>
                <p className="text-white font-medium">{plan.workoutPlan.equipment}</p>
              </div>
              <div className="bg-black/30 p-4 rounded-lg border border-neutral-800">
                <h3 className="text-lg font-semibold mb-2 text-neutral-300">Schedule</h3>
                <p className="text-white font-medium">{plan.workoutPlan.schedule}</p>
              </div>
              <div className="bg-black/30 p-4 rounded-lg border border-neutral-800">
                <h3 className="text-lg font-semibold mb-2 text-neutral-300">Rest Days</h3>
                <p className="text-white font-medium">{plan.workoutPlan.restDays}</p>
              </div>
            </div>

            {plan.workoutPlan.exercises && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-neutral-300">Recommended Exercise Types</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {plan.workoutPlan.exercises.map((exercise, index) => (
                    <div key={index} className="bg-black/20 p-3 rounded-lg border border-neutral-700">
                      <p className="text-white">{exercise}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-neutral-300">Warm-up</h3>
                <p className="text-neutral-400">{plan.workoutPlan.warmUp}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-neutral-300">Cool-down</h3>
                <p className="text-neutral-400">{plan.workoutPlan.coolDown}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-neutral-300">Progression Strategy</h3>
                <p className="text-neutral-400">{plan.workoutPlan.progression}</p>
              </div>
              {plan.workoutPlan.experienceLevel && (
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-neutral-300">Experience Level</h3>
                  <p className="text-neutral-400 capitalize">{plan.workoutPlan.experienceLevel}</p>
                </div>
              )}
            </div>
          </div>

          {/* Nutrition Plan */}
          <div className="bg-neutral-900/50 p-8 rounded-2xl backdrop-blur-sm border border-neutral-800">
            <div className="flex items-center gap-3 mb-6">
              <Utensils className="w-8 h-8 text-neutral-400" />
              <h2 className="text-2xl font-bold">Nutrition Plan</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-black/30 p-4 rounded-lg border border-neutral-800">
                <h3 className="text-lg font-semibold mb-2 text-neutral-300">Daily Calories</h3>
                <p className="text-2xl font-bold text-white">{plan.nutritionPlan.dailyCalories}</p>
                <p className="text-sm text-neutral-400">calories</p>
              </div>
              <div className="bg-black/30 p-4 rounded-lg border border-neutral-800">
                <h3 className="text-lg font-semibold mb-2 text-neutral-300">Protein</h3>
                <p className="text-xl font-bold text-white">{plan.nutritionPlan.macronutrients.protein}</p>
              </div>
              <div className="bg-black/30 p-4 rounded-lg border border-neutral-800">
                <h3 className="text-lg font-semibold mb-2 text-neutral-300">Carbohydrates</h3>
                <p className="text-xl font-bold text-white">{plan.nutritionPlan.macronutrients.carbs}</p>
              </div>
              <div className="bg-black/30 p-4 rounded-lg border border-neutral-800">
                <h3 className="text-lg font-semibold mb-2 text-neutral-300">Fats</h3>
                <p className="text-xl font-bold text-white">{plan.nutritionPlan.macronutrients.fats}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-lg font-semibold mb-2 text-neutral-300">Goal</h3>
                <p className="text-neutral-400 capitalize">{plan.nutritionPlan.goal}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-neutral-300">Dietary Restrictions</h3>
                <p className="text-neutral-400">{plan.nutritionPlan.restrictions}</p>
              </div>
            </div>

            {plan.nutritionPlan.mealTiming && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-3 text-neutral-300">Meal Timing</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-black/20 p-3 rounded-lg border border-neutral-700">
                    <h4 className="font-semibold text-neutral-300 mb-1">Pre-workout</h4>
                    <p className="text-sm text-neutral-400">{plan.nutritionPlan.mealTiming.preWorkout}</p>
                  </div>
                  <div className="bg-black/20 p-3 rounded-lg border border-neutral-700">
                    <h4 className="font-semibold text-neutral-300 mb-1">Post-workout</h4>
                    <p className="text-sm text-neutral-400">{plan.nutritionPlan.mealTiming.postWorkout}</p>
                  </div>
                  <div className="bg-black/20 p-3 rounded-lg border border-neutral-700">
                    <h4 className="font-semibold text-neutral-300 mb-1">General</h4>
                    <p className="text-sm text-neutral-400">{plan.nutritionPlan.mealTiming.general}</p>
                  </div>
                </div>
              </div>
            )}

            <div>
              <h3 className="text-lg font-semibold mb-3 text-neutral-300">Nutrition Recommendations</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {plan.nutritionPlan.recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start gap-2 text-neutral-400">
                    <span className="text-neutral-500 mt-1">•</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Recovery Plan */}
          {plan.recoveryPlan && (
            <div className="bg-neutral-900/50 p-8 rounded-2xl backdrop-blur-sm border border-neutral-800">
              <div className="flex items-center gap-3 mb-6">
                <Heart className="w-8 h-8 text-neutral-400" />
                <h2 className="text-2xl font-bold">Recovery & Lifestyle</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-black/30 p-4 rounded-lg border border-neutral-800">
                  <h3 className="text-lg font-semibold mb-2 text-neutral-300">Sleep</h3>
                  <p className="text-white font-medium">{plan.recoveryPlan.sleep}</p>
                </div>
                <div className="bg-black/30 p-4 rounded-lg border border-neutral-800">
                  <h3 className="text-lg font-semibold mb-2 text-neutral-300">Stress Management</h3>
                  <p className="text-neutral-400">{plan.recoveryPlan.stressManagement}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-neutral-300">Recovery Techniques</h3>
                  <ul className="space-y-2">
                    {plan.recoveryPlan.recoveryTechniques.map((technique, index) => (
                      <li key={index} className="flex items-start gap-2 text-neutral-400">
                        <span className="text-neutral-500 mt-1">•</span>
                        <span>{technique}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-neutral-300">Injury Prevention</h3>
                  <ul className="space-y-2">
                    {plan.recoveryPlan.injuryPrevention.map((prevention, index) => (
                      <li key={index} className="flex items-start gap-2 text-neutral-400">
                        <span className="text-neutral-500 mt-1">•</span>
                        <span>{prevention}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Progress Tracking */}
          {plan.progressTracking && (
            <div className="bg-neutral-900/50 p-8 rounded-2xl backdrop-blur-sm border border-neutral-800">
              <div className="flex items-center gap-3 mb-6">
                <TrendingUp className="w-8 h-8 text-neutral-400" />
                <h2 className="text-2xl font-bold">Progress Tracking</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-neutral-300">Check-ins</h3>
                  <p className="text-neutral-400">{plan.progressTracking.checkIns}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-neutral-300">Adjustments</h3>
                  <p className="text-neutral-400">{plan.progressTracking.adjustments}</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-neutral-300">Key Metrics to Monitor</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {plan.progressTracking.keyMetrics.map((metric, index) => (
                    <div key={index} className="bg-black/20 p-3 rounded-lg border border-neutral-700">
                      <p className="text-white">{metric}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-center gap-4">
            <button
              onClick={() => navigate('/ai')}
              className="px-8 py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
            >
              <Target className="w-5 h-5" />
              Edit My Plan
            </button>
            <button
              onClick={() => window.print()}
              className="px-8 py-3 bg-neutral-700 hover:bg-neutral-600 text-white rounded-lg font-medium transition-colors duration-200 flex items-center gap-2"
            >
              <BarChart3 className="w-5 h-5" />
              Print Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitnessPlan; 