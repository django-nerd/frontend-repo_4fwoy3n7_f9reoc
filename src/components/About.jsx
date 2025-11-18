import React from 'react'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl ring-1 ring-slate-100">
              <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1200&auto=format&fit=crop" alt="Warm classroom" className="w-full h-72 object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-peach-200 text-slate-700 rounded-2xl px-4 py-3 shadow">
              Play • Learn • Grow
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800">About Expertise Preschool</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              We believe every child is capable, curious, and full of potential. Our mission is to create a joyful, safe environment where children can explore, build confidence, and develop essential skills for life.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-4 text-slate-700">
              <li className="p-4 rounded-2xl bg-mint-50 border border-mint-100">Nurturing relationships</li>
              <li className="p-4 rounded-2xl bg-sky-50 border border-sky-100">Play-based, guided learning</li>
              <li className="p-4 rounded-2xl bg-amber-50 border border-amber-100">Culturally responsive</li>
              <li className="p-4 rounded-2xl bg-peach-50 border border-peach-100">Family partnerships</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
