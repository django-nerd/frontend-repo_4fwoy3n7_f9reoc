import React from 'react'
import { ShieldCheck, GraduationCap, Palette, MessageSquare, Trees } from 'lucide-react'

const features = [
  { icon: ShieldCheck, title: 'Safe environment', desc: 'Secure entry, child-safe spaces, and health-first practices.' },
  { icon: GraduationCap, title: 'Certified teachers', desc: 'Experienced, caring educators trained in early childhood.' },
  { icon: Palette, title: 'Creative curriculum', desc: 'Play-based learning that sparks imagination and inquiry.' },
  { icon: MessageSquare, title: 'Parent communication', desc: 'Daily updates and photos via parent-friendly apps.' },
  { icon: Trees, title: 'Outdoor play & learning', desc: 'Nature exploration and gross motor development.' }
]

const WhyChooseUs = () => {
  return (
    <section id="why" className="py-20 bg-gradient-to-b from-white to-sky-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800">Why Choose Us</h2>
          <p className="mt-3 text-slate-600">Thoughtfully designed experiences and relationships that help children thrive.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-3xl p-6 bg-white border border-slate-100 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center">
                <Icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-slate-800">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-6">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
