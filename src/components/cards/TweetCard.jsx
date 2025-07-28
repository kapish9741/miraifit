import react from 'react'

export default function TweetCard() {
  return (
    <div className="bg-neutral-950 border border-neutral-700 text-white p-6 rounded-2xl max-w-2xl mx-auto">
      {/* Header with profile and Twitter icon */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-start space-x-3">
          {/* Profile Picture */}
          <img src="tweet.png" alt="MiraiFit profile" className="h-14 rounded-full" />

          {/* User Info */}
          <div>
            <div className="flex items-center space-x-1">
              <span className="font-bold text-white text-base">Mirai Fit</span>
              <svg className="h-5 w-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="text-gray-400 text-sm">@MiraiFit</span>
          </div>
        </div>

        {/* Twitter Icon */}
        <svg className="h-6 w-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
        </svg>
      </div>

      {/* Tweet Text */}
      <div className="text-white text-base leading-relaxed mb-4">
        <p>
          People spend $100s on personal trainers and hours figuring out what to eat and how to train. 🏋️‍♂️🥗

I built an AI-powered fitness planner that creates your custom meals & workouts based on your goals — in minutes.

Just share your goals, and let AI handle the rest. 💪
Pre-launch + demo 👇
          <span className="text-blue-400">#buildforpublic #fitness #ai</span>
        </p>
      </div>

      {/* Embedded Image */}
      <div className="rounded-xl overflow-hidden border border-gray-700">
        <img
          src="thumbnail.png"
          alt="Linear landing page showing 'Linear is a better way to build products' with dashboard interface"
          className="w-full h-auto"
        />
      </div>
    </div>
  )
}
