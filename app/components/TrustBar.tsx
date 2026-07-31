'use client'

import { motion } from 'framer-motion'
import { Shield, Cpu, Zap, Monitor, Globe, Lock } from 'lucide-react'

const trusts = [
  { icon: Lock, label: 'Open Source' },
  { icon: Shield, label: 'No Telemetry' },
  { icon: Cpu, label: 'Runs Locally' },
  { icon: Zap, label: 'Fast Scanning' },
  { icon: Monitor, label: 'Modern Desktop App' },
  { icon: Globe, label: 'macOS & Windows' },
]

export default function TrustBar() {
  return (
    <section className="py-12 border-y border-white/[0.06]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {trusts.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center gap-2 text-sm text-muted"
            >
              <item.icon className="size-4 text-primary" />
              <span>{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
