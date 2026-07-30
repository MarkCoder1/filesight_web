import type { Metadata } from "next";
import DownloadPageClient from "./client";

export const metadata: Metadata = {
  title: "Download",
  description:
    "Download FileSight for macOS. Free, open source, privacy-first file management. Version 1.0.0 now available.",
  openGraph: {
    title: "Download — FileSight",
    description:
      "Download FileSight for macOS. Free, open source, privacy-first file management.",
  },
};

export default function DownloadPage() {
  return <DownloadPageClient />;
}
