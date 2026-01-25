import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import logo from "../assets/logo.svg"
import dropdown from "../assets/dropdown.svg"
import { useNavigate } from "react-router-dom"

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/current_issue", label: "Current issue" },
    { to: "/archives", label: "Archives" },
    { to: "/editorial", label: "Editorial" },
    { to: "/publications", label: "Publication Ethics" },
    { to: "/indexing", label: "Indexing"},
  ]
  const aboutMenu = [
    { to: "/call-for-papers", label: "Call for Papers" },
    { to: "/open-access", label: "Open access" },
    { to: "/publication-charges", label: "Publication Charges" },
  ]

  return (
    <header className="w-full border border-black/25 border-backdrop-blur-sm bg-white/70">
      {/* FULL WIDTH BACKGROUND */}
      <div className="w-full">
        {/* CENTERED CONTENT WRAPPER */}
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 lg:px-6">

  {/* LOGO (left) */}
  <div onClick={()=> navigate('/')} className="flex items-center gap-2">
    <img src={logo} alt="JOET Logo" className="h-8 w-8 object-contain" />
    <span className="text-sm font-medium tracking-wide">
      JOET <p><span className="text-gray-500">Engineering Journal</span></p>
    </span>
  </div>

  {/* RIGHT SIDE (links + button) */}
  <div className="hidden md:flex items-center gap-6 ml-auto">

    <nav className="flex items-center gap-6">
    {links.map(link => {
  if (link.label === "About") {
    return (
      <div key="about" className="relative group">
        {/* About + arrow */}
        <div className="inline-flex items-center gap-1 text-sm cursor-pointer text-gray-700 group-hover:text-black">
          About
          <img src={dropdown} className="w-3 h-3 opacity-70" />
        </div>
  
        {/* DROPDOWN */}
        <div className="absolute left-0 mt-2 w-56 rounded-md border border-black/20 bg-white/90 backdrop-blur-sm shadow-lg
                        opacity-0 invisible group-hover:opacity-100 group-hover:visible
                        transition-all duration-100">
          <ul className="py-2">
            {aboutMenu.map(item => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  

  // normal links
  return (
    <NavLink
      key={link.to}
      to={link.to}
      className={({ isActive }) =>
        `inline-flex items-center text-sm transition ${
          isActive
            ? "text-green-700 font-semibold"
            : "text-gray-700 hover:text-black"
        }`
      }
    >
      {link.label}
    </NavLink>
  )
})}

    </nav>

    <NavLink
      to="/contact"
      className="border border-green-700 rounded-full px-4 py-1 text-sm font-medium text-white bg-[#065F46]"
    >
      Contact
    </NavLink>

    </div>

    {/* MOBILE MENU BUTTON */}
     <button
      onClick={() => setOpen(!open)}
      className="md:hidden border rounded px-3 py-1 text-lg"
      >
       ☰
       </button>
       </div>

      </div>

      {/* MOBILE MENU (FULL WIDTH) */}
      {open && (
        <div className="md:hidden w-full border-t bg-white">
          <div className="max-w-7xl mx-auto px-4 py-3 space-y-3">
            {links.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="block text-gray-700 text-sm"
              >
                {link.label}
              </NavLink>
            ))}

            <NavLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="block border border-green-700 rounded-full px-4 py-1 text-sm font-medium text-green-800 text-center"
            >
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
