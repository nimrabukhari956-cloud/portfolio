function Skills() {
  return (
    <section  id="skills" className="px-10 py-10 bg-[#F0F0E8] ">
      <div className="flex items-center gap-2 mb-8">
        <span className="text-neutral-500">🎯</span>
        <h2 className="text-xl font-bold tracking-tight">TECHNICAL SKILLS</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-10">

        <div>
          <h3 className="text-xs font-bold text-neutral-500 tracking-wide mb-4">
            AI / MACHINE LEARNING
          </h3>
          <div className="flex flex-wrap gap-2">
            {["Python", "TensorFlow", "PyTorch", "OpenCV", "Machine Learning", "Deep Learning"].map((skill) => (
              <span key={skill} className="bg-white border border-neutral-200 text-xs font-medium px-4 py-2 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold text-neutral-500 tracking-wide mb-4">
            ENGINEERING
          </h3>
          <div className="flex flex-wrap gap-2">
            {["C / C++", "MATLAB", "Arduino", "Embedded Systems", "Sensors", "PID Control"].map((skill) => (
              <span key={skill} className="bg-white border border-neutral-200 text-xs font-medium px-4 py-2 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold text-neutral-500 tracking-wide mb-4">
            WEB DEVELOPMENT
          </h3>
          <div className="flex flex-wrap gap-2">
            {["React", "TypeScript", "Supabase", "HTML", "CSS", "JavaScript"].map((skill) => (
              <span key={skill} className="bg-white border border-neutral-200 text-xs font-medium px-4 py-2 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills