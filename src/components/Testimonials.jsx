import React from 'react'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Alex & Jordan P.',
    text: 'Our daughter runs into the classroom every morning. The teachers are loving and the learning is incredible!',
  },
  {
    name: 'Priya M.',
    text: 'Communication is wonderful. We get photos, updates, and feel like partners in our child\'s growth.',
  },
  {
    name: 'Marcus R.',
    text: 'The play-based curriculum really works. We see confidence and curiosity blooming every week.',
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-sky-50/60 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800">Parent Testimonials</h2>
          <p className="mt-3 text-slate-600">Hear from families who trust us with their little ones.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map(({ name, text }) => (
            <div key={name} className="rounded-3xl p-6 bg-white border border-slate-100 shadow-sm hover:shadow-md transition">
              <Quote className="w-8 h-8 text-sky-400" />
              <p className="mt-4 text-slate-700 leading-7">“{text}”</p>
              <p className="mt-4 text-sm font-semibold text-slate-800">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
