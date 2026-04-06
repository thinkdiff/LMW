"use client";

import type { Metadata } from "next";
import "./globals.css";
import { CustomCursor } from "@/components/animations/CustomCursor";
import { GrainOverlay } from "@/components/animations/GrainOverlay";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LiveTicker } from "@/components/layout/LiveTicker";
import { PageTransition } from "@/components/animations/PageTransition";
import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&family=JetBrains+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-obsidian text-platinum antialiased">
        {/* Luxury grain overlay */}
        <GrainOverlay />

        {/* Custom cursor */}
        <CustomCursor />

        {/* Smooth scroll wrapper */}
        <SmoothScroll>
          {/* Live ticker at very top */}
          <LiveTicker />

          {/* Main navigation */}
          <Navbar />

          {/* Page content with transitions */}
          <PageTransition>
            <main>{children}</main>
          </PageTransition>

          {/* Footer */}
          <Footer />
        </SmoothScroll>

        <Toaster
          theme="dark"
          toastOptions={{
            style: {
              background: "#0D0D1A",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#E8E8F0",
            },
          }}
        />
      </body>
    </html>
  );
}
