import React from 'react'

const Contact = () => {
  return (
    <div className="py-12 px-4 md:px-12" aria-labelledby="contact-heading">

      {/* FORM CONTAINER */}
      <div className="bg-[#F8F8F8] p-6 md:p-10 rounded-lg">

        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center">
          Contact Form Fields
        </h1>

        {/* FORM */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-16 md:gap-y-10">

          {/* LEFT COLUMN */}
          <input
            type="text"
            placeholder="Full Name"
            className="px-5 md:px-6 py-4 border border-orange-400 rounded-2xl outline-none w-full"
          />

          <input
            type="text"
            placeholder="Budget Range"
            className="px-5 md:px-6 py-4 border border-orange-400 rounded-2xl outline-none w-full"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="px-5 md:px-6 py-4 border border-orange-400 rounded-2xl outline-none w-full"
          />

          <input
            type="text"
            placeholder="Message"
            className="px-5 md:px-6 py-4 border border-orange-400 rounded-2xl outline-none w-full"
          />

          <input
            type="text"
            placeholder="Project Type"
            className="px-5 md:px-6 py-4 border border-orange-400 rounded-2xl outline-none w-full md:col-span-1"
          />

          {/* EMPTY SPACE (only desktop) */}
          <div className="hidden md:block"></div>

        </form>

      </div>
    </div>
  )
}

export default Contact