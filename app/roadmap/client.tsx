'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Clock, Code2, Brain, Cloud, Search, Monitor, Smartphone, Lightbulb, Scan, Wrench } from 'lucide-react'

const releases = [
  {
    version: 'v1.0 — Now',
    title: 'Initial Release',
    items: [
      { icon: CheckCircle, label: 'macOS App', done: true },
      { icon: CheckCircle, label: 'Duplicate Finder 2.0', done: true },
      { icon: CheckCircle, label: 'Download Organization Assistant', done: true },
      { icon: CheckCircle, label: 'Preview Panel (Images, PDF, Video, Audio, Text)', done: true },
      { icon: CheckCircle, label: 'Open in Finder', done: true },
      { icon: CheckCircle, label: 'Scan History', done: true },
      { icon: CheckCircle, label: 'Smart Folder Scanning', done: true },
      { icon: CheckCircle, label: 'Privacy First — No Telemetry', done: true },
    ],
  },
  {
    version: 'v1.1 — Released',
    title: 'Windows Support',
    items: [
      { icon: CheckCircle, label: 'Windows native build', done: true },
      { icon: CheckCircle, label: 'File Explorer integration', done: true },
      { icon: CheckCircle, label: 'Windows-specific optimizations', done: true },
    ],
  },
  {
    version: 'v2.0 — Planned',
    title: 'Smart Features',
    items: [
      { icon: Lightbulb, label: 'Smart cleanup suggestions', done: false },
      { icon: Brain, label: 'AI-powered file organization', done: false },
      { icon: Cloud, label: 'Cloud drive integrations (iCloud, Google Drive, Dropbox)', done: false },
      { icon: Search, label: 'Advanced full-text search', done: false },
      { icon: Scan, label: 'Scheduled automatic scans', done: false },
      { icon: Wrench, label: 'Batch rename and conversion tools', done: false },
    ],
  },
]

export default function RoadmapPageClient() {
  return (
    <div className="pt-24">
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Roadmap
            </h1>
            <p className="mt-4 text-lg text-muted">
              FileSight is actively developed. Here&rsquo;s what we&rsquo;re working on and where we&rsquo;re headed.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-12">
            {releases.map((release, ri) => (
              <motion.div
                key={release.version}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`size-3 rounded-full ${
                    ri === 0 ? 'bg-green-500' : ri === 1 ? 'bg-blue-500' : ri === 2 ? 'bg-yellow-500' : 'bg-zinc-500'
                  }`} />
                  <div>
                    <p className="text-sm font-medium text-primary">{release.version}</p>
                    <h2 className="text-2xl font-bold tracking-tight">{release.title}</h2>
                  </div>
                </div>
                <div className="glass rounded-2xl p-6 space-y-3">
                  {release.items.map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <div className={`size-8 rounded-lg flex items-center justify-center shrink-0 ${
                        item.done ? 'bg-green-500/20' : 'bg-white/[0.06]'
                      }`}>
                        <item.icon className={`size-4 ${
                          item.done ? 'text-green-400' : 'text-muted'
                        }`} />
                      </div>
                      <span className={`text-sm ${item.done ? '' : 'text-muted'}`}>
                        {item.label}
                      </span>
                      {item.done && (
                        <span className="text-xs font-medium text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full ml-auto">
                          Released
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
