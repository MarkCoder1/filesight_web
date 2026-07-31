import type { Metadata } from "next";
import RoadmapPageClient from "./client";

export const metadata: Metadata = {
  title: "Roadmap",
  description:
    "See what's coming next for FileSight: smart cleanup suggestions, AI organization, cloud drive integrations, and more.",
  openGraph: {
    title: "Roadmap — FileSight",
    description:
      "See what's coming next for FileSight: AI organization, cloud drive integrations, and more.",
  },
};

export default function RoadmapPage() {
  return <RoadmapPageClient />;
}
