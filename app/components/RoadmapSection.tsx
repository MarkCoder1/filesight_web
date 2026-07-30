'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Clock, Code2, Brain, Cloud, Search, Monitor, Smartphone } from 'lucide-react'
import Link from 'next/link'

const roadmap = [
  {
    status: 'done',
    icon: Monitor,
    title: 'macOS App',
    date: 'v1.0 — Now',
  },
  {
    status: 'progress',
    icon: Monitor,
    title: 'Windows App',
    date: 'v1.1 — Coming Soon',
  },
  {
    status: 'progress',
    icon: Monitor,
    title: 'Linux App',
    date: 'v1.2 — In Development',
  },
  {
    status: 'upcoming',
    icon: Brain,
    title: 'Smart Cleanup Suggestions',
    date: 'v2.0',
  },
  {
    status: 'upcoming',
    icon: Code2,
    title: 'AI Organization',
    date: 'v2.0',
  },
  {
    status: 'upcoming',
    icon: Cloud,
    title: 'Cloud Drive Integrations',
    date: 'v2.0',
  },
  {
    status: 'upcoming',
    icon: Search,
    title: 'Advanced Search',
    date: 'v2.0',
  },
]

export default function RoadmapSection() {
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
            What&rsquo;s next
          </h2>
          <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
            FileSight is actively developed. Here&rsquo;s what we&rsquo;re working on.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {roadmap.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className="flex items-center gap-4 p-4 rounded-xl glass transition-all hover:border-primary/10"
            >
              <div className={`size-10 rounded-lg flex items-center justify-center shrink-0 ${
                item.status === 'done' ? 'bg-green-500/20 text-green-400' :
                item.status === 'progress' ? 'bg-blue-500/20 text-blue-400' :
                'bg-white/[0.06] text-muted'
              }`}>
                {item.status === 'done' ? (
                  <CheckCircle className="size-5" />
                ) : (
                  <item.icon className="size-5" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-medium ${item.status === 'upcoming' ? 'text-muted' : ''}`}>
                  {item.title}
                </p>
                <p className="text-xs text-muted">{item.date}</p>
              </div>
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                item.status === 'done' ? 'bg-green-500/10 text-green-400' :
                item.status === 'progress' ? 'bg-blue-500/10 text-blue-400' :
                'bg-white/[0.06] text-muted'
              }`}>
                {item.status === 'done' ? 'Released' : item.status === 'progress' ? 'In Progress' : 'Planned'}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            href="/roadmap"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-purple-400 transition-colors"
          >
            View full roadmap
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
