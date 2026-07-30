'use client'

import { motion } from 'framer-motion'
import { FolderOpen, Copy, HardDrive, Search, Eye, CheckCircle } from 'lucide-react'

const problems = [
  {
    icon: FolderOpen,
    problem: '&ldquo;My Downloads folder is a mess.&rdquo;',
    solution: 'The Download Organization Assistant automatically categorizes files into Documents, Images, Videos, Audio, Archives, Applications, and Code.',
  },
  {
    icon: Copy,
    problem: '&ldquo;I accidentally saved five copies.&rdquo;',
    solution: 'Duplicate Finder 2.0 uses SHA-256 hashing, similarity analysis, and confidence scoring to identify exact and near-duplicate files.',
  },
  {
    icon: HardDrive,
    problem: '&ldquo;I don&rsquo;t know what&rsquo;s taking space.&rdquo;',
    solution: 'Smart folder scanning shows you storage usage at a glance, grouped by file type, size, and location.',
  },
  {
    icon: Search,
    problem: '&ldquo;I waste time searching for files.&rdquo;',
    solution: 'Fast local scanning indexes your files instantly. Preview panel lets you inspect content without opening separate apps.',
  },
  {
    icon: Eye,
    problem: '&ldquo;I can&rsquo;t preview files quickly.&rdquo;',
    solution: 'Built-in preview panel supports images, PDFs, video, audio, and text files. No need to launch multiple applications.',
  },
]

export default function ProblemSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Sound familiar?
          </h2>
          <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
            File chaos affects everyone. FileSight is built to solve these specific problems.
          </p>
        </motion.div>

        <div className="space-y-6 max-w-3xl mx-auto">
          {problems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="glass rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-primary/20 hover:shadow-[0_0_30px_rgba(168,85,247,0.05)]">
                <div className="flex flex-col sm:flex-row items-start gap-5">
                  <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="size-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-lg sm:text-xl font-medium mb-2" dangerouslySetInnerHTML={{ __html: item.problem }} />
                    <p className="text-muted leading-relaxed">{item.solution}</p>
                  </div>
                  <div className="hidden sm:flex items-center mt-1">
                    <CheckCircle className="size-5 text-primary/60" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
