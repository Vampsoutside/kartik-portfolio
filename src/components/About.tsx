import { motion } from 'framer-motion'
import resume from '../data/resume.json'

export function About() {
  return (
    <section id="about" className="relative py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">
            About
          </h2>
          <h3 className="mb-10 text-center text-3xl font-bold text-white sm:text-4xl">
            Who I Am
          </h3>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-5 text-gray-300 leading-relaxed"
          >
            <p className="text-lg">
              {resume.summary}
            </p>
            <p>
              Currently pursuing a B.Sc. in Computer Science at{' '}
              <span className="text-brand-300">{resume.education[0].institution}</span>.
              I love exploring the intersection of data science, machine learning,
              and interactive web experiences.
            </p>
            <p>
              Whether it’s building LSTM models for stock prediction or crafting
              polished dashboards that drive decisions, I focus on clarity,
              performance, and impact.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { label: 'Projects', value: '3+' },
              { label: 'Certifications', value: '5' },
              { label: 'Years Learning', value: '3+' },
              { label: 'Tickets Analyzed', value: '97k+' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/5 bg-surface-800/80 p-5 text-center backdrop-blur"
              >
                <div className="text-2xl font-bold text-brand-400">{stat.value}</div>
                <div className="mt-1 text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
