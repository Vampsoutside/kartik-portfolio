import { motion } from 'framer-motion'
import resume from '../data/resume.json'

export function Contact() {
  const { contact } = resume

  return (
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">
            Contact
          </h2>
          <h3 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
            Let’s Connect
          </h3>
          <p className="mb-10 text-gray-400">
            Open to opportunities in data analysis, machine learning, and software development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col items-center gap-6"
        >
          <a
            href={`mailto:${contact.email}`}
            className="text-lg text-brand-300 transition hover:text-brand-200"
          >
            {contact.email}
          </a>
          <p className="text-gray-400">{contact.phone}</p>

          <div className="mt-4 flex gap-4">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-medium text-white transition hover:border-brand-500/40 hover:bg-brand-500/10"
            >
              LinkedIn
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 bg-white/5 px-6 py-2.5 text-sm font-medium text-white transition hover:border-brand-500/40 hover:bg-brand-500/10"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
