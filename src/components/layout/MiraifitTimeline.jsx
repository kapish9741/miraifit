import { Timeline } from "../ui/Timeline.jsx"

const timelineItems = [
  {
    title: "Introduction",
    content: (
      <div>
        <p className="mb-4 text-sm md:text-base text-neutral-300 leading-relaxed">
          At Miraifit, we're reimagining the future of fitness. With cutting-edge tools, personalized plans, and
          real-time tracking, we help you train smarter — not harder.
        </p>
        <div className="mt-6">
          <img
            src="https://imgs.search.brave.com/mQSW3PsJbf-G7Za49XB-qwRUbJgZU4iC97n1Shhmg-Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yb2Jv/dGljc2Jpei5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDQvS2FpYS1QZXJz/b25hbC1UcmFpbmVy/LTEwMjR4NjM2Lmpw/Zw"
            alt="Miraifit app interface"
            className="w-full rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Our Journey",
    content: (
      <div>
        <p className="mb-4 text-sm md:text-base text-neutral-300 leading-relaxed">
          Miraifit began with a simple question: "Why isn't fitness smarter yet?" After months of prototyping and
          testing, Miraifit was born: a digital fitness coach that adapts to you.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <img
            src="https://imgs.search.brave.com/w0vTTn2U7YT_xGMUEYlyvKs2qfgndTOfHox21s2TY40/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZmFoaW1haS5jb20v/d3AtY29udGVudC91/cGxvYWRzLzIwMjQv/MDgvMi00MC5wbmc"
            alt="Early prototypes"
            className="w-full h-20 md:h-32 rounded-lg object-cover shadow-lg"
          />
          <img
            src="https://imgs.search.brave.com/VTrkREVT2fFyj9RdlS8v5-ajU3w24cTfG4GKEGFFKL8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXMu/Y2xvdWRpbmFyeS5j/b20vZHZqZmVteGJ6/L2ltYWdlL3VwbG9h/ZC9jX3NjYWxlLGZf/YXV0byxxXzYwLHdf/MTAwMC9Bc19hX3Jl/c3VsdF9mZWVkYmFj/a19pc19wZXJzb25h/bGlzZWRfbWV0X2Zp/dG5lc3NfYWlfdm9v/cl9wZXJzb25hbF90/cmFpbmluZ193cGwy/Y2FfendlMHNsLmF2/aWY"
            alt="Development process"
            className="w-full h-20 md:h-32 rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Our Mission",
    content: (
      <div>
        <p className="mb-4 text-sm md:text-base text-neutral-300 leading-relaxed">
          Our mission is to empower people to unlock their best selves through tailored fitness and nutrition. Fitness
          should be intelligent, intuitive, and inclusive.
        </p>
        <div className="mt-6 p-4 bg-neutral-900 rounded-lg border border-neutral-800">
          <h4 className="text-lg font-semibold text-white mb-2">Core Values</h4>
          <ul className="space-y-2 text-sm text-neutral-400">
            <li>• Intelligent adaptation to your needs</li>
            <li>• Intuitive user experience</li>
            <li>• Inclusive for all fitness levels</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "What Makes Us Different",
    content: (
      <div>
        <p className="mb-4 text-sm md:text-base text-neutral-300 leading-relaxed">
          Unlike traditional programs, Miraifit uses smart algorithms to build training and nutrition roadmaps in
          real-time — fully adaptive to your progress.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="p-4 bg-gradient-to-br from-purple-900/50 to-blue-900/50 rounded-lg border border-neutral-800">
            <h4 className="text-white font-semibold mb-2">Smart Algorithms</h4>
            <p className="text-neutral-300 text-sm">AI-powered adaptation to your progress</p>
          </div>
          <div className="p-4 bg-gradient-to-br from-green-900/50 to-teal-900/50 rounded-lg border border-neutral-800">
            <h4 className="text-white font-semibold mb-2">Real-time Tracking</h4>
            <p className="text-neutral-300 text-sm">Live feedback and adjustments</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Our Community",
    content: (
      <div>
        <p className="mb-4 text-sm md:text-base text-neutral-300 leading-relaxed">
          Miraifit powers thousands of transformations across the globe. Our users push limits — and lift each other up
          along the way.
        </p>
        <div className="mt-6 grid grid-cols-3 gap-4">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">10K+</div>
            <div className="text-xs md:text-sm text-neutral-400">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">50+</div>
            <div className="text-xs md:text-sm text-neutral-400">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-white">95%</div>
            <div className="text-xs md:text-sm text-neutral-400">Satisfaction</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "The Future",
    content: (
      <div>
        <p className="mb-4 text-sm md:text-base text-neutral-300 leading-relaxed">
          We're just getting started. With AI, wearables, and gamified progress tracking, Miraifit is becoming the most
          adaptive fitness experience on the planet.
        </p>
        <div className="mt-6 space-y-3">
          <div className="flex items-center gap-3 text-sm text-neutral-300">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            AI-powered workout generation
          </div>
          <div className="flex items-center gap-3 text-sm text-neutral-300">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            Wearable device integration
          </div>
          <div className="flex items-center gap-3 text-sm text-neutral-300">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            Gamified progress tracking
          </div>
          <div className="flex items-center gap-3 text-sm text-neutral-300">
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
            Social fitness challenges
          </div>
        </div>
      </div>
    ),
  },
]

export default function MiraifitTimeline() {
  return (
    <div className="bg-black min-h-screen">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16 relative">
          {/* Background Logo */}
          <div className="absolute top-[-15vh] inset-0 flex items-center justify-center opacity-80 pointer-events-none">
            <img 
              src="/miraifit.png" 
              alt="Miraifit Logo Background" 
              className="w-96 h-96 object-contain"
            />
          </div>
          
          {/* Text with shadow effect */}
          <div className="relative z-10 bg-[#00000099]">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-b from-neutral-300 via-neutral-200 to-neutral-700 bg-clip-text text-transparent mb-2 shadow-[2px_-25px_28px_0px_rgba(0,_0,_0,_0.7)] backdrop-filter backdrop-blur backdrop-saturate-100 backdrop-contrast-100">
              About MiraiFit
            </h1>
            <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              Discover the story behind the future of intelligent fitness
            </p>
          </div>
        </div>
        <Timeline data={timelineItems} />
      </div>
    </div>
  )
}
