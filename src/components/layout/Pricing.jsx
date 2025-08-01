import React from 'react'
import { CheckCircle } from 'lucide-react'

const FreePrice = [
    'Personalized meal',
    'Workout plans',
    'AI-powered goal tracking',
    'Weekly progress checkins',
    'Access on all devices',
    'Community support channel',
]

const ProPrice = [
    'Advanced AI plan customization',
    'Smart progress insights',
    'Habit nudges',
    'Integration with wearables',
    'Nutrition Goal Tracking',
    'Workout library with videos',
    'Chat-based fitness assistant',
]

const CoachPrice = [
    'Multi-user dashboard',
    'Custom branding',
    'Shareable public fitness profiles',
    'Exportable plans & analytics',
    'Client check-in automation',
    'Priority AI response and plan adjustments',
]

const Pricing = () => {
  return (
    <div className='w-full flex flex-col lg:flex-row items-center justify-center gap-6 sm:gap-8 lg:gap-10 px-4 sm:px-6 lg:px-8'>
        <div className='w-full sm:w-[calc(50%-1rem)] lg:w-[25vw] flex flex-col items-start justify-center rounded-xl bg-neutral-950 p-4 sm:p-6 border border-neutral-800 gap-3 sm:gap-4'>
            <h3 className='text-sm sm:text-md text-center text-neutral-400 mb-1'>Free</h3>
            <h3 className='text-2xl sm:text-3xl lg:text-4xl text-center text-neutral-100 mb-1'>$0 <span className='text-xs sm:text-sm text-neutral-300'>/ month</span></h3>
            <p className='text-xs sm:text-sm text-neutral-300 mt-2'>Perfect for individuals just starting their fitness journey.</p>
            <button className='w-full py-2 sm:py-3 rounded-full bg-neutral-800 text-neutral-100 hover:bg-neutral-700 transition border border-neutral-700 hover:border-neutral-800 text-sm sm:text-base'>Start Free</button>
            <div className='w-full h-[1px] bg-neutral-600'></div>
            <div className='w-full flex flex-col items-start justify-center gap-3 sm:gap-5'>
                {FreePrice.map((item, index) => (
                    <div className='flex flex-row items-center justify-start gap-2' key={index}>
                        <CheckCircle className='text-neutral-100 w-4 h-4 sm:w-5 sm:h-5'/>
                        <p className='text-xs sm:text-sm text-neutral-300'>{item}</p>
                    </div>
                ))}
            </div>
        </div>
        <div className='w-full sm:w-[calc(50%-1rem)] lg:w-[25vw] flex flex-col items-start justify-center rounded-xl bg-neutral-900 p-4 sm:p-6 border border-neutral-800 gap-3 sm:gap-4'>
            <h3 className='text-sm sm:text-md text-center text-neutral-400 mb-1 flex gap-2 sm:gap-4 items-center justify-center'><span>Pro</span><span className='text-xs sm:text-sm py-1 px-2 border-[1px] border-blue-500 rounded-full bg-gradient-to-b from-blue-800 via-blue-600 to-blue-500 text-neutral-100'>Popular</span></h3>
            <h3 className='text-2xl sm:text-3xl lg:text-4xl text-center text-neutral-100 mb-1'>$14 <span className='text-xs sm:text-sm text-neutral-300'>/ month</span></h3>
            <p className='text-xs sm:text-sm text-neutral-300 mt-2'>Great for busy professionals looking for results with structure and flexibility.</p>
            <button className='w-full py-2 sm:py-3 rounded-full text-neutral-100 border border-blue-800 hover:border-blue-700 bg-gradient-to-b from-blue-800 via-blue-600 to-blue-600 tranistion hover:bg-blue-500 text-sm sm:text-base'>Upgrade to Pro</button>
            <div className='w-full h-[1px] bg-neutral-600'></div>
            <div className='w-full flex flex-col items-start justify-center gap-3 sm:gap-5'>
                <p className='text-xs sm:text-sm text-neutral-300 mt-2'>Everything in Free +</p>
                {ProPrice.map((item, index) => (
                    <div className='flex flex-row items-center justify-start gap-2' key={index}>
                        <CheckCircle className='text-neutral-100 w-4 h-4 sm:w-5 sm:h-5'/>
                        <p className='text-xs sm:text-sm text-neutral-300'>{item}</p>
                    </div>
                ))}
            </div>
        </div>
        <div className='w-full sm:w-[calc(50%-1rem)] lg:w-[25vw] flex flex-col items-start justify-center rounded-xl bg-neutral-950 p-4 sm:p-6 border border-neutral-800 gap-3 sm:gap-4'>
            <h3 className='text-sm sm:text-md text-center text-neutral-400 mb-1'>Coach</h3>
            <h3 className='text-2xl sm:text-3xl lg:text-4xl text-center text-neutral-100 mb-1'>$29 <span className='text-xs sm:text-sm text-neutral-300'>/ month</span></h3>
            <p className='text-xs sm:text-sm text-neutral-300 mt-2'>Built for fitness coaches & small teams managing multiple clients.</p>
            <button className='w-full py-2 sm:py-3 rounded-full text-neutral-900 bg-neutral-100 hover:bg-neutral-300 transition border border-neutral-400 hover:border-neutral-500 text-sm sm:text-base'>Contact Sales</button>
            <div className='w-full h-[1px] bg-neutral-600'></div>
            <div className='w-full flex flex-col items-start justify-center gap-3 sm:gap-5'>
                <p className='text-xs sm:text-sm text-neutral-300 mt-2'>Everything in Pro +</p>
                {CoachPrice.map((item, index) => (
                    <div className='flex flex-row items-center justify-start gap-2' key={index}>
                        <CheckCircle className='text-neutral-100 w-4 h-4 sm:w-5 sm:h-5'/>
                        <p className='text-xs sm:text-sm text-neutral-300'>{item}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Pricing