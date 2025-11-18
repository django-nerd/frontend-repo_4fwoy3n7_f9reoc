import React from 'react'
import { ArrowRight } from 'lucide-react'

const steps = [
  { title: 'Schedule a tour', text: 'Meet our teachers, explore classrooms, and ask questions.' },
  { title: 'Complete application', text: 'Fill out forms online with support from our team.' },
  { title: 'Secure your spot', text: 'Choose a start date and finalize enrollment.' }
]

const Enrollment = () => {
  return (
    <section id="enroll" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800">Enrollment Made Simple</h2>
            <p className="mt-3 text-slate-600">We\'re here to make this easy and welcoming for your family.</p>

            <ol className="mt-8 space-y-4">
              {steps.map((s, i) => (
                <li key={i} className="flex gap-4 items-start">
                  <div className="flex-none w-8 h-8 rounded-2xl bg-sky-100 text-sky-700 font-bold grid place-items-center">{i+1}</div>
                  <div className="-mt-0.5">
                    <p className="font-semibold text-slate-800">{s.title}</p>
                    <p className="text-sm text-slate-600 mt-1">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-8 flex gap-4">
              <a href="#" className="inline-flex items-center gap-2 rounded-full bg-sky-500 text-white px-6 py-3 text-base font-semibold shadow-sm hover:bg-sky-600 transition">
                Start Enrollment <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#" className="inline-flex items-center rounded-full bg-white text-slate-800 px-6 py-3 text-base font-semibold shadow-sm ring-1 ring-slate-200 hover:bg-slate-50 transition">
                Tuition & FAQs
              </a>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden ring-1 ring-slate-100 shadow-xl">
            <img src="https://images.unsplash.com/photo-1599376672737-bd66af54c8f5?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxPdXRkb29yJTIwcGxheXxlbnwwfDB8fHwxNzYzNDUxNTU2fDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Outdoor play" className="w-full h-80 object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Enrollment
