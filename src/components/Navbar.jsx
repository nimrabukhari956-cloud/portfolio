function Navbar() {
  const navLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Achievements", id: "achievements" },
    { label: "Contact", id: "contact" },
  ]

  return (
    <nav className="flex items-center justify-between px-10 py-6 bg-neutral-50 sticky top-0 z-50">
      <h1 className="text-lg font-bold tracking-wide">NIMRA.</h1>

      <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-700">
        {navLinks.map((link) => (
          <li key={link.id}>
            <a href={`#${link.id}`} className="hover:text-black cursor-pointer transition-colors">
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <a 
       href="/Nimra-CV.pdf"
       download="Nimra-CV.pdf"
       className="flex items-center gap-2 bg-neutral-900 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-colors">
        Download CV
        
        <span>↓</span>
      </a>
    </nav>
  )
}

export default Navbar