import React from 'react'
import { Baby, Smile, School } from 'lucide-react'
import { motion } from 'framer-motion'

const programs = [
  {
    title: 'Infants',
    icon: Baby,
    color: 'bg-sky-50 border-sky-100',
    dot: 'bg-sky-300',
    text: 'Gentle care, sensory play, and secure bonds for our littlest learners.'
  },
  {
    title: 'Toddlers',
    icon: Smile,
    color: 'bg-peach-50 border-peach-100',
    dot: 'bg-peach-300',
    text: 'Active exploration with language, movement, and social-emotional growth.'
  },
  {
    title: 'Pre-K',
    icon: School,
    color: 'bg-mint-50 border-mint-100',
    dot: 'bg-mint-300',
    text: 'Kindergarten readiness through playful inquiry, creativity, and STEM.'
  }
]

const Programs = () => {
  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800">Programs & Age Groups</h2>
          <p className="mt-3 text-slate-600">Each stage is unique. We meet children where they are with developmentally appropriate experiences.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map(({ title, icon: Icon, color, dot, text }) => (
            <motion.div key={title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className={`rounded-3xl p-6 border ${color} shadow-sm hover:shadow-md transition-shadow`}>
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${dot}`} />
                <h3 className="text-xl font-bold text-slate-800">{title}</h3>
              </div>
              <div className="mt-4 flex items-center gap-3 text-slate-700">
                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center ring-1 ring-slate-100 shadow">
                  <Icon className="w-6 h-6 text-slate-700" />
                </div>
                <p className="text-sm leading-6">{text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Programs
