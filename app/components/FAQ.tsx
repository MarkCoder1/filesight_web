'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Search } from 'lucide-react'

const faqs = [
  {
    q: 'Is FileSight free?',
    a: 'Yes, FileSight is completely free and open source. There are no paid plans, subscriptions, or hidden fees. It is released under the MIT License.',
  },
  {
    q: 'Is it open source?',
    a: 'Yes! FileSight is fully open source. You can view the source code, contribute, report issues, or fork the project on GitHub.',
  },
  {
    q: 'Does it upload my files?',
    a: 'No. FileSight processes everything entirely on your computer. Your files never leave your device. No cloud, no uploads, no data collection.',
  },
  {
    q: 'How are duplicates detected?',
    a: 'FileSight uses a multi-layered approach: files are first grouped by size, then each file is hashed using SHA-256 for exact comparison. We also analyze filename similarity and file extensions to catch near-duplicates. Every match gets a confidence score.',
  },
  {
    q: 'Does it delete files automatically?',
    a: 'No. FileSight never deletes anything automatically. It will show you duplicates and suggest which copy to keep, but you always have full control over what gets deleted.',
  },
  {
    q: 'Can I undo changes?',
    a: 'Deleted files are moved to Trash (macOS) or Recycle Bin (Windows) rather than being permanently deleted, giving you a chance to recover them if needed.',
  },
  {
    q: 'What file types can I preview?',
    a: 'The preview panel supports images, PDFs, video files, audio files, and text files. For unsupported file types, we show file metadata and information.',
  },
  {
    q: 'Which platforms are supported?',
    a: 'FileSight is currently available on macOS and Windows.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
            Everything you need to know about FileSight.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className="glass rounded-xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex items-center justify-between w-full p-5 text-left transition-colors hover:bg-white/[0.02]"
                aria-expanded={openIndex === i}
              >
                <span className="text-sm font-medium pr-4">{faq.q}</span>
                <ChevronDown
                  className={`size-4 text-muted shrink-0 transition-transform duration-200 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm text-muted leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
