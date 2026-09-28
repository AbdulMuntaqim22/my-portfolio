import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://abdulmuntaqim.dev"),
  title: "Abdul Muntaqim | Senior QA Automation Engineer",
  description:
    "Senior QA Automation Engineer specializing in Playwright, Selenium, TypeScript, C#, Java, API automation, CI/CD, and quality engineering.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Abdul Muntaqim",
    "Senior QA Automation Engineer",
    "Playwright",
    "Selenium",
    "TypeScript",
    "C#",
    "Java",
    "API automation",
    "CI/CD",
    "Test automation",
    "Quality engineering",
  ],
  openGraph: {
    title: "Abdul Muntaqim | Senior QA Automation Engineer",
    description:
      "Quality-first automation engineer building scalable UI and API test systems, CI/CD workflows, and performance validation for reliable software delivery.",
    url: "https://abdulmuntaqim.dev",
    siteName: "Abdul Muntaqim",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Muntaqim | Senior QA Automation Engineer",
    description:
      "Senior QA Automation Engineer focused on Playwright, Selenium, API testing, CI/CD, and quality engineering.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#06070B] text-slate-100">{children}</body>
    </html>
  );
}
