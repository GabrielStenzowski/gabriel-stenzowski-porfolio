'use client'

import { motion } from 'framer-motion'

export default function Stairs() {
  const stairAnimation = {
    initial: {
      top: '0%',
    },
    animate: { top: '100%' },
    exit: {
      top: ['100%', '0%'],
    },
  }

  function reserveIndex(index: number) {
    const totalSteps = 6
    return totalSteps - index - 1
  }

  return (
    <>
      {[...Array(6)].map((_, index) => (
        <motion.div
          key={index}
          variants={stairAnimation}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{
            duration: 0.4,
            ease: 'easeInOut',
            delay: reserveIndex(index) * 0.1,
          }}
          className="h-full w-full bg-white relative"
        />
      ))}
    </>
  )
}
