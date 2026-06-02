import React from 'react'

const AboutUs = () => {
  return (
    <div className='py-10 px-4 md:px-12'>

      {/* FIRST TEXT */}
      <div className="w-full md:w-1/2">
        <h1 className='text-2xl md:text-[35px] font-semibold mb-2 font-poppins leading-snug'>
          About Our Company
        </h1>

        <p className='text-base md:text-[20px] font-poppins mb-10'>
          We provide customized construction solutions designed to meet your unique needs,
          ensuring every project reflects your vision and exceeds expectations.
        </p>
      </div>

      {/* SECOND CONTAINER */}
      <div className="flex flex-col lg:flex-row items-start gap-10">

        {/* IMAGE SECTION */}
        <div className="relative w-full lg:w-[100%] flex justify-center lg:justify-start">

          {/* FIRST IMAGE */}
          <div>
            <img
              src="./images/Rectangle (1).png"
              alt=""
              className='w-full max-w-md lg:max-w-none'
            />
          </div>

          {/* SECOND IMAGE (ONLY FOR DESKTOP) */}
          <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2">
            <img
              src="./images/Rectangle (2).png"
              alt=""
              className="ml-[-25%]"
            />
          </div>

        </div>

        {/* TEXT BOX */}
        <div className='w-full lg:w-1/2 px-4 md:px-8 rounded-2xl py-8 md:py-12 flex flex-col justify-center bg-[#f8f8f8] text-center'>

          <h2 className='text-2xl md:text-[30px] font-bold mb-2 font-poppins'>
            Our Mission
          </h2>

          <p className='text-sm md:text-[15px] leading-6 md:leading-7 font-poppins'>
            To provide exceptional construction services that exceed
            client expectation through innovation, quality craftsmanship
            and a commitment to sustainability. We aim to build lasting relationships
            and create spaces that enhance communities.
          </p>

        </div>

      </div>

    </div>
  )
}

export default AboutUs