import { motion } from 'framer-motion'
import resume from '../data/resume.json'

export function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">
            Certifications
          </h2>
          <h3 className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
            Credentials & Learning
          </h3>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {resume.certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 rounded-xl border border-white/5 bg-surface-800/50 p-4 transition hover:border-brand-500/30"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-500/15 text-brand-400">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-white">{cert.name}</p>
                <p className="text-sm text-gray-400">{cert.platform}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
