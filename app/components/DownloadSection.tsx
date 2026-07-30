'use client'

import { motion } from 'framer-motion'
import { Download, Apple, FileText, ChevronRight } from 'lucide-react'
import Link from 'next/link'

export default function DownloadSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 gradient-bg pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Get FileSight
          </h2>
          <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
            Download the latest version for your platform.
          </p>
        </motion.div>

        <div className="max-w-lg mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 gradient-border"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="size-14 rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                <Apple className="size-7 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">macOS</h3>
                <p className="text-sm text-muted">Version 1.0.0 &middot; 24.5 MB</p>
              </div>
            </div>

            <Link
              href="/download"
              className="group relative flex items-center justify-center gap-3 w-full py-4 text-base font-medium rounded-2xl bg-primary text-primary-foreground overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] mb-4"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              <Download className="size-5 relative z-10" />
              <span className="relative z-10">Download for macOS</span>
            </Link>

            <div className="space-y-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 text-sm font-medium rounded-xl glass glass-hover transition-all"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="size-4"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
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

            <div className="mt-6 pt-6 border-t border-white/[0.06]">
              <p className="text-sm text-muted mb-3">Other platforms</p>
              <div className="flex items-center gap-3">
                <span className="flex-1 px-4 py-2.5 text-sm text-muted rounded-xl bg-white/[0.04] border border-white/[0.06] text-center cursor-not-allowed opacity-50">
                  Windows (Coming Soon)
                </span>
                <span className="flex-1 px-4 py-2.5 text-sm text-muted rounded-xl bg-white/[0.04] border border-white/[0.06] text-center cursor-not-allowed opacity-50">
                  Linux (Coming Soon)
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
