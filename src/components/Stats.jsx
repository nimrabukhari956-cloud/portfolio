import { Images, Eye, Target, Zap, User } from 'lucide-react'

function Stats() {
  const stats = [
    { icon: Images, num: "1200+", label: "Dataset Images Processed" },
    { icon: Eye, num: "92%+", label: "Obstacle Detection Accuracy" },
    { icon: Target, num: "86%", label: "Recognition Confidence" },
    { icon: Zap, num: "5+", label: "Hardware-Software Integrated Projects" },
    { icon: User, num: "2+", label: "Years of Web Development" },
  ]

  return (
    <section className="px-10 py-10 bg-[#F0F0E8]">
      <div className="flex items-center gap-2 mb-8">
        <span className="text-neutral-500">📊</span>
        <h2 className="text-xl font-bold tracking-tight">BY THE NUMBERS</h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-neutral-100 rounded-2xl p-6 flex flex-col gap-3 items-center text-center">
            <stat.icon size={32} strokeWidth={2.5} color="#181820" />
            <h3 className="text-2xl font-extrabold">{stat.num}</h3>
            <p className="text-xs text-neutral-500 leading-snug">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats