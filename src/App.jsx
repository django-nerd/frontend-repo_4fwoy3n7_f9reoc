import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Programs from './components/Programs'
import WhyChooseUs from './components/WhyChooseUs'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Enrollment from './components/Enrollment'
import Footer from './components/Footer'

function App() {
  const [layout, setLayout] = useState('A') // A: playful, B: clean

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Navbar layout={layout} onToggleLayout={() => setLayout(layout === 'A' ? 'B' : 'A')} />
      <main>
        <Hero layout={layout} />
        <About />
        <Programs />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <Enrollment />
      </main>
      <Footer />
    </div>
  )
}

export default App
