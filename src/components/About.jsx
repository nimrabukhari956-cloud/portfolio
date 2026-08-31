import { BrainCircuit, Cpu, Code2 } from 'lucide-react'

function About() {
  const cards = [
    {
      icon: BrainCircuit,
      title: "AI & Computer Vision",
      desc: "MTCNN, FaceNet, OpenCV, TensorFlow, PyTorch, Deep Learning",
    },
    {
      icon: Cpu,
      title: "Embedded Systems",
      desc: "Arduino, Sensors, PID Control, Robotics, Real-time Systems",
    },
    {
      icon: Code2,
      title: "Full Stack Development",
      desc: "React, TypeScript, Supabase, Firebase, Responsive Web Apps",
    },
  ]

  return (
    <section id="about" className="px-10 py-10 bg-[#F8F8F8]">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-neutral-500">💬</span>
        <h2 className="text-xl font-bold tracking-tight">ABOUT ME</h2>
      </div>

      <div className="grid md:grid-cols-[1.2fr_1fr_1fr_1fr] gap-6">

        <p className="text-sm text-neutral-600 leading-relaxed">
          Motivated Computer Engineering Technologist with hands-on experience
          in embedded systems, robotics, computer vision, and AI-powered
          applications, including real-time deep learning systems deployed on
          edge hardware, as well as full-stack web application development.
          Passionate about building intelligent hardware-software solutions
          and scalable web platforms that solve real-world problems.
        </p>

        {cards.map((card) => (
          <div key={card.title} className="bg-neutral-100 rounded-2xl p-6 flex flex-col gap-3">
            <card.icon size={32} strokeWidth={2.5} color="#181820" />
            <h3 className="font-bold text-sm">{card.title}</h3>
            <p className="text-xs text-neutral-500 leading-relaxed">
              {card.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  )
}

export default About