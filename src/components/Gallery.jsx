import React from 'react'

const images = [
  'https://images.unsplash.com/photo-1596496181848-3890e3e21190?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1596464716121-e96efeb0d140?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1588866021926-5566f11e0a7d?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1529257414770-1960b3c6a6b7?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1549576490-b0b4831ef60a?q=80&w=1200&auto=format&fit=crop'
]

const Gallery = () => {
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800">Our Spaces & Smiles</h2>
          <p className="mt-3 text-slate-600">A peek into our warm classrooms, joyful play, and daily discoveries.</p>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div key={i} className="group rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all">
              <img src={src} alt="gallery" className="h-40 md:h-52 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
