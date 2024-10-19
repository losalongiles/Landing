"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function Eyes() {
  const [isBlinking, setIsBlinking] = useState(false)

  useEffect(() => {
    const blink = async (isDouble = false) => {
      setIsBlinking(true)
      await new Promise(resolve => setTimeout(resolve, 50))
      setIsBlinking(false)
      if (isDouble) {
        await new Promise(resolve => setTimeout(resolve, 100))
        setIsBlinking(true)
        await new Promise(resolve => setTimeout(resolve, 50))
        setIsBlinking(false)
      }
    }

    const scheduleNextBlink = () => {
      const nextBlinkDelay = Math.random() * 5000 + 1000 // Random delay between 1 and 6 seconds
      setTimeout(() => {
        const isDoubleBlink = Math.random() < 0.2 // 20% chance for a double blink
        blink(isDoubleBlink)
        scheduleNextBlink()
      }, nextBlinkDelay)
    }

    scheduleNextBlink()

    return () => {
      setIsBlinking(false)
    }
  }, [])

  const Eye = () => (
    <div className="w-16 h-16 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-black rounded-full"
        animate={{
          scaleY: isBlinking ? 0.05 : 1,
        }}
        transition={{ duration: 0.05, ease: "easeInOut" }}
      />
    </div>
  )

  return (
    <div className="flex space-x-4">
      <Eye />
      <Eye />
    </div>
  )
}

export function ResponsiveLayoutWithLogoAndEyes() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col md:flex-row flex-grow">
        <div className="bg-black md:w-2/3 h-3/4 md:h-full relative flex items-center justify-center overflow-hidden">
          <svg
            width="328"
            height="243"
            viewBox="0 0 328 243"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-1/2 h-auto"
            aria-label="Paul Blink Logo"
          >
            <path d="M50 50 H150 V100 Q150 150 100 150 H50 Z" fill="#FFFF00" />
            <path d="M200 50 H300 V150 Q300 200 250 200 H200 V150 Q250 150 250 100 H200 Z" fill="#FFFF00" />
          </svg>
        </div>
        <div className="bg-yellow-400 h-1/4 md:w-1/3 md:h-full flex items-center justify-center">
          <Eyes />
        </div>
      </div>
    </div>
  )
}
