function Projects() {
  const projects = [
    {
      num: "01",
      title: "AI-Based Face Recognition Attendance System",
      desc: "Real-time attendance system using MTCNN for face detection and FaceNet for 512-D embeddings with up to 86% recognition confidence.",
      tags: ["Python", "OpenCV", "TensorFlow", "FaceNet"],
      img: `${import.meta.env.BASE_URL}project1.jpg`,
    },
    {
      num: "02",
      title: "Flowline — Kanban Project Management Tool",
      desc: "Full-stack real-time Kanban board with drag & drop, RBAC, comments, file attachments and instant sync using Supabase and TanStack.",
      tags: ["React 19", "TanStack", "Supabase", "PostgreSQL"],
      img: `${import.meta.env.BASE_URL}project2.jpg`,
    },
    {
      num: "03",
      title: "Local Service Provider",
      desc: "Full-stack platform connecting users with local service providers, featuring real-time booking, provider profiles, ratings, in-app chat and location-based search built on TanStack Start with Supabase.",
      tags: ["React 19", "TanStack", "Supabase", "PostgreSQL"],
      img: `${import.meta.env.BASE_URL}project3.jpg`,
    },
    
    {
      num: "04",
      title: "Algo Hub Website",
      desc: "Official company website developed with modern animations and responsive design for an engaging user experience.",
      tags: ["HTML", "CSS", "JavaScript", "Animations"],
      img: `${import.meta.env.BASE_URL}project4.jpg`,
    },
    {
      num: "05",
      title: "Meta Campus OS",
      desc: "Full-stack campus management platform with real-time data sync, role-based dashboards, resizable analytics panels and smooth motion-driven UI, built on TanStack Start with Supabase as the backend.",
      tags: ["React 19", "TanStack", "Supabase", "PostgreSQL"],
      img: `${import.meta.env.BASE_URL}project5.jpg`,
    },
  ]

  return (
    <section id="projects" className="px-10 py-10 bg-[#F8F8F8]">
      <div className="flex items-center gap-2 mb-8">
        <span className="text-neutral-500">📁</span>
        <h2 className="text-xl font-bold tracking-tight">FEATURED PROJECTS</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.num} className="bg-white rounded-2xl overflow-hidden border border-neutral-200">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-44 object-cover"
            />
            <div className="p-5 flex flex-col gap-3">
              <div className="flex items-start gap-2">
                <span className="text-xs font-bold text-neutral-400 mt-0.5">{project.num}</span>
                <h3 className="font-bold text-sm leading-snug">{project.title}</h3>
              </div>
              <p className="text-xs text-neutral-500 leading-relaxed">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2 mt-1">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-neutral-100 text-xs font-medium px-3 py-1 rounded-full text-neutral-600">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
       <a
         href="https://github.com/nimrabukhari956-cloud"
         target="_blank"
         rel="noopener noreferrer"
         className="flex items-center gap-2 bg-neutral-900 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-colors"
         >
          View More on GitHub
        </a>
      </div>
    </section>
  )
}

export default Projects