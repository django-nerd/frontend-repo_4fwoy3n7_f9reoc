import React from 'react'
import { MapPin, Clock, Phone, Mail, Facebook, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-extrabold">Expertise Preschool</h3>
            <p className="mt-3 text-slate-300">Where warm care meets playful, purposeful learning.</p>
            <div className="mt-4 flex gap-3">
              <a href="#" className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 transition" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 transition" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-slate-200">Contact</h4>
            <p className="flex items-center gap-2 text-slate-300"><MapPin className="w-4 h-4" /> 123 Sunshine Ave, Happy Town</p>
            <p className="flex items-center gap-2 text-slate-300"><Phone className="w-4 h-4" /> (555) 123-4567</p>
            <p className="flex items-center gap-2 text-slate-300"><Mail className="w-4 h-4" /> hello@expertisepreschool.com</p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold text-slate-200">Hours</h4>
            <p className="flex items-center gap-2 text-slate-300"><Clock className="w-4 h-4" /> Mon–Fri: 7:30 AM – 6:00 PM</p>
            <p className="text-slate-400 text-sm">Tours by appointment</p>
            <div className="mt-4 rounded-2xl overflow-hidden ring-1 ring-slate-700">
              <img src="https://images.unsplash.com/photo-1619468129361-605ebea04b44?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxNYXB8ZW58MHwwfHx8MTc2MzQ1MTU1Nnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Map" className="w-full h-32 object-cover" />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800 pt-6 text-sm text-slate-400">
          <p>© {new Date().getFullYear()} Expertise Preschool. All rights reserved.</p>
          <p>Designed with care for families.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
