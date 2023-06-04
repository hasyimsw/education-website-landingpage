import { Link } from "react-scroll"
import { navLinks } from "../../Data"
import { HiMenuAlt1, HiX } from "react-icons/hi"
import { useState } from "react"

const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="w-full fixed top-0 left-0 z-20 bg-Solitude">
      <div className="container mx-auto flex items-center justify-between px-2 py-4">
        <div className="flex items-center justify-between gap-4">
          <HiMenuAlt1 className="text-3xl sm:hidden cursor-pointer" onClick={() => setToggle(true)} />
          <div className="text-xl text-Teal uppercase tracking-wide font-bold">
            Skillex
          </div>
        </div>
        <div className="sm:flex hidden items-center">
          {navLinks.map((link) => {
            return (
              <Link key={link.id} to={link.href} spy={true} smooth={true} duration={500} offset={-50} className="cursor-pointer mr-8 transition-all font-semibold duration-300">
                {link.link}
              </Link>
            )
          })}
        </div>
        <button className="py-3 px-6 text-sm font-semibold border border-solid rounded-lg border-gray">
          Sign Up
        </button>
        {toggle &&
          <div className={`fixed w-full z-30 h-screen space-y-8 bg-Teal top-0 left-0 pt-40`}>
            <HiX className="text-3xl absolute top-4 right-4 text-white cursor-pointer" onClick={() => setToggle(false)} />
            {navLinks.map((link) => {
              return (
                <div key={link.id} className="flex flex-col">
                  <Link to={link.href} spy={true} smooth={true} duration={500} offset={-50} className="text-white hover:text-gray cursor-pointer mx-auto text-xl" onClick={() => setToggle(false)}>
                    {link.link}
                  </Link>
                </div>
              )
            })}
          </div>
        }
      </div>
    </nav>
  )
}

export default Navbar