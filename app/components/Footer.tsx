import { ExternalLink } from 'lucide-react'
import Link from 'next/link'

const footerLinks = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '/features' },
      { label: 'Roadmap', href: '/roadmap' },
      { label: 'Download', href: '/download' },
      { label: 'Privacy', href: '/privacy' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'Release Notes', href: '#' },
      { label: 'FAQ', href: '/#faq' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'GitHub', href: 'https://github.com' },
      { label: 'Issues', href: 'https://github.com' },
      { label: 'Discussions', href: 'https://github.com' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-black/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 group mb-4">
              <div className="size-8 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <span className="font-semibold text-lg tracking-tight">FileSight</span>
            </Link>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              Understand your files. Not just your folders. Open-source, privacy-first file management.
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="size-5"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
            </div>
          </div>
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-medium text-foreground mb-4">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('http') ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted hover:text-foreground transition-colors inline-flex items-center gap-1"
                      >
                        {link.label}
                        <ExternalLink className="size-3" />
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-sm text-muted hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} FileSight. Open source under the MIT License.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted">
            <Link href="/privacy" className="hover:text-foreground transition-colors">
              Privacy
            </Link>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              License
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
