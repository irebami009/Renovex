import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const NavBar = () => {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("HOME")
  const [scrolled, setScrolled] = useState(false)

  const links = ["HOME", "SERVICES", "ABOUT US", "CONTACT", "BLOG"]

  // Sticky shadow on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* BLUR BACKDROP */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm md:hidden z-40"
          />
        )}
      </AnimatePresence>

      {/* NAVBAR */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-white/80 backdrop-blur-md"
        }`}
      >
        <div className="flex items-center justify-between px-6 py-4">

          {/* LOGO */}
          <div className="flex items-center space-x-2">
            <img src="./images/image 13.png" alt="" />
            <span className="text-3xl font-bold">Renovex</span>
          </div>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex space-x-10 text-[13px] font-medium relative">
            {links.map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className="relative"
              >
                {item}

                {/* ACTIVE INDICATOR */}
                {active === item && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 h-0.5 w-full bg-[#fbbf24]"
                  />
                )}
              </button>
            ))}
          </div>

          {/* SIGN UP */}
          <div className="hidden md:block">
            <button className="bg-[#fbbf24] px-6 py-2 rounded-2xl font-medium hover:bg-black hover:text-white transition">
              SIGN UP
            </button>
          </div>

          {/* HAMBURGER */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 space-y-1 z-50"
            onClick={() => setOpen(!open)}
          >
            <span
              className={`h-0.5 w-6 bg-black transition ${
                open ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-black transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-black transition ${
                open ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[70px] left-0 w-full bg-white z-50 md:hidden overflow-hidden shadow-lg"
          >
            <div className="flex flex-col space-y-4 px-6 py-6">
              {links.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setActive(item)
                    setOpen(false)
                  }}
                  className={`text-left ${
                    active === item ? "text-[#fbbf24]" : "text-black"
                  }`}
                >
                  {item}
                </button>
              ))}

              <button className="bg-[#fbbf24] px-6 py-2 rounded-2xl w-fit">
                SIGN UP
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default NavBar