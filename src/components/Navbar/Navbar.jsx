import { Link } from "react-scroll"
import { navLinks } from "../../Data"
import { HiX } from "react-icons/hi"
import { MdMenuOpen } from "react-icons/md"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  const [active, setActive] = useState(null)

  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20)
    }

    window.addEventListener("scroll", scrollActive)
    return () => window.removeEventListener("scroll", scrollActive)
  }, [active])

  return (
    <nav className={`${active ? "backdrop-blur-lg shadow-md" : ""} w-full fixed top-0 left-0 z-20`}>
      <div className="container mx-auto flex items-center justify-between px-2 py-4">
        <div className="flex items-center justify-between gap-4">
          <MdMenuOpen className="text-3xl sm:hidden cursor-pointer" onClick={() => setToggle(true)} />
          <div className="text-2xl text-Teal uppercase tracking-wide font-bold">
            Skillex.
          </div>
        </div>
        <div className="sm:flex hidden items-center">
          {navLinks.map((link) => {
            return (
              <Link key={link.id} to={link.href} spy={true} smooth={true} duration={500} offset={-50} className="text-slate-600 nav-link cursor-pointer mr-8 transition-all font-medium hover:text-slate-900">
                {link.link}
              </Link>
            )
          })}
        </div>
        <button className="py-2 px-6 border-2 border-solid border-gray rounded-md text-sm font-medium shadow-md">
          Sign Up
        </button>
        {toggle &&
          <motion.div
            initial={{ display: 'hidden', opacity: 0 }}
            animate={{ display: 'block', opacity: 1 }}
            exit={{ opacity: 0, display: 'hidden' }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className={`fixed w-full z-30 h-screen space-y-8 bg-Teal top-0 left-0 pt-40`}
          >
            <HiX className="text-3xl absolute top-4 right-4 text-white cursor-pointer" onClick={() => setToggle(false)} />
            {navLinks.map((link) => {
              return (
                <div key={link.id} className="flex flex-col">
                  <Link to={link.href} spy={true} smooth={true} duration={500} offset={-50} className="nav-link text-white hover:text-slate-900 cursor-pointer mx-auto text-xl" onClick={() => setToggle(false)}>
                    {link.link}
                  </Link>
                </div>
              )
            })}
          </motion.div>
        }
      </div>
    </nav>
  )
}

export default Navbar