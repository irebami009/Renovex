import React from 'react'

const Home = () => {
  return (
    <div className='w-full px-6 md:px-12 py-7'>

      {/* FIRST SECTION */}
      <div className='flex flex-col md:flex-row items-center justify-between gap-10 md:gap-50 py-5'>

        {/* FIRST TEXT */}
        <div>
          <h1 className='text-2xl md:text-[2.3rem] font-bold mb-4'>
            Building The Future with Precision & Excellence
          </h1>

          <p className='text-base md:text-[20px] text-black-600 font-semi-bold mb-6 font-poppins'>
            We deliver high-quality residential, commercial, and industrial
            construction projects with innovation, safety and reliability at
            the core.
          </p>
        </div>

        {/* FIRST IMAGE (UNCHANGED ON DESKTOP) */}
        <div className='w-full md:w-[50%] flex justify-center md:justify-end'>
          <img
            src="./images/Group 40.png"
            alt=""
            className='w-full md:w-auto'
          />
        </div>

      </div>
      {/* END FIRST SECTION */}



      {/* SECOND SECTION */}
      <div className='flex flex-col md:flex-row'>

        {/* IMAGE */}
        <div className='w-full md:w-[100%]'>
          <img src="./images/Rectangle.png" alt="" />
        </div>

        {/* TEXT */}
        <div className='py-4 px-4 md:px-7'>

          <p className='mt-5 mb-10 text-base md:text-[20px] text-black-600 font-semi-bold font-poppins'>
            With over 15 years of industry experience, our team specializes
            in delivering durable and modern structures tailored to client
            needs. From planning to execution, we ensure every project
            meets the highest standards.
          </p>

          <img src="./images/Group 22.png" alt="" />

          {/* BUTTONS */}
          <div className='flex flex-col md:flex-row gap-4 md:gap-20 mt-10'>

            <button className='px-6 md:px-8 py-3 rounded-full text-[16px] bg-[#fbbf24] text-black font-medium hover:bg-black hover:text-white transition-all duration-300 cursor-pointer'>
              GET A FREE QUOTE
            </button>

            <button className='px-6 py-3 rounded-full text-[15px] border border-[#fbbf24] text-black font-medium hover:bg-black hover:text-white transition-all duration-300 cursor-pointer'>
              BOOK NOW
            </button>

          </div>

        </div>
      </div>
      {/* END SECOND SECTION */}



      {/* THIRD SECTION */}
      <div className='grid grid-cols-2 md:flex md:items-center md:justify-between gap-6 md:gap-10 px-4 md:px-10 py-10 text-center'>

        <div className='font-semibold'>
          <h3>250+</h3>
          <h4>project completed</h4>
        </div>

        <div className='font-semibold'>
          <h3>120+</h3>
          <h4>skilled professionals</h4>
        </div>

        <div className='font-semibold'>
          <h3>15+</h3>
          <h4>years experience</h4>
        </div>

        <div className='font-semibold'>
          <h3>90%</h3>
          <h4>client satisfaction</h4>
        </div>

      </div>

    </div>
  )
}

export default Home