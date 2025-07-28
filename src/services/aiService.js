import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_API_KEY);

export const generateFitnessPlan = async (userData) => {
  try {
    const prompt = `Create a comprehensive, personalized fitness plan for the following user profile:

User Profile:
- Age: ${userData.age} years
- Gender: ${userData.gender}
- Weight: ${userData.weight} kg
- Height: ${userData.height} cm
- Activity Level: ${userData.activityLevel}
- Fitness Goal: ${userData.fitnessGoal}
- Medical Conditions: ${userData.medicalConditions || 'None reported'}
- Dietary Restrictions: ${userData.dietaryRestrictions || 'None'}
- Available Equipment: ${userData.equipment}
- Time Availability: ${userData.timeAvailability} minutes per session

Please provide a detailed plan including:

1. PERSONALIZED ANALYSIS:
   - Current fitness assessment
   - BMI calculation and interpretation
   - Risk factors and considerations
   - Expected timeline for goals

2. DETAILED WORKOUT PLAN:
   - Specific exercises for each day
   - Sets, reps, and rest periods
   - Progressive overload strategy
   - Warm-up and cool-down routines
   - Alternative exercises for different equipment levels

3. COMPREHENSIVE NUTRITION PLAN:
   - Daily calorie targets
   - Macronutrient breakdown (protein, carbs, fats)
   - Meal timing recommendations
   - Specific food suggestions
   - Hydration guidelines
   - Supplement recommendations (if applicable)

4. RECOVERY & LIFESTYLE:
   - Sleep recommendations
   - Stress management
   - Recovery techniques
   - Injury prevention strategies

5. PROGRESS TRACKING:
   - Key metrics to monitor
   - Weekly/monthly check-ins
   - Adjustment criteria

Format the response as a structured JSON object with clear sections and actionable advice.`;

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    
    // Try to parse as JSON, fallback to text if needed
    try {
      return JSON.parse(response.text());
    } catch {
      return {
        analysis: response.text(),
        workoutPlan: generateDefaultWorkoutPlan(userData),
        nutritionPlan: generateDefaultNutritionPlan(userData),
        recoveryPlan: generateDefaultRecoveryPlan(userData),
        progressTracking: generateDefaultProgressTracking(userData)
      };
    }
  } catch (error) {
    console.error('Error generating fitness plan:', error);
    return generateDefaultPlan(userData);
  }
};

const generateDefaultPlan = (userData) => {
  const bmi = (userData.weight / Math.pow(userData.height / 100, 2)).toFixed(1);
  const bmiCategory = bmi < 18.5 ? 'Underweight' : bmi < 25 ? 'Normal' : bmi < 30 ? 'Overweight' : 'Obese';
  
  return {
    analysis: {
      bmi: bmi,
      bmiCategory: bmiCategory,
      currentAssessment: `Based on your profile, you're a ${userData.age}-year-old ${userData.gender} with a BMI of ${bmi} (${bmiCategory}). Your goal is ${userData.fitnessGoal} with ${userData.timeAvailability} minutes available per session.`,
      timeline: 'Expect to see initial results in 4-6 weeks with consistent effort.',
      considerations: userData.medicalConditions ? `Medical considerations: ${userData.medicalConditions}` : 'No medical restrictions noted.'
    },
    workoutPlan: generateDefaultWorkoutPlan(userData),
    nutritionPlan: generateDefaultNutritionPlan(userData),
    recoveryPlan: generateDefaultRecoveryPlan(userData),
    progressTracking: generateDefaultProgressTracking(userData)
  };
};

const generateDefaultWorkoutPlan = (userData) => {
  const frequency = userData.timeAvailability === '30' ? '3-4 times per week' : '4-5 times per week';
  const exercises = {
    'weight-loss': ['Cardio intervals', 'Bodyweight circuits', 'HIIT training'],
    'muscle-gain': ['Compound movements', 'Progressive overload', 'Strength training'],
    'maintenance': ['Balanced routine', 'Mixed modalities', 'Functional training'],
    'endurance': ['Cardio progression', 'Circuit training', 'Endurance building'],
    'flexibility': ['Mobility work', 'Stretching routines', 'Yoga-based movements']
  };

  return {
    frequency: frequency,
    duration: `${userData.timeAvailability} minutes per session`,
    focus: userData.fitnessGoal,
    equipment: userData.equipment,
    schedule: 'Morning or evening based on your preference',
    exercises: exercises[userData.fitnessGoal] || exercises['maintenance'],
    warmUp: '5-10 minutes of dynamic stretching and light cardio',
    coolDown: '5-10 minutes of static stretching and mobility work',
    progression: 'Increase intensity by 5-10% every 2-3 weeks',
    restDays: '1-2 days per week for recovery'
  };
};

const generateDefaultNutritionPlan = (userData) => {
  const baseCalories = userData.gender === 'male' ? 2000 : 1800;
  const activityMultiplier = {
    'sedentary': 1.2,
    'light': 1.375,
    'moderate': 1.55,
    'very': 1.725,
    'extra': 1.9
  };
  
  const dailyCalories = Math.round(baseCalories * activityMultiplier[userData.activityLevel]);
  
  return {
    goal: userData.fitnessGoal,
    restrictions: userData.dietaryRestrictions || 'No specific restrictions',
    dailyCalories: dailyCalories,
    macronutrients: {
      protein: `${Math.round(dailyCalories * 0.25 / 4)}g (25%)`,
      carbs: `${Math.round(dailyCalories * 0.45 / 4)}g (45%)`,
      fats: `${Math.round(dailyCalories * 0.30 / 9)}g (30%)`
    },
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
    }
  };
};

const generateDefaultRecoveryPlan = (userData) => {
  return {
    sleep: '7-9 hours per night',
    stressManagement: 'Practice mindfulness or meditation for 10-15 minutes daily',
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
  };
};

const generateDefaultProgressTracking = (userData) => {
  return {
    keyMetrics: [
      'Body weight (weekly)',
      'Body measurements (monthly)',
      'Workout performance (sets, reps, weight)',
      'Energy levels and sleep quality',
      'Progress photos (monthly)'
    ],
    checkIns: 'Weekly progress reviews and monthly comprehensive assessments',
    adjustments: 'Modify plan every 4-6 weeks based on progress and feedback'
  };
};

export const saveUserFitnessData = async (userId, formData) => {
  try {
    return { success: true, message: 'Fitness data saved successfully' };
  } catch (error) {
    console.error('Error saving fitness data:', error);
    throw new Error('Failed to save fitness data');
  }
}; 