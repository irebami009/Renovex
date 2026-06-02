import React from 'react'

const Service = () => {
  return (
    <div className='py-10'>

      {/* SERVICES WRAPPER */}
      <div className='flex flex-col items-center justify-center gap-10 px-4 md:px-10 lg:px-15'>

        {/* TITLE */}
        <div>
          <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-center'>
            Our Services
          </h1>
        </div>

        {/* CARDS GRID */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full'>

          {/* CARD 1 */}
          <div className='bg-white px-4 text-center py-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 hover:bg-gray-50 transition-all duration-300 flex flex-col items-center border border-gray-200'>

            <img src="./images/Vector (3).png" alt="" className='mb-4 hover:scale-110 transition-transform duration-300' />

            <h2 className='text-lg font-bold mb-2 mt-4'>Residential Construction</h2>

            <p className='text-gray-600 text-sm md:text-[15px] leading-6 md:leading-8 font-poppins'>
              We build comfortable and modern homes designed to fit your lifestyle and budget
            </p>
          </div>

          {/* CARD 2 */}
          <div className='bg-white text-center py-7 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 hover:bg-gray-50 transition-all duration-300 flex flex-col items-center border border-gray-200'>

            <img src="./images/Vector (1).png" alt="" className='mb-4 hover:scale-110 transition-transform duration-300' />

            <h2 className='text-lg font-bold mb-2 mt-4'>Commercial Projects</h2>

            <p className='text-gray-600 text-sm md:text-[15px] leading-6 md:leading-8 font-poppins'>
              Our commercial solutions combine functionality, aesthetics, and structural integrity.
            </p>
          </div>

          {/* CARD 3 */}
          <div className='bg-white text-center py-7 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 hover:bg-gray-50 transition-all duration-300 flex flex-col items-center border border-gray-200'>

            <img src="./images/Vector (2).png" alt="" className='mb-4 hover:scale-110 transition-transform duration-300' />

            <h2 className='text-lg font-bold mb-2 mt-4'>Renovation Services</h2>

            <p className='text-gray-600 text-sm md:text-[15px] leading-6 md:leading-8 font-poppins'>
              Transform existing spaces with smart renovations and premium finishing solutions.
            </p>
          </div>

          {/* CARD 4 */}
          <div className='bg-white text-center py-7 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 hover:bg-gray-50 transition-all duration-300 flex flex-col items-center border border-gray-200'>

            <img src="./images/Vector (3).png" alt="" className='mb-4 hover:scale-110 transition-transform duration-300' />

            <h2 className='text-lg font-bold mb-2 mt-4'>Project Supervision</h2>

            <p className='text-gray-600 text-sm md:text-[15px] leading-6 md:leading-8 font-poppins'>
              Professional oversight ensuring quality delivery, cost efficiency and timely completion.
            </p>
          </div>

          {/* CARD 5 */}
          <div className='bg-white text-center py-7 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 hover:bg-gray-50 transition-all duration-300 flex flex-col items-center border border-gray-200'>

            <img src="./images/Vector (4).png" alt="" className='mb-4 hover:scale-110 transition-transform duration-300' />

            <h2 className='text-lg font-bold mb-2 mt-4'>Roofing Solutions</h2>

            <p className='text-gray-600 text-sm md:text-[15px] leading-6 md:leading-8 font-poppins'>
              Providing durable and innovative roofing systems designed to protect.
            </p>
          </div>

          {/* CARD 6 */}
          <div className='bg-white text-center py-7 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 hover:bg-gray-50 transition-all duration-300 flex flex-col items-center border border-gray-200'>

            <img src="./images/Vector (5).png" alt="" className='mb-4 hover:scale-110 transition-transform duration-300' />

            <h2 className='text-lg font-bold mb-2 mt-4'>Interior Finishing</h2>

            <p className='text-gray-600 text-sm md:text-[15px] leading-6 md:leading-8 font-poppins'>
              Delivering impeccable craftsmanship to enhance beauty and comfort.
            </p>
          </div>

        </div>

        {/* BUTTON */}
        <div className='w-full flex justify-center md:justify-end px-4 md:px-10 lg:px-15'>
          <button className='px-6 md:px-7 py-3 rounded-full bg-[#fbbf24] text-black font-medium hover:bg-black hover:text-white transition-all duration-300 cursor-pointer'>
            Learn More
          </button>
        </div>

      </div>

    </div>
  )
}

export default Service