'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface AnimatedCounterProps {
  targetValue: number
  duration?: number
  suffix?: string
  prefix?: string
}

export function AnimatedCounter({
  targetValue,
  duration = 3,
  suffix = '',
  prefix = '',
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrameId: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const progress = Math.min(elapsed / (duration * 1000), 1)

      // Easing function for smooth animation
      const easeOutQuad = 1 - Math.pow(1 - progress, 2)
      const currentCount = Math.floor(targetValue * easeOutQuad)

      setCount(currentCount)

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate)
      }
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [targetValue, duration])

  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      return (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1) + 'K'
    }
    return num.toString()
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold text-accent"
    >
      {prefix}
      {formatNumber(count)}
      {suffix}
    </motion.div>
  )
}
