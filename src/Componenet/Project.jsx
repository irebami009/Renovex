import React from 'react'

const Project = () => {
  const gallery = [
    'Rectangle (3).png',
    'Rectangle (4).png',
    'Rectangle (5).png',
    'Rectangle (6).png',
    'Rectangle (7).png',
    'Rectangle (8).png',
  ]

  return (
    <section className="py-12 px-4 md:px-12" aria-labelledby="projects-heading">

      {/* TITLE */}
      <header className="mb-6 text-center">
        <h2 id="projects-heading" className="text-2xl md:text-4xl font-semibold font-poppins">
          Our Projects
        </h2>
      </header>

      {/* GALLERY */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 w-full">
        {gallery.map((file, idx) => (
          <img
            key={file}
            src={`/images/${file}`}
            alt={`Project ${idx + 1}`}
            className="w-full h-auto object-cover rounded-md"
            loading="lazy"
          />
        ))}
      </div>

      {/* BUTTON */}
      <div className="w-full flex justify-center px-4 mt-7">
        <button
          type="button"
          className="px-6 md:px-8 py-3 rounded-full text-[16px] md:text-[18px] bg-[#fbbf24] text-black font-medium hover:bg-black hover:text-white transition-all duration-300"
        >
          Contact Us
        </button>
      </div>

      {/* BOTTOM SECTION */}
      <div className="w-full flex flex-col lg:flex-row mt-16 lg:mt-20 gap-10 items-center lg:items-start">

        {/* IMAGE */}
        <div className="relative w-full lg:w-1/2">
          <img
            src="/images/image 14.png"
            alt="Completed project example"
            className="block w-full rounded-lg"
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#96400C]/50 p-3 rounded-full flex items-center justify-center">
              <img src="/images/Polygon 1.png" alt="" className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* TEXT */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">

          <h3 className="text-xl md:text-[30px] font-semibold">
            Quality that speaks for itself
          </h3>

          <p className="mt-3 text-sm md:text-[15px] text-gray-700">
            Our craftsmanship and attention to detail are evident in every project,
            ensuring long-lasting results that reflect our commitment to excellence.
            We let our work stand as a testament to our dedication to quality.
          </p>

          {/* LIST */}
          <div className="mt-4 space-y-3">

            <h3 className='text-sm md:text-[17px] flex items-center justify-center lg:justify-start font-bold'>
              <span className='text-2xl md:text-3xl text-[#FF6606] font-bold mr-2'>*</span>
              Excellence in every detail
            </h3>

            <h3 className='text-sm md:text-[17px] flex items-center justify-center lg:justify-start font-bold'>
              <span className='text-2xl md:text-3xl text-[#FF6606] font-bold mr-2'>*</span>
              Trusted expertise, proven for you
            </h3>

            <h3 className='text-sm md:text-[17px] flex items-center justify-center lg:justify-start font-bold'>
              <span className='text-2xl md:text-3xl text-[#FF6606] font-bold mr-2'>*</span>
              Innovative solutions tailored for you
            </h3>

            <h3 className='text-sm md:text-[17px] flex items-center justify-center lg:justify-start font-bold'>
              <span className='text-2xl md:text-3xl text-[#FF6606] font-bold mr-2'>*</span>
              Your vision, our commitment
            </h3>

          </div>

          {/* BUTTON */}
          <button
            type="button"
            className="px-6 md:px-8 py-3 rounded-full text-[16px] md:text-[18px] bg-[#fbbf24] text-black font-medium hover:bg-black hover:text-white transition-all duration-300 mt-6"
          >
            Learn More
          </button>

        </div>

      </div>
    </section>
  )
}

export default Project