'use client'

import { motion } from 'framer-motion'
import { Folder, Group, Hash, ArrowDown, CheckCircle, Percent, FileText } from 'lucide-react'

const steps = [
  { icon: Folder, label: 'Folder', description: 'Select any folder or drive to scan' },
  { icon: Group, label: 'Group by Size', description: 'Files are grouped by exact byte size for initial matching' },
  { icon: Hash, label: 'Hash Files', description: 'Each file gets a unique SHA-256 fingerprint' },
  { icon: ArrowDown, label: 'Compare SHA-256', description: 'Hashes are compared to find exact duplicates' },
  { icon: FileText, label: 'Similarity Analysis', description: 'Filename and extension similarity are analyzed for near-matches' },
  { icon: Percent, label: 'Confidence Score', description: 'Each match gets a confidence score based on multiple signals' },
  { icon: CheckCircle, label: 'Suggested File to Keep', description: 'The best copy is suggested based on location, date, and name' },
]

export default function DuplicateDetection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[600px] bg-purple-500/5 rounded-full blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            How duplicate detection works
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Multi-layered analysis minimizes false positives and gives you confidence in every cleanup.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative flex gap-6 pb-8 last:pb-0"
            >
              {i < steps.length - 1 && (
                <div className="absolute left-6 top-14 bottom-0 w-px bg-gradient-to-b from-primary/40 to-transparent" />
              )}
              <div className={`size-12 rounded-xl flex items-center justify-center shrink-0 ${
                i === steps.length - 1 ? 'bg-green-500/20 text-green-400' : 'bg-primary/10 text-primary'
              }`}>
                <step.icon className="size-6" />
              </div>
              <div className="flex-1 pt-2">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-xs font-medium text-muted">Step {i + 1}</span>
                  <h3 className="text-base font-semibold">{step.label}</h3>
                </div>
                <p className="text-sm text-muted">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl glass max-w-3xl mx-auto"
        >
          <h3 className="text-lg font-semibold mb-3">Why this approach minimizes false positives</h3>
          <ul className="space-y-3">
            {[
              'Size-grouping eliminates obviously different files before hashing',
              'SHA-256 guarantees cryptographic certainty for exact matches',
              'Filename similarity catches renamed duplicates traditional tools miss',
              'Extension-aware matching prevents false matches between different file types',
              'Confidence scoring lets you decide what threshold to use',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-muted">
                <CheckCircle className="size-4 text-primary shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}
