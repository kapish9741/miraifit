"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Play, XIcon } from "lucide-react"

// Simple utility function to combine class names
function cn(...classes) {
  return classes.filter(Boolean).join(" ")
}

const animationVariants = {
  "from-bottom": {
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  "from-center": {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 },
  },
  "from-top": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
  },
  "from-left": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  },
  "from-right": {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  "top-in-bottom-out": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  "left-in-right-out": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
}

export default function HeroVideoDialog({
  animationStyle = "from-center",
  videoSrc,
  thumbnailSrc,
  thumbnailAlt = "Video thumbnail",
  className,
}) {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const selectedAnimation = animationVariants[animationStyle]

  return (
    <div className={cn("relative", className, "w-full sm:w-[90vw] md:w-[80vw] lg:w-[70vw] xl:w-[60vw]")}>
      <div className="group relative cursor-pointer" onClick={() => setIsVideoOpen(true)}>
        <img
          src={thumbnailSrc || "/placeholder.svg"}
          alt={thumbnailAlt}
          width={1920}
          height={1080}
          className="w-full rounded-lg sm:rounded-xl lg:rounded-2xl border border-neutral-600 shadow-lg transition-all duration-200 ease-out group-hover:brightness-[0.6] group-hover:blur-[2px]"
        />
        <div className="absolute inset-0 flex scale-[0.9] items-center justify-center rounded-lg sm:rounded-xl lg:rounded-2xl transition-all duration-200 ease-out group-hover:scale-100">
          <div className="flex size-16 sm:size-20 lg:size-28 items-center justify-center rounded-full bg-neutral-100/10 backdrop-blur-md">
            <div className="relative flex size-12 sm:size-16 lg:size-20 scale-100 items-center justify-center rounded-full bg-gradient-to-b from-black/30 to-black shadow-md transition-all duration-200 ease-out group-hover:scale-[1.2]">
              <Play
                className="size-4 sm:size-6 lg:size-8 scale-100 fill-white text-white transition-transform duration-200 ease-out group-hover:scale-105"
                style={{
                  filter: "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsVideoOpen(false)}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md p-4"
          >
            <motion.div
              {...selectedAnimation}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full max-w-4xl aspect-video"
            >
              <motion.button 
                onClick={() => setIsVideoOpen(false)}
                className="absolute -top-12 sm:-top-16 right-0 rounded-full bg-neutral-900/50 p-2 text-xl text-white ring-1 backdrop-blur-md z-10"
              >
                <XIcon className="size-4 sm:size-5" />
              </motion.button>
              <div className="relative isolate z-[1] size-full overflow-hidden rounded-lg sm:rounded-xl lg:rounded-2xl border-2 border-neutral-400">
                <iframe
                  src={videoSrc}
                  className="size-full rounded-lg sm:rounded-xl lg:rounded-2xl"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
