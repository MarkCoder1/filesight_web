import type { Metadata } from "next";
import PrivacyPageClient from "./client";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "FileSight is privacy first. Your files never leave your computer. No telemetry, no accounts, no cloud, no data collection.",
  openGraph: {
    title: "Privacy — FileSight",
    description:
      "FileSight is privacy first. Your files never leave your computer. No telemetry, no accounts, no cloud, no data collection.",
  },
};

export default function PrivacyPage() {
  return <PrivacyPageClient />;
}
