'use client'

import { motion } from 'framer-motion'
import { Shield, CloudOff, Eye, UserX, Lock, Cpu, CheckCircle, FileCheck } from 'lucide-react'

const guarantees = [
  { icon: CloudOff, title: 'No Cloud', description: 'FileSight does not use any cloud services. Everything runs on your computer.' },
  { icon: Eye, title: 'No Uploads', description: 'Your files never leave your device. We have no way to access them.' },
  { icon: UserX, title: 'No Telemetry', description: 'We do not collect usage data, analytics, or crash reports.' },
  { icon: Lock, title: 'No Accounts', description: 'No sign-up, no login, no user profiles. Just download and use.' },
  { icon: Cpu, title: 'Local Processing', description: 'All scanning, hashing, previewing, and analysis happens on your machine.' },
  { icon: FileCheck, title: 'Open Source', description: 'The entire codebase is public on GitHub. Fully auditable by anyone.' },
]

export default function PrivacyPageClient() {
  return (
    <div className="pt-24">
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-muted mb-6">
              <Shield className="size-4 text-primary" />
              Privacy
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              Your files never leave{' '}
              <span className="text-gradient">your computer.</span>
            </h1>
            <p className="mt-6 text-lg text-muted max-w-2xl mx-auto leading-relaxed">
              Privacy isn&rsquo;t a feature — it&rsquo;s a fundamental right. FileSight is designed from the ground up to respect your privacy. Every operation runs locally on your device. There is no cloud, no telemetry, and no data collection of any kind.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {guarantees.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="glass rounded-2xl p-6 transition-all hover:border-primary/20"
              >
                <div className="size-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="size-5 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="absolute inset-0 gradient-bg pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto glass rounded-2xl p-8 sm:p-12 gradient-border"
          >
            <h2 className="text-2xl font-bold tracking-tight mb-6">Privacy FAQ</h2>
            <div className="space-y-6">
              {[
                { q: 'Does FileSight need internet access?', a: 'No. FileSight works completely offline. An internet connection is only needed for downloading the app and receiving updates.' },
                { q: 'Do you collect crash reports?', a: 'No. We do not collect any crash reports, error logs, or diagnostic data. If you encounter issues, you can manually submit a bug report on GitHub.' },
                { q: 'Is my data used for training AI?', a: 'No. Your files and usage patterns are never used for any kind of training, analysis, or improvement on our end.' },
                { q: 'Can I verify this?', a: 'Yes. FileSight is fully open source. You can inspect the source code, build from source, and audit network activity to confirm there are no connections to remote servers.' },
              ].map((item) => (
                <div key={item.q}>
                  <h3 className="font-medium mb-1">{item.q}</h3>
                  <p className="text-sm text-muted">{item.a}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
