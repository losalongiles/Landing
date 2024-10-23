"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Instagram } from 'lucide-react'

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

export default function Component() {
  return (
    <div className="flex flex-col h-screen relative">
      <div className="flex flex-col md:flex-row flex-grow">
        <div className="bg-black md:w-2/3 h-3/4 md:h-full relative flex items-center justify-center overflow-hidden">
          <Image
            src="/media/PB-Logo-white.svg"
            alt="Paul Blink Logo"
            width={328}
            height={243}
            className="w-1/2 h-auto"
            priority
          />
        </div>
        <div className="bg-[#E8E8E8] h-1/4 md:w-1/3 md:h-full flex items-center justify-center">
          <Eyes />
        </div>
      </div>
      <div className="absolute bottom-4 left-4 flex items-center">
        <a 
          href="https://www.instagram.com/paultheblink" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center text-white hover:text-gray-300 transition-colors"
          aria-label="Follow Paul the Blink on Instagram"
        >
          <Instagram className="w-6 h-6 mr-2" />
          <span className="text-sm font-medium">paultheblink</span>
        </a>
      </div>
    </div>
  )
}
