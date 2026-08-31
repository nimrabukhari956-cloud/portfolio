function Experience() {
  const experiences = [
    {
      period: "2026 – Present",
      role: "Web Developer Intern",
      company: "Algo Hub",
      desc: "Interning as a Web Developer at Algo Hub, collaborating on modern web solutions and bringing ideas to life.",
      icon: "A",
    },
    {
      period: "Feb 2025 – Present",
      role: "Web Developer",
      company: "Academic & Freelance Clients",
      desc: "Designed and developed responsive websites for academic and freelance clients with focus on performance and user experience.",
      icon: "🌐",
    },
  ]

  return (
    <section id="experience" className="px-10 py-10 bg-[#F0F0E8]">
      <div className="flex items-center gap-2 mb-8">
        <span className="text-neutral-500">🕐</span>
        <h2 className="text-xl font-bold tracking-tight">EXPERIENCE</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {experiences.map((exp) => (
          <div key={exp.role} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center text-sm font-bold shrink-0">
                {exp.icon}
              </div>
              <div className="w-px flex-1 bg-neutral-300 mt-2"></div>
            </div>
            <div className="pb-4">
              <p className="text-xs font-medium text-neutral-400 mb-1">{exp.period}</p>
              <h3 className="font-bold text-sm mb-0.5">{exp.role}</h3>
              <p className="text-xs font-semibold text-neutral-600 mb-2">{exp.company}</p>
              <p className="text-xs text-neutral-500 leading-relaxed">{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience