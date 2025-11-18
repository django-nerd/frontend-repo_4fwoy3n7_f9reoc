import React from 'react'
import { Menu, Phone, Mail } from 'lucide-react'

const Navbar = ({ onToggleLayout, layout }) => {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-teal-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-sky-200 via-peach-200 to-amber-200 shadow-sm" aria-hidden="true"></div>
            <div>
              <p className="text-xl font-extrabold tracking-tight text-slate-800">Expertise Preschool</p>
              <p className="text-xs text-slate-500">Growing Bright Minds</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-slate-700">
            <a href="#about" className="hover:text-slate-900">About</a>
            <a href="#programs" className="hover:text-slate-900">Programs</a>
            <a href="#why" className="hover:text-slate-900">Why Us</a>
            <a href="#gallery" className="hover:text-slate-900">Gallery</a>
            <a href="#testimonials" className="hover:text-slate-900">Testimonials</a>
            <a href="#enroll" className="hover:text-slate-900">Enroll</a>
          </nav>

          <div className="flex items-center gap-2">
            <button onClick={onToggleLayout} aria-label="Toggle layout style" className="hidden sm:inline-flex items-center text-xs font-semibold rounded-full px-3 py-1.5 bg-mint-200 text-slate-800 hover:bg-mint-300 transition-colors">
              Theme: {layout === 'A' ? 'Playful' : 'Clean'}
            </button>
            <a href="#enroll" className="hidden sm:inline-flex items-center gap-2 rounded-full bg-sky-500 text-white px-4 py-2 shadow-sm hover:shadow-md hover:bg-sky-600 transition">
              <Phone className="w-4 h-4" /> Enroll Now
            </a>
            <button className="md:hidden p-2 rounded-xl hover:bg-slate-100" aria-label="Open menu">
              <Menu className="w-6 h-6 text-slate-700" />
            </button>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4 pb-3 text-sm text-slate-600">
          <div className="flex items-center gap-2"><Phone className="w-4 h-4 text-sky-600" /><span>(555) 123-4567</span></div>
          <div className="flex items-center gap-2"><Mail className="w-4 h-4 text-sky-600" /><span>hello@expertisepreschool.com</span></div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
