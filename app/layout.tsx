import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sahil Chahal - Senior Full Stack Developer | Node.js & NestJS Expert",
  description:
    "Senior Full Stack Developer specializing in Node.js, NestJS, Laravel, Next.js, and AWS cloud services. Expert in building scalable web applications and cloud-native solutions.",
  keywords: [
    "Sahil Chahal",
    "Full Stack Developer",
    "Node.js Developer",
    "NestJS Expert",
    "Laravel Developer",
    "Next.js Developer",
    "AWS Cloud Services",
    "React Developer",
    "TypeScript Developer",
    "Senior Software Engineer",
    "Web Developer",
    "Cloud Native Applications",
    "Scalable Applications",
    "Matrix Marketers",
    "Webroot Technologies",
  ],
  authors: [{ name: "Sahil Chahal", url: "https://sahil-chahal.vercel.app" }],
  creator: "Sahil Chahal",
  publisher: "Sahil Chahal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sahil-chahal.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sahil-chahal.vercel.app",
    title: "Sahil Chahal - Senior Full Stack Developer | Node.js & NestJS Expert",
    description:
      "Senior Full Stack Developer specializing in Node.js, NestJS, Laravel, Next.js, and AWS cloud services. Expert in building scalable web applications and cloud-native solutions.",
    siteName: "Sahil Chahal Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sahil Chahal - Senior Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahil Chahal - Senior Full Stack Developer | Node.js & NestJS Expert",
    description:
      "Senior Full Stack Developer specializing in Node.js, NestJS, Laravel, Next.js, and AWS cloud services.",
    images: ["/og-image.png"],
    creator: "@sahilchahal",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.png" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1f2937" />
        <meta name="msapplication-TileColor" content="#1f2937" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
