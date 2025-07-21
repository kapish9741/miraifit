import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: "What kind of meal and workout plans do you provide?",
    answer:
      "We provide goal-based meal and workout plans tailored to weight loss, muscle gain, or maintenance — all dynamically adjusted based on your progress.",
  },
  {
    question: "How accurate is the nutritional information for foods?",
    answer:
      "All food data is sourced from verified public APIs and databases to ensure reliable calorie, protein, carb, and fat breakdowns for thousands of items.",
  },
  {
    question: "Can I customize plans based on my fitness goals?",
    answer:
      "Absolutely! Whether you're targeting fat loss, muscle building, or just staying active, our plans adapt based on your inputs, preferences, and dietary needs.",
  },
  {
    question: "Is this suitable for beginners and professionals?",
    answer:
      "Yes — the platform is designed for all levels. Beginners get guided plans and easy tracking, while pros benefit from advanced metrics and flexibility.",
  },
  {
    question: "How does progress tracking work?",
    answer:
      "You can log meals, workouts, and check-ins weekly. We visualize your progress and adjust recommendations to keep you on track.",
  },
  {
    question: "Can I sync data from my smartwatch or fitness band?",
    answer:
      "Yes, Pro users can connect popular wearables to automatically sync activity and health data into your dashboard.",
  },
  {
    question: "Is there support for coaches and multi-user plans?",
    answer:
      "Coaches can manage multiple clients, share plans, view analytics, and automate check-ins — all in a dedicated coach dashboard.",
  },
  {
    question: "How is my personal data protected?",
    answer:
      "We prioritize privacy and security. All your data is encrypted and never shared with third parties without your consent.",
  },
  {
    question: "Can I access the platform on different devices?",
    answer:
      "Yes, you can access your account from desktop, tablet, and mobile — with a consistent experience across all platforms.",
  },
  {
    question: "Do I need to pay to get started?",
    answer:
      "Nope! You can start with our free plan and upgrade only when you’re ready for more features like custom AI plans and wearable integration.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-black text-white px-6 py-12 w-full max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-neutral-200 mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-neutral-700 py-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left"
            >
              <span className="text-lg font-medium text-neutral-300">
                {faq.question}
              </span>
              {openIndex === index ? (
                <Minus className="text-blue-500" size={20} />
              ) : (
                <Plus className="text-blue-500" size={20} />
              )}
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <p className="mt-3 text-sm text-neutral-400">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
