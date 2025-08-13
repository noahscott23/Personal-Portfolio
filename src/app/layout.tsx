import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Noah Scott Portfolio",
  description: "Computer Science Projects and Profile",
  icons: {
    icon: "/NS-logo.png",
    shortcut: "/NS-logo.png",
    apple: "/NS-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon-logo.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon-logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon-logo.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-black text-white`}>
        {/* Logo for mobile */}
        <div className="fixed top-4 left-4 z-50 md:hidden w-25 h-25">
          <Image src="/NS-logo.png" alt="Noah Scott Logo" width={100} height={100} />
        </div>
        
        {/* Logo for desktop */}
        <div className="hidden md:block fixed top-4 left-4 z-50">
          <Image
            src="/NS-logo.png"
            alt="Noah Scott Logo"
            width={250}
            height={200}
          />
        </div>
        
        {/* Side Navigation */}
        <nav className="sidenav hidden md:flex fixed left-8 top-1/2 transform -translate-y-1/2 z-50 flex-col gap-6" aria-label="Side navigation">
          <a 
            href="#"
            className="hvr-grow-rotate text-white hover:text-blue-400 font-light text-lg transition-all duration-300 hover:scale-110 hover:rotate-3 cursor-pointer"
            data-dest="home"
          >
            Home
          </a>
          <a 
            href="#"
            className="hvr-grow-rotate text-white hover:text-blue-400 font-light text-lg transition-all duration-300 hover:scale-110 hover:rotate-3 cursor-pointer"
            data-dest="about"
          >
            About
          </a>
          <a 
            href="#"
            className="hvr-grow-rotate text-white hover:text-blue-400 font-light text-lg transition-all duration-300 hover:scale-110 hover:rotate-3 cursor-pointer"
            data-dest="projects"
          >
            Projects
          </a>
          <a 
            href="#"
            className="hvr-grow-rotate text-white hover:text-blue-400 font-light text-lg transition-all duration-300 hover:scale-110 hover:rotate-3 cursor-pointer"
            data-dest="contact"
          >
            Contact
          </a>
        </nav>

        {/* mobile navigation top right */}
        <div className="flex md:hidden fixed top-4 right-4 z-50 gap-3">
          <a href="#home" data-dest="home" className="text-sm text-white hover:text-blue-400">Home</a>
          <a href="#about" data-dest="about" className="text-sm text-white hover:text-blue-400">About</a>
          <a href="#projects" data-dest="projects" className="text-sm text-white hover:text-blue-400">Projects</a>
          <a href="#contact" data-dest="contact" className="text-sm text-white hover:text-blue-400">Contact</a>
        </div>

        
        <div className="min-h-screen bg-black">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}



