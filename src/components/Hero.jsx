import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

const Hero = ({ layout }) => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50 via-white to-white" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20 grid lg:grid-cols-2 gap-10 relative">
        <div className="flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-800"
          >
            Growing Bright Minds at Expertise Preschool
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-lg text-slate-600 max-w-xl"
          >
            A nurturing, safe, and inspiring place where early childhood education blossoms. We blend play with purpose, creativity with care, and curiosity with confidence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a href="#enroll" className="inline-flex items-center justify-center rounded-full bg-sky-500 text-white px-6 py-3 text-base font-semibold shadow-sm hover:bg-sky-600 transition">
              Enroll Now
            </a>
            <a href="#enroll" className="inline-flex items-center justify-center rounded-full bg-white text-slate-800 px-6 py-3 text-base font-semibold shadow-sm ring-1 ring-slate-200 hover:bg-slate-50 transition">
              Book a Tour
            </a>
          </motion.div>

          <div className="mt-8 flex items-center gap-3 text-slate-600">
            <div className="w-2 h-2 rounded-full bg-mint-400" />
            <p className="text-sm">Warm teachers • Safe environment • Play-based learning</p>
          </div>
        </div>

        <div className="relative h-[360px] sm:h-[480px] lg:h-[560px] rounded-3xl overflow-hidden shadow-xl ring-1 ring-slate-100">
          <Spline scene="https://prod.spline.design/95Gu7tsx2K-0F3oi/scene.splinecode" style={{ width: '100%', height: '100%' }} />

          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-[120%] h-48 rounded-full bg-sky-100/60 blur-3xl" aria-hidden="true" />
    </section>
  )
}

export default Hero
