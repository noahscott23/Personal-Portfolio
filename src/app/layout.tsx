import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
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
  title: "Noah Scott Portfolio",
  description: "Computer Science Projects and Profile",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-black text-white`}>
        {/* Logo in top left */}
        <div className="fixed top-4 left-4 z-50">
          <Image
            src="/NS-logo.png"
            alt="Noah Scott Logo"
            width={250}
            height={200}
          />
        </div>
        
        {/* Side Navigation */}
        <div className="sidenav fixed left-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-6">
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
        </div>
        
        <div className="min-h-screen bg-black">{children}</div>
      </body>
    </html>
  );
}









