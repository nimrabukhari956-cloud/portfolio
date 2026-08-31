import { Infinity as InfinityIcon, Award, Trophy, Star, Layers } from 'lucide-react'

function Achievements() {
  const certs = [
    { icon: Layers, title: "Build with AI Workshop 2025", sub: "Google" },
    { icon: InfinityIcon, title: "Arduino & Embedded Systems Certificate", sub: "" },
    { icon: Award, title: "OpenCV & Computer Vision Certificate", sub: "" },
    { icon: Trophy, title: "Speed Wiring Certificate", sub: "Excellence Award" },
    { icon: Star, title: "AI Product Development Workshop", sub: "" },
  ]

  return (
    <section id="achievements" className="px-10 py-10">
      <div className="flex items-center gap-2 mb-8">
        <span className="text-neutral-500">🏆</span>
        <h2 className="text-xl font-bold tracking-tight">CERTIFICATIONS & ACHIEVEMENTS</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {certs.map((cert) => (
          <div key={cert.title} className="bg-neutral-100 rounded-2xl p-5 flex flex-col gap-3 items-start">
            <cert.icon size={32} strokeWidth={2.5} color="#181820" />
            <div>
              <h3 className="text-xs font-bold leading-snug">{cert.title}</h3>
              {cert.sub && <p className="text-xs text-neutral-500 mt-1">{cert.sub}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Achievements