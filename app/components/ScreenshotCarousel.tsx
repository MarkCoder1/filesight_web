'use client'

import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react'
import Image from 'next/image'

const screenshots = [
  { src: '/screenshots/home.png', alt: 'FileSight Home Dashboard', label: 'Home Dashboard' },
  { src: '/screenshots/dashboard.png', alt: 'FileSight Scan Results', label: 'Scan Results' },
  { src: '/screenshots/duplicates.png', alt: 'FileSight Duplicate Finder', label: 'Duplicate Finder' },
  { src: '/screenshots/history.png', alt: 'FileSight Scan History', label: 'Scan History' },
  { src: '/screenshots/settings.png', alt: 'FileSight Settings', label: 'Settings' },
]

export default function ScreenshotCarousel() {
  const [current, setCurrent] = useState(0)
  const [lightbox, setLightbox] = useState<number | null>(null)
  const [direction, setDirection] = useState(0)

  const navigate = useCallback((dir: number) => {
    setDirection(dir)
    setCurrent((prev) => (prev + dir + screenshots.length) % screenshots.length)
  }, [])

  const openLightbox = (index: number) => setLightbox(index)
  const closeLightbox = () => setLightbox(null)

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
            See it in action
          </h2>
          <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
            A clean, intuitive interface built for understanding your files at a glance.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute inset-y-0 left-0 right-0 flex items-center justify-between pointer-events-none z-10 px-2">
            <button
              onClick={() => navigate(-1)}
              className="pointer-events-auto size-10 rounded-full glass flex items-center justify-center text-muted hover:text-foreground transition-all hover:bg-white/[0.1]"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              onClick={() => navigate(1)}
              className="pointer-events-auto size-10 rounded-full glass flex items-center justify-center text-muted hover:text-foreground transition-all hover:bg-white/[0.1]"
              aria-label="Next screenshot"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>

          <div className="overflow-hidden rounded-2xl glass gradient-border">
            <div className="relative aspect-video">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 100 : -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -100 : 100 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="absolute inset-0"
                >
                  <Image
                    src={screenshots[current].src}
                    alt={screenshots[current].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 896px) 100vw, 896px"
                  />
                </motion.div>
              </AnimatePresence>

              <button
                onClick={() => openLightbox(current)}
                className="absolute top-4 right-4 size-8 rounded-full glass flex items-center justify-center text-muted hover:text-foreground transition-all z-10"
                aria-label="Enlarge screenshot"
              >
                <Maximize2 className="size-4" />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center gap-2 mt-6">
            {screenshots.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                className={`size-2 rounded-full transition-all ${
                  i === current ? 'bg-primary w-6' : 'bg-white/[0.12] hover:bg-white/[0.2]'
                }`}
                aria-label={`Go to screenshot ${i + 1}`}
              />
            ))}
          </div>

          <p className="text-center text-sm text-muted mt-3">
            {screenshots[current].label}
          </p>
        </div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 size-10 rounded-full glass flex items-center justify-center text-muted hover:text-foreground transition-all z-10"
              aria-label="Close"
            >
              <X className="size-5" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full aspect-video rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={screenshots[lightbox].src}
                alt={screenshots[lightbox].alt}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 1024px"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
