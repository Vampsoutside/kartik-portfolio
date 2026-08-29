import { motion } from 'framer-motion'
import resume from '../data/resume.json'

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">
            Projects
          </h2>
          <h3 className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
            Selected Work
          </h3>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {resume.projects.map((project, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group flex flex-col rounded-2xl border border-white/5 bg-surface-800/70 p-6 backdrop-blur transition hover:border-brand-500/40 hover:shadow-xl hover:shadow-brand-500/5"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/15 text-brand-400">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="mb-2 text-lg font-semibold text-white group-hover:text-brand-300 transition-colors">
                {project.title}
              </h4>
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-brand-400/80">
                {project.tech}
              </p>
              <p className="flex-1 text-sm leading-relaxed text-gray-400">
                {project.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
