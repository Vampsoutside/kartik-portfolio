import { motion } from 'framer-motion'
import resume from '../data/resume.json'

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">
            Experience
          </h2>
          <h3 className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
            Where I’ve Applied My Skills
          </h3>
        </motion.div>

        <div className="space-y-6">
          {resume.experience.map((exp, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl border border-white/5 bg-surface-800/60 p-6 backdrop-blur transition hover:border-brand-500/30 hover:bg-surface-800"
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h4 className="text-xl font-semibold text-white group-hover:text-brand-300 transition-colors">
                  {exp.title}
                </h4>
                <span className="text-sm text-gray-400">{exp.period}</span>
              </div>
              <p className="mt-1 text-brand-400">{exp.company}</p>
              <ul className="mt-4 space-y-2">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="flex gap-2 text-sm text-gray-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
