import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Dumbbell, Brain, Loader2, User, Target, Activity, Clock, Utensils, Heart, Zap } from 'lucide-react';
import { useUser } from '@clerk/clerk-react';

const Ai = () => {
  const navigate = useNavigate();
  const { isLoaded, isSignedIn } = useUser();
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
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
    timeAvailability: '',
    experienceLevel: '',
    preferredWorkoutTime: '',
    sleepHours: '',
    stressLevel: '',
    injuries: '',
    supplements: ''
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

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
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

      // Generate comprehensive plan using the enhanced service
      const comprehensivePlan = {
        analysis: {
          bmi: (formData.weight / Math.pow(formData.height / 100, 2)).toFixed(1),
          bmiCategory: (() => {
            const bmi = formData.weight / Math.pow(formData.height / 100, 2);
            return bmi < 18.5 ? 'Underweight' : bmi < 25 ? 'Normal' : bmi < 30 ? 'Overweight' : 'Obese';
          })(),
          currentAssessment: `Based on your profile, you're a ${formData.age}-year-old ${formData.gender} with a BMI of ${(formData.weight / Math.pow(formData.height / 100, 2)).toFixed(1)}. Your goal is ${formData.fitnessGoal} with ${formData.timeAvailability} minutes available per session.`,
          timeline: 'Expect to see initial results in 4-6 weeks with consistent effort.',
          considerations: formData.medicalConditions ? `Medical considerations: ${formData.medicalConditions}` : 'No medical restrictions noted.'
        },
        workoutPlan: {
          frequency: formData.timeAvailability === '30' ? '3-4 times per week' : '4-5 times per week',
          duration: `${formData.timeAvailability} minutes per session`,
          focus: formData.fitnessGoal,
          equipment: formData.equipment,
          schedule: formData.preferredWorkoutTime || 'Morning or evening based on your preference',
          exercises: (() => {
            const exercises = {
              'weight-loss': ['Cardio intervals', 'Bodyweight circuits', 'HIIT training', 'Metabolic conditioning'],
              'muscle-gain': ['Compound movements', 'Progressive overload', 'Strength training', 'Hypertrophy focus'],
              'maintenance': ['Balanced routine', 'Mixed modalities', 'Functional training', 'Cross-training'],
              'endurance': ['Cardio progression', 'Circuit training', 'Endurance building', 'Stamina work'],
              'flexibility': ['Mobility work', 'Stretching routines', 'Yoga-based movements', 'Recovery focus']
            };
            return exercises[formData.fitnessGoal] || exercises['maintenance'];
          })(),
          warmUp: '5-10 minutes of dynamic stretching and light cardio',
          coolDown: '5-10 minutes of static stretching and mobility work',
          progression: 'Increase intensity by 5-10% every 2-3 weeks',
          restDays: '1-2 days per week for recovery',
          experienceLevel: formData.experienceLevel,
          injuries: formData.injuries || 'None reported'
        },
        nutritionPlan: {
          goal: formData.fitnessGoal,
          restrictions: formData.dietaryRestrictions || 'No specific restrictions',
          dailyCalories: (() => {
            const baseCalories = formData.gender === 'male' ? 2000 : 1800;
            const activityMultiplier = {
              'sedentary': 1.2, 'light': 1.375, 'moderate': 1.55, 'very': 1.725, 'extra': 1.9
            };
            return Math.round(baseCalories * activityMultiplier[formData.activityLevel]);
          })(),
          macronutrients: (() => {
            const baseCalories = formData.gender === 'male' ? 2000 : 1800;
            const activityMultiplier = {
              'sedentary': 1.2, 'light': 1.375, 'moderate': 1.55, 'very': 1.725, 'extra': 1.9
            };
            const dailyCalories = Math.round(baseCalories * activityMultiplier[formData.activityLevel]);
            return {
              protein: `${Math.round(dailyCalories * 0.25 / 4)}g (25%)`,
              carbs: `${Math.round(dailyCalories * 0.45 / 4)}g (45%)`,
              fats: `${Math.round(dailyCalories * 0.30 / 9)}g (30%)`
            };
          })(),
          recommendations: [
            'Stay hydrated - drink at least 2-3 liters of water daily',
            'Eat protein-rich foods for muscle maintenance',
            'Include complex carbohydrates for energy',
            'Consume healthy fats in moderation',
            'Eat 3-4 meals per day with protein at each meal',
            'Time protein intake around workouts (within 2 hours)'
          ],
          mealTiming: {
            preWorkout: 'Light meal 1-2 hours before',
            postWorkout: 'Protein + carbs within 30 minutes',
            general: 'Eat every 3-4 hours to maintain energy'
          },
          supplements: formData.supplements || 'Consult with healthcare provider for supplement recommendations'
        },
        recoveryPlan: {
          sleep: formData.sleepHours || '7-9 hours per night',
          stressManagement: formData.stressLevel === 'high' ? 'Practice mindfulness or meditation for 15-20 minutes daily' : 'Practice mindfulness or meditation for 10-15 minutes daily',
          recoveryTechniques: [
            'Foam rolling for 10 minutes post-workout',
            'Stretching routine before bed',
            'Cold showers or ice baths for muscle recovery',
            'Active recovery days with light walking or swimming'
          ],
          injuryPrevention: [
            'Always warm up properly',
            'Maintain proper form during exercises',
            'Listen to your body and rest when needed',
            'Gradually increase intensity and volume'
          ]
        },
        progressTracking: {
          keyMetrics: [
            'Body weight (weekly)',
            'Body measurements (monthly)',
            'Workout performance (sets, reps, weight)',
            'Energy levels and sleep quality',
            'Progress photos (monthly)'
          ],
          checkIns: 'Weekly progress reviews and monthly comprehensive assessments',
          adjustments: 'Modify plan every 4-6 weeks based on progress and feedback'
        }
      };

      localStorage.setItem('fitnessPlan', JSON.stringify(comprehensivePlan));
      
      toast.success('Comprehensive fitness plan generated successfully!');
      
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

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <User className="w-6 h-6 text-neutral-400" />
              <h2 className="text-xl font-semibold text-neutral-200">Personal Information</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-neutral-600 focus:border-transparent text-white placeholder-neutral-500 transition-all duration-200"
                  placeholder="Enter your age"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-neutral-600 focus:border-transparent text-white transition-all duration-200"
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-neutral-600 focus:border-transparent text-white placeholder-neutral-500 transition-all duration-200"
                  placeholder="Enter your weight"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Height (cm)
                </label>
                <input
                  type="number"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-neutral-600 focus:border-transparent text-white placeholder-neutral-500 transition-all duration-200"
                  placeholder="Enter your height"
                />
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-6 h-6 text-neutral-400" />
              <h2 className="text-xl font-semibold text-neutral-200">Fitness Goals & Activity</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Activity Level
                </label>
                <select
                  name="activityLevel"
                  value={formData.activityLevel}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-neutral-600 focus:border-transparent text-white transition-all duration-200"
                >
                  <option value="">Select activity level</option>
                  <option value="sedentary">Sedentary (little to no exercise)</option>
                  <option value="light">Lightly Active (light exercise 1-3 days/week)</option>
                  <option value="moderate">Moderately Active (moderate exercise 3-5 days/week)</option>
                  <option value="very">Very Active (hard exercise 6-7 days/week)</option>
                  <option value="extra">Extra Active (very hard exercise, physical job)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Fitness Goal
                </label>
                <select
                  name="fitnessGoal"
                  value={formData.fitnessGoal}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-neutral-600 focus:border-transparent text-white transition-all duration-200"
                >
                  <option value="">Select your goal</option>
                  <option value="weight-loss">Weight Loss</option>
                  <option value="muscle-gain">Muscle Gain</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="endurance">Endurance</option>
                  <option value="flexibility">Flexibility</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Experience Level
                </label>
                <select
                  name="experienceLevel"
                  value={formData.experienceLevel}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-neutral-600 focus:border-transparent text-white transition-all duration-200"
                >
                  <option value="">Select experience level</option>
                  <option value="beginner">Beginner (0-6 months)</option>
                  <option value="intermediate">Intermediate (6 months - 2 years)</option>
                  <option value="advanced">Advanced (2+ years)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Time Availability
                </label>
                <select
                  name="timeAvailability"
                  value={formData.timeAvailability}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-neutral-600 focus:border-transparent text-white transition-all duration-200"
                >
                  <option value="">Select time availability</option>
                  <option value="30">30 minutes</option>
                  <option value="45">45 minutes</option>
                  <option value="60">60 minutes</option>
                  <option value="90">90+ minutes</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Preferred Workout Time
                </label>
                <select
                  name="preferredWorkoutTime"
                  value={formData.preferredWorkoutTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-neutral-600 focus:border-transparent text-white transition-all duration-200"
                >
                  <option value="">Select preferred time</option>
                  <option value="morning">Morning (6 AM - 9 AM)</option>
                  <option value="midday">Midday (12 PM - 2 PM)</option>
                  <option value="afternoon">Afternoon (4 PM - 6 PM)</option>
                  <option value="evening">Evening (7 PM - 9 PM)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Available Equipment
                </label>
                <select
                  name="equipment"
                  value={formData.equipment}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-neutral-600 focus:border-transparent text-white transition-all duration-200"
                >
                  <option value="">Select equipment availability</option>
                  <option value="none">No Equipment (Bodyweight only)</option>
                  <option value="basic">Basic (Dumbbells, Resistance Bands)</option>
                  <option value="home">Home Gym (Basic equipment)</option>
                  <option value="full">Full Gym Access</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-6 h-6 text-neutral-400" />
              <h2 className="text-xl font-semibold text-neutral-200">Health & Lifestyle</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Medical Conditions & Injuries
                </label>
                <textarea
                  name="medicalConditions"
                  value={formData.medicalConditions}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-neutral-600 focus:border-transparent text-white placeholder-neutral-500 transition-all duration-200"
                  placeholder="List any medical conditions, injuries, or physical limitations"
                  rows="3"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Previous Injuries
                </label>
                <textarea
                  name="injuries"
                  value={formData.injuries}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-neutral-600 focus:border-transparent text-white placeholder-neutral-500 transition-all duration-200"
                  placeholder="List any previous injuries or areas of concern"
                  rows="2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Average Sleep Hours
                </label>
                <select
                  name="sleepHours"
                  value={formData.sleepHours}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-neutral-600 focus:border-transparent text-white transition-all duration-200"
                >
                  <option value="">Select sleep duration</option>
                  <option value="less-6">Less than 6 hours</option>
                  <option value="6-7">6-7 hours</option>
                  <option value="7-8">7-8 hours</option>
                  <option value="8-9">8-9 hours</option>
                  <option value="more-9">More than 9 hours</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Stress Level
                </label>
                <select
                  name="stressLevel"
                  value={formData.stressLevel}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-neutral-600 focus:border-transparent text-white transition-all duration-200"
                >
                  <option value="">Select stress level</option>
                  <option value="low">Low stress</option>
                  <option value="moderate">Moderate stress</option>
                  <option value="high">High stress</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <Utensils className="w-6 h-6 text-neutral-400" />
              <h2 className="text-xl font-semibold text-neutral-200">Nutrition & Supplements</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Dietary Restrictions & Preferences
                </label>
                <textarea
                  name="dietaryRestrictions"
                  value={formData.dietaryRestrictions}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-neutral-600 focus:border-transparent text-white placeholder-neutral-500 transition-all duration-200"
                  placeholder="List any dietary restrictions, allergies, or food preferences (e.g., vegetarian, gluten-free, etc.)"
                  rows="3"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-neutral-300 mb-2">
                  Current Supplements
                </label>
                <textarea
                  name="supplements"
                  value={formData.supplements}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-black/50 border border-neutral-800 rounded-lg focus:ring-2 focus:ring-neutral-600 focus:border-transparent text-white placeholder-neutral-500 transition-all duration-200"
                  placeholder="List any supplements you're currently taking or interested in"
                  rows="2"
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-neutral-400" />
            AI Fitness Planner
          </h1>
          <p className="text-neutral-400 text-base sm:text-lg">
            Get your comprehensive personalized fitness and nutrition plan powered by AI
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-6 sm:mb-8">
          <div className="flex justify-between items-center mb-3 sm:mb-4">
            <span className="text-xs sm:text-sm text-neutral-400">Step {currentStep} of 4</span>
            <span className="text-xs sm:text-sm text-neutral-400">{Math.round((currentStep / 4) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-neutral-800 rounded-full h-2">
            <div 
              className="bg-neutral-400 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 4) * 100}%` }}
            ></div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8 bg-neutral-900/50 p-4 sm:p-6 lg:p-8 rounded-2xl backdrop-blur-sm border border-neutral-800">
          {renderStep()}

          <div className="flex justify-between pt-4 sm:pt-6">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={prevStep}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg font-medium transition-colors duration-200 text-sm sm:text-base"
              >
                Previous
              </button>
            )}
            
            {currentStep < 4 ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-4 sm:px-6 py-2 sm:py-3 bg-neutral-700 hover:bg-neutral-600 text-white rounded-lg font-medium transition-colors duration-200 text-sm sm:text-base ml-auto"
              >
                Next
              </button>
            ) : (
              <button
                type="submit"
                disabled={loading}
                className="px-6 sm:px-8 py-2 sm:py-3 bg-neutral-700 hover:bg-neutral-600 text-white rounded-lg font-medium transition-colors duration-200 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base ml-auto"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                    Generating Plan...
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                    Generate My Plan
                  </>
                )}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Ai;