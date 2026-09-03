function Hero() {
  return (
    <section id="home" className="px-1 py-1">
      <div className=" relative bg-neutral-200/60  overflow-hidden px-12 py-14 grid md:grid-cols-2 gap-8 items-center">

        {/* Left: Text Content */}
        <div className="flex flex-col gap-5 relative z-10">
          <p className="text-sm font-medium text-neutral-500 tracking-wide">
            HELLO, I'M
          </p>

          <h1 className="text-5xl font-extrabold leading-tight text-neutral-900">
            SYEDA NIMRA<br />BUKHARI
          </h1>

          <h2 className="text-lg font-semibold text-neutral-800">
            Computer Engineering Technologist
          </h2>

          <p className="text-sm text-neutral-600 leading-relaxed max-w-md">
            Building intelligent systems where AI meets hardware & software.
            I design, develop and deploy real-world solutions in
            Computer Vision, Embedded Systems and Full-Stack Web Development.
          </p>

          <div className="flex gap-3 mt-2">
            <a
             href="#projects"
             className="flex items-center gap-2 bg-neutral-900 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-colors">
              View Projects →
            </a>
            <a
             href="https://github.com/nimrabukhari956-cloud"
             target="_blank"
             rel="noopener noreferrer" 
             className="bg-white text-neutral-900 text-sm font-medium px-5 py-2.5 rounded-full hover:bg-neutral-100 transition-colors">
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/nimrabukhari"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-neutral-900 text-sm font-medium px-5 py-2.5 rounded-full hover:bg-neutral-100 transition-colors"
            >
             LinkedIn
            </a>
            <a 
             href="#contact"
             className="bg-white text-neutral-900 text-sm font-medium px-5 py-2.5 rounded-full hover:bg-neutral-100 transition-colors">
              Contact Me
            </a>
            
          </div>

          <p className="text-xs text-neutral-500 mt-2">
            AI Enthusiast &nbsp;•&nbsp; Problem Solver &nbsp;•&nbsp; Builder
          </p>
        </div>

        {/* Right: Photo */}
        <div className="relative flex justify-center md:justify-end">
          <div className="w-72 h-72 md:w-80 md:h-96 overflow-hidden rounded-2xl">
            <img
              src="/nimra-photo.jpg"
              alt="Syeda Nimra Bukhari"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero