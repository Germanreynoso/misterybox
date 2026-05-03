'use client'

import { motion } from 'framer-motion'

interface WaxSealProps {
  size?: number
  className?: string
}

export function WaxSeal({ size = 80, className = '' }: WaxSealProps) {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      className={className}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-2xl"
      >
        {/* Outer irregular seal shape */}
        <path
          d="M50 5
             C55 8 58 3 65 8
             C72 13 78 8 82 15
             C86 22 93 22 95 30
             C97 38 95 43 95 50
             C95 57 98 62 95 70
             C92 78 95 82 88 87
             C81 92 78 95 70 95
             C62 95 58 98 50 95
             C42 92 38 95 30 92
             C22 89 18 93 12 87
             C6 81 5 75 5 67
             C5 59 2 55 5 47
             C8 39 5 33 10 26
             C15 19 18 15 25 12
             C32 9 38 5 50 5Z"
          fill="#8B1A1A"
          className="drop-shadow-lg"
        />
        {/* Inner circle */}
        <circle cx="50" cy="50" r="32" fill="#6B1010" />
        {/* EC monogram */}
        <text
          x="50"
          y="58"
          textAnchor="middle"
          fill="#D4A574"
          fontSize="24"
          fontFamily="serif"
          fontWeight="bold"
          style={{ letterSpacing: '0.05em' }}
        >
          EC
        </text>
        {/* Decorative inner ring */}
        <circle
          cx="50"
          cy="50"
          r="28"
          fill="none"
          stroke="#D4A574"
          strokeWidth="1"
          opacity="0.5"
        />
      </svg>
    </motion.div>
  )
}
