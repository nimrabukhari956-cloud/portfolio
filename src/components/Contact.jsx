import { Link2, Mail } from 'lucide-react'
import { SiGithub } from '@icons-pack/react-simple-icons'

function Contact() {
  const contacts = [
    { icon: Mail, label: "Email", value: "nimrabukhari956@gmail.com", brand: false },
    { icon: SiGithub, label: "GitHub", value: "nimrabukhari956-cloud", brand: true },
    
  ]

  return (
    <>
      <section id="contact" className="px-10 py-10">
        <div className="flex items-center gap-2 mb-8">
          <Link2 size={22} strokeWidth={2.5} color="#181820" />
          <h2 className="text-xl font-bold tracking-tight">LET'S CONNECT</h2>
        </div>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-sm text-neutral-500 max-w-sm">
            Have a project in mind or want to collaborate? I'm always open to discussing new ideas.
          </p>

          <div className="flex flex-wrap gap-8">
            {contacts.map((contact) => (
              <div key={contact.label} className="flex items-center gap-2">
                {contact.brand ? (
                  <contact.icon size={20} color="#181820" />
                ) : (
                  <contact.icon size={20} strokeWidth={2.5} color="#181820" />
                )}
                <div>
                  <p className="text-xs font-bold">{contact.label}</p>
                  <p className="text-xs text-neutral-500">{contact.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="bg-neutral-900 text-neutral-400 text-center py-6 mt-10">
        <p className="text-xs">© 2026 Syeda Nimra Bukhari. All rights reserved.</p>
      </footer>
    </>
  )
}

export default Contact