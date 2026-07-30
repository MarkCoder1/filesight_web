import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "FileSight — Understand Your Files",
    template: "%s — FileSight",
  },
  description:
    "FileSight helps you find duplicate files, organize downloads, preview documents, and understand your storage — entirely on your device.",
  keywords: [
    "file management",
    "duplicate finder",
    "file organizer",
    "download organizer",
    "file preview",
    "macOS app",
    "open source",
  ],
  authors: [{ name: "FileSight" }],
  creator: "FileSight",
  publisher: "FileSight",
  metadataBase: new URL("https://filesight.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://filesight.app",
    siteName: "FileSight",
    title: "FileSight — Understand Your Files",
    description:
      "Find duplicates, organize downloads, preview documents. Everything runs locally on your device.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "FileSight",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FileSight — Understand Your Files",
    description:
      "Find duplicates, organize downloads, preview documents. Everything runs locally on your device.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
