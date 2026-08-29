import { motion } from 'framer-motion'
import resume from '../data/resume.json'

const categories = [
  { key: 'languages' as const, title: 'Languages', color: 'from-teal-500 to-cyan-400' },
  { key: 'tools' as const, title: 'Tools', color: 'from-emerald-500 to-teal-400' },
  { key: 'libs' as const, title: 'Libraries & Frameworks', color: 'from-cyan-500 to-blue-400' },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.2em] text-brand-400">
            Skills
          </h2>
          <h3 className="mb-12 text-center text-3xl font-bold text-white sm:text-4xl">
            Technical Toolkit
          </h3>
        </motion.div>

        <div className="space-y-10">
          {categories.map((cat, catIdx) => (
            <motion.div
              key={cat.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            >
              <h4 className="mb-4 text-lg font-medium text-gray-300">{cat.title}</h4>
              <div className="flex flex-wrap gap-3">
                {resume.skills[cat.key].map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIdx * 0.1 + i * 0.03 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`rounded-full bg-gradient-to-r ${cat.color} bg-opacity-10 px-4 py-2 text-sm font-medium text-white shadow-sm ring-1 ring-white/10 backdrop-blur transition`}
                    style={{
                      background: 'rgba(20, 184, 166, 0.12)',
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
