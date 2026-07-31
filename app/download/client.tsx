'use client'

import { motion } from 'framer-motion'
import { Download, Apple, FileText, ChevronRight, Star, Shield, Cpu, Zap, CheckCircle } from 'lucide-react'
import Link from 'next/link'

const stats = [
  { icon: Star, label: 'Open Source', description: 'MIT License' },
  { icon: Shield, label: 'Privacy First', description: 'No data leaves your device' },
  { icon: Zap, label: 'Fast Performance', description: 'Native speed' },
]

export default function DownloadPageClient() {
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
              Download FileSight
            </h1>
            <p className="mt-4 text-lg text-muted">
              Free. Open source. Your files never leave your computer.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="absolute inset-0 gradient-bg pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-lg mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass rounded-2xl p-8 sm:p-10 gradient-border"
            >
              <div className="flex items-center gap-5 mb-8">
                <div className="size-16 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                  <Apple className="size-8 text-white" />
                </div>
                <div>
                  <h2 className="text-xl font-bold">macOS</h2>
                  <p className="text-sm text-muted">Version 1.0.0</p>
                  <p className="text-sm text-muted">24.5 MB &middot; macOS 13+</p>
                </div>
              </div>

              <Link
                href="#"
                className="group relative flex items-center justify-center gap-3 w-full py-4 text-base font-medium rounded-2xl bg-primary text-primary-foreground overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] mb-4"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Download className="size-5 relative z-10" />
                <span className="relative z-10">Download for macOS</span>
              </Link>

              <div className="space-y-3">
                <a
                  href="https://github.com/MarkCoder1/filesight/releases/tag/v1.0.0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 text-sm font-medium rounded-xl glass glass-hover transition-all"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="size-4"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                  Download from GitHub Releases
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center gap-2 w-full py-3 text-sm text-muted hover:text-foreground rounded-xl transition-colors hover:bg-white/[0.04]"
                >
                  <FileText className="size-4" />
                  Release Notes
                  <ChevronRight className="size-3" />
                </a>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.06] space-y-4">
                <p className="text-sm font-medium">Also available on</p>
                <div className="flex items-center gap-3">

                  <Link
                    href="/"
                    className="flex-1 px-4 py-3 text-sm text-muted rounded-xl bg-white/[0.04] border border-white/[0.06] text-center transition-all duration-200 hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white hover:border-transparent"
                  >
                    Windows 1.0.0 ARM64 (.exe)
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 flex items-center justify-center gap-6"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="flex items-center gap-1.5 justify-center text-sm text-muted">
                    <stat.icon className="size-4 text-primary" />
                    <span className="font-medium text-foreground">{stat.label}</span>
                  </div>
                  <p className="text-xs text-muted mt-0.5">{stat.description}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl font-bold tracking-tight mb-8 text-center">System Requirements</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { label: 'Operating System', value: 'macOS 13 (Ventura) or later' },
                { label: 'Architecture', value: 'Apple Silicon or Intel' },
                { label: 'Storage', value: '100 MB available space' },
                { label: 'Memory', value: '512 MB RAM minimum' },
              ].map((req) => (
                <div key={req.label} className="glass rounded-xl p-4">
                  <p className="text-xs text-muted mb-1">{req.label}</p>
                  <p className="text-sm font-medium">{req.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
