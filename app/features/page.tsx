import type { Metadata } from "next";
import FeaturesPageClient from "./client";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore all FileSight features: Duplicate Finder 2.0, Download Organization Assistant, Preview Panel, Fast Scanning, Privacy First, and more.",
  openGraph: {
    title: "Features — FileSight",
    description:
      "Explore all FileSight features: Duplicate Finder 2.0, Download Organization Assistant, Preview Panel, Fast Scanning, and more.",
  },
};

export default function FeaturesPage() {
  return <FeaturesPageClient />;
}
