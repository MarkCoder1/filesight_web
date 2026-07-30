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
  Hash,
  FolderOpen,
  FileText,
  Music,
  Image,
  Video,
  Archive,
  Code2,
  Monitor,
  CheckCircle,
} from 'lucide-react'

const categories = [
  { icon: FileText, label: 'Documents', color: 'bg-blue-500/20 text-blue-400' },
  { icon: Image, label: 'Images', color: 'bg-green-500/20 text-green-400' },
  { icon: Video, label: 'Videos', color: 'bg-purple-500/20 text-purple-400' },
  { icon: Music, label: 'Audio', color: 'bg-pink-500/20 text-pink-400' },
  { icon: Archive, label: 'Archives', color: 'bg-orange-500/20 text-orange-400' },
  { icon: Monitor, label: 'Applications', color: 'bg-cyan-500/20 text-cyan-400' },
  { icon: Code2, label: 'Code', color: 'bg-yellow-500/20 text-yellow-400' },
  { icon: FolderOpen, label: 'Other', color: 'bg-zinc-500/20 text-zinc-400' },
]

const features = [
  {
    icon: Copy,
    title: 'Duplicate Finder 2.0',
    description:
      'Find and remove duplicate files with confidence. Uses SHA-256 hashing, filename similarity analysis, extension-aware matching, and size grouping to identify both exact duplicates and near-duplicates.',
    details: [
      'SHA-256 cryptographic hashing for exact matches',
      'Similar filename detection for renamed duplicates',
      'Extension-aware matching prevents false positives',
      'File-size grouping for performance',
      'Confidence scoring for every match',
      'Suggested copy to keep based on location and metadata',
    ],
  },
  {
    icon: FolderInput,
    title: 'Download Organization Assistant',
    description:
      'Automatically categorize your downloads into the right folders. Never hunt through your Downloads folder again.',
    details: [
      'Auto-categorizes into 8 file categories',
      'Custom category rules',
      'Batch organization',
      'Preview before moving',
      'Undo support',
    ],
  },
  {
    icon: Eye,
    title: 'Preview Panel',
    description:
      'Preview files instantly without opening external applications. Supports a wide range of file formats.',
    details: [
      'Image preview with zoom',
      'PDF rendering',
      'Video playback',
      'Audio playback with waveform',
      'Text file syntax highlighting',
      'Metadata display for all files',
    ],
  },
  {
    icon: ExternalLink,
    title: 'Open in Finder',
    description:
      'Quickly locate any file in your file system. One click opens the parent folder in Finder or File Explorer with the file selected.',
  },
  {
    icon: Zap,
    title: 'Fast Local Scanning',
    description:
      'Leverages native operating system APIs for high-speed file scanning. Scan entire volumes or specific folders in seconds.',
  },
  {
    icon: Clock,
    title: 'Scan History',
    description:
      'Review your scan history, compare results between sessions, and track how your storage changes over time.',
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description:
      'Zero data leaves your computer. No telemetry, no accounts, no analytics, no cloud uploads. Every operation runs locally.',
  },
  {
    icon: Scan,
    title: 'Smart Folder Scanning',
    description:
      'Intelligently scan specific folders or entire drives. Set exclusion rules, filter by file type, and save scan profiles for quick reuse.',
  },
]

export default function FeaturesPageClient() {
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
              Features
            </h1>
            <p className="mt-4 text-lg text-muted">
              Everything you need to take control of your files.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="absolute inset-0 gradient-bg pointer-events-none" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl mx-auto">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="mb-8 last:mb-0"
              >
                <div className="glass rounded-2xl p-8 transition-all duration-300 hover:border-primary/20">
                  <div className="flex items-start gap-5">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <feature.icon className="size-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
                      <p className="text-muted leading-relaxed mb-4">{feature.description}</p>
                      {feature.details && (
                        <div className="grid sm:grid-cols-2 gap-2">
                          {feature.details.map((d) => (
                            <div key={d} className="flex items-center gap-2 text-sm text-muted">
                              <CheckCircle className="size-4 text-primary shrink-0" />
                              {d}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold tracking-tight">
              Download Organization Categories
            </h2>
            <p className="mt-4 text-lg text-muted max-w-xl mx-auto">
              Files are automatically sorted into these categories.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {categories.map((cat) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-5 text-center transition-all hover:border-primary/20 hover:-translate-y-1"
              >
                <div className={`size-10 rounded-lg ${cat.color} flex items-center justify-center mx-auto mb-3`}>
                  <cat.icon className="size-5" />
                </div>
                <p className="text-sm font-medium">{cat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
