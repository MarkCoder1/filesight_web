'use client'

import { motion } from 'framer-motion'
import { Shield, CloudOff, Eye, UserX, Lock, Cpu } from 'lucide-react'

const points = [
  { icon: CloudOff, label: 'No cloud', description: 'Everything runs on your machine.' },
  { icon: Eye, label: 'No uploads', description: 'Your files never leave your computer.' },
  { icon: UserX, label: 'No telemetry', description: 'We don\'t track what you do.' },
  { icon: Lock, label: 'No account', description: 'No sign-up, no login, no data collection.' },
  { icon: Cpu, label: 'Local processing', description: 'All analysis happens on-device.' },
]

export default function PrivacySection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 gradient-bg pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-muted mb-6">
              <Shield className="size-4 text-primary" />
              Privacy
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-[1.15] mb-6">
              Your files never leave{' '}
              <span className="text-gradient">your computer.</span>
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-8">
              FileSight is built with privacy as a fundamental principle. Every operation — scanning, hashing, previewing, organizing — happens entirely on your device. There is no cloud component, no data collection, and no way for your files to leave your machine.
            </p>
            <div className="space-y-4">
              {points.map((point) => (
                <div key={point.label} className="flex items-center gap-4">
                  <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <point.icon className="size-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{point.label}</p>
                    <p className="text-sm text-muted">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 rounded-3xl blur-3xl" />
            <div className="relative glass rounded-2xl p-8 gradient-border">
              <Shield className="size-12 text-primary mb-6" />
              <h3 className="text-xl font-semibold mb-4">Privacy guarantee</h3>
              <ul className="space-y-4">
                {[
                  'No internet connection required',
                  'Zero data collection',
                  'No analytics or crash reporting',
                  'No user accounts or profiles',
                  'Open source — fully auditable',
                  'All data stored locally',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-muted">
                    <span className="size-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
