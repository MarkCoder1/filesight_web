'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Download, Shield, Cpu, Zap, Globe, Star } from 'lucide-react'
import Link from 'next/link'

const badges = [
  { icon: Star, label: 'Open Source' },
  { icon: Shield, label: 'Privacy First' },
  { icon: Cpu, label: 'Local Processing' },
  { icon: Zap, label: 'Free' },
  { icon: Globe, label: 'Desktop App' },
]

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const onMouseMove = (e: MouseEvent) => {
      const { left, top, width, height } = container.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5
      container.style.setProperty('--mouse-x', String(x))
      container.style.setProperty('--mouse-y', String(y))
    }

    container.addEventListener('mousemove', onMouseMove)
    return () => container.removeEventListener('mousemove', onMouseMove)
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 gradient-bg pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(168,85,247,0.1) 0%, transparent 50%)',
          transform: 'translate(calc(var(--mouse-x, 0) * 30px), calc(var(--mouse-y, 0) * 30px))',
          transition: 'transform 0.2s ease-out',
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-muted mb-8">
                <span className="size-2 rounded-full bg-green-500 animate-pulse" />
                v1.0.0 now available
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]"
            >
              Understand{' '}
              <span className="text-gradient">your files.</span>
              <br />
              Not just your folders.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-muted leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              FileSight helps you find duplicate files, organize downloads, preview documents and understand your storage — entirely on your device.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/download"
                className="group relative inline-flex items-center gap-2.5 px-8 py-4 text-base font-medium rounded-2xl bg-primary text-primary-foreground overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Download className="size-5 relative z-10" />
                <span className="relative z-10">Download FileSight</span>
              </Link>
              <a
                href="https://github.com/MarkCoder1/filesight"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-8 py-4 text-base font-medium rounded-2xl glass glass-hover transition-all"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="size-5"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                View on GitHub
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-3 justify-center lg:justify-start"
            >
              {badges.map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-muted rounded-full bg-white/[0.04] border border-white/[0.06]"
                >
                  <badge.icon className="size-3.5" />
                  {badge.label}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/20 via-transparent to-blue-500/20 rounded-3xl blur-3xl" />
            <div className="relative rounded-2xl overflow-hidden glass gradient-border shadow-2xl">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.06]">
                <div className="size-3 rounded-full bg-red-500/80" />
                <div className="size-3 rounded-full bg-yellow-500/80" />
                <div className="size-3 rounded-full bg-green-500/80" />
                <div className="ml-4 flex-1 max-w-[200px] h-6 rounded-md bg-white/[0.06] flex items-center px-3">
                  <span className="text-xs text-muted">~/Documents</span>
                </div>
              </div>
              <div className="p-1">
                <div className="bg-black/40 rounded-lg p-4 space-y-3">
                  {[
                    { name: 'project_report.pdf', size: '2.4 MB', type: 'PDF' },
                    { name: 'photo_2024.jpg', size: '4.1 MB', type: 'Image' },
                    { name: 'duplicate_photo.jpg', size: '4.1 MB', type: 'Image', dup: true },
                    { name: 'presentation.pptx', size: '8.7 MB', type: 'PPT' },
                    { name: 'notes.txt', size: '12 KB', type: 'Text' },
                    { name: 'duplicate_photo_copy.jpg', size: '4.1 MB', type: 'Image', dup: true },
                  ].map((file, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-3 p-2 rounded-lg transition-colors ${
                        file.dup ? 'bg-red-500/10 border border-red-500/20' : 'hover:bg-white/[0.04]'
                      }`}
                    >
                      <div className={`size-8 rounded-lg flex items-center justify-center ${
                        file.type === 'PDF' ? 'bg-red-500/20 text-red-400' :
                        file.type === 'Image' ? 'bg-blue-500/20 text-blue-400' :
                        file.type === 'PPT' ? 'bg-orange-500/20 text-orange-400' :
                        'bg-green-500/20 text-green-400'
                      }`}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                          <polyline points="14 2 14 8 20 8" />
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{file.name}</p>
                        <p className="text-xs text-muted">{file.size}</p>
                      </div>
                      {file.dup && (
                        <span className="text-xs font-medium text-red-400 bg-red-500/10 px-2 py-0.5 rounded-full">
                          Duplicate
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-4 py-3 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-xs text-muted">4 duplicates found</span>
                <span className="text-xs font-medium text-primary">Review & Clean</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
