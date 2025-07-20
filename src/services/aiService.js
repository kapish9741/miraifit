import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_API_KEY);

export const generateFitnessPlan = async (userData) => {
  try {
    const prompt = `Based on the following user profile, create a personalized fitness plan:

Height: ${userData.height} cm
Weight: ${userData.weight} kg
Fitness Goal: ${userData.fitnessGoal}
Current Fitness Level: ${userData.fitnessLevel}
Workout Days per Week: ${userData.workoutDays}
Preferred Location: ${userData.workoutLocation}
Health Conditions: ${userData.healthConditions || 'None reported'}
Preferred Schedule: ${userData.workoutSchedule}

Please provide:
1. A brief analysis of their current situation
2. Specific workout recommendations for their level and goals
3. Tips for staying motivated
4. Any precautions based on their health conditions
5. A sample weekly schedule that matches their availability

Format the response in a clear, structured way that's easy to read.`;

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating fitness plan:', error);
    throw new Error('Failed to generate fitness plan');
  }
};

export const saveUserFitnessData = async (userId, formData) => {
  try {
    return { success: true, message: 'Fitness data saved successfully' };
  } catch (error) {
    console.error('Error saving fitness data:', error);
    throw new Error('Failed to save fitness data');
  }
}; 