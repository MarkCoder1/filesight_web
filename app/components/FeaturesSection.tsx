'use client'

import { motion } from 'framer-motion'
import {
  Copy,
  FolderInput,
  Eye,
  ExternalLink,
  Zap,
  Clock,
  Shield,
  Scan,
  FileSearch,
  Hash,
  BarChart3,
  Tags,
} from 'lucide-react'
import Link from 'next/link'

const features = [
  {
    icon: Copy,
    title: 'Duplicate Finder 2.0',
    description: 'SHA-256 hashing, similarity detection, confidence scoring, and smart suggestions for which copy to keep.',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: FolderInput,
    title: 'Download Organization',
    description: 'Automatically categorizes files into Documents, Images, Videos, Audio, Archives, Applications, and Code.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Eye,
    title: 'Preview Panel',
    description: 'Preview images, PDFs, video, audio, text files and more without opening separate applications.',
    color: 'from-violet-500 to-purple-500',
  },
  {
    icon: ExternalLink,
    title: 'Open in Finder',
    description: 'Quickly jump to any file location in Finder or File Explorer with a single click.',
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: Zap,
    title: 'Fast Local Scanning',
    description: 'Leverages native system APIs for high-speed file scanning. No indexing delays.',
    color: 'from-amber-500 to-orange-500',
  },
  {
    icon: Clock,
    title: 'Scan History',
    description: 'Review past scans, track changes over time, and compare results between sessions.',
    color: 'from-sky-500 to-indigo-500',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Everything runs locally. No telemetry, no uploads, no accounts. Your files never leave your computer.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Scan,
    title: 'Smart Folder Scanning',
    description: 'Intelligently scan entire volumes or specific folders with filtering and exclusion rules.',
    color: 'from-red-500 to-pink-500',
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 gradient-bg pointer-events-none" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Everything you need to manage your files
          </h2>
          <p className="mt-4 text-lg text-muted max-w-2xl mx-auto">
            Powerful tools that work together to help you understand, organize, and clean your files.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 h-full transition-all duration-300 hover:border-primary/20 hover:shadow-[0_0_30px_rgba(168,85,247,0.05)] hover:-translate-y-1">
                <div className={`size-10 rounded-xl bg-gradient-to-br ${feature.color} p-2.5 mb-4`}>
                  <feature.icon className="size-full text-white" />
                </div>
                <h3 className="text-base font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{feature.description}</p>
              </div>
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
            href="/features"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-purple-400 transition-colors"
          >
            <FileSearch className="size-4" />
            Explore all features
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
