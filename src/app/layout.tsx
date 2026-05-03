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
  title: "Asif Liton | Senior Software Engineer",
  description:
    "Portfolio for Asif Liton, a senior software engineer with 7 years of experience in React, TypeScript, and PHP.",
  keywords: [
    "Asif Liton",
    "Senior Software Engineer",
    "React developer",
    "TypeScript developer",
    "PHP developer",
    "Next.js portfolio",
  ],
  authors: [{ name: "Asif Liton" }],
  openGraph: {
    title: "Asif Liton | Senior Software Engineer",
    description:
      "React, TypeScript, and PHP portfolio focused on practical product engineering.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
