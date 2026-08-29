import { motion } from 'framer-motion'
import resume from '../data/resume.json'

export function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">
            Education
          </h2>
          <h3 className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
            Academic Journey
          </h3>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/60 via-brand-500/20 to-transparent md:left-1/2 md:-translate-x-px" />

          {resume.education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative mb-12 pl-12 md:pl-0"
            >
              <div className="absolute left-2.5 top-2 h-3 w-3 rounded-full border-2 border-brand-400 bg-surface-900 md:left-1/2 md:-translate-x-1.5" />

              <div className="md:grid md:grid-cols-2 md:gap-8">
                <div className="md:text-right md:pr-8">
                  <span className="inline-block rounded-full bg-brand-500/10 px-3 py-1 text-sm font-medium text-brand-300">
                    {edu.years}
                  </span>
                </div>
                <div className="mt-3 md:mt-0 md:pl-8">
                  <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                  <p className="mt-1 text-brand-300">{edu.institution}</p>
                  {edu.details && (
                    <p className="mt-2 text-sm text-gray-400">{edu.details}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
