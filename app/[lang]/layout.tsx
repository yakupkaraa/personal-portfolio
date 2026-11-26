import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { MotionProvider } from "@/components/layout/MotionProvider";
import { AmbientBackground } from "@/components/layout/AmbientBackground";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Yakup Kara | Frontend Developer",
  description: "Personal portfolio of Yakup Kara, Frontend Developer.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  return (
    <html lang={lang} suppressHydrationWarning>
      <body
        className={`${syne.variable} ${inter.variable} font-sans antialiased`}
      >
        <ThemeProvider>
          <MotionProvider>
            <div className="px-3 py-3 sm:px-10 sm:py-12 md:pl-28">
              <div className="relative isolate mx-auto max-w-[1360px] rounded-[28px] bg-background p-3 sm:rounded-[44px] sm:p-6">
                {/* Ambient background: warm glow + dust + orbits (light), stars (dark) */}
                <AmbientBackground />
                {/* Paper grain (light, large screens with a mouse only). Static tile, no blend mode. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/img/paper.svg"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 paper-overlay z-[5] h-full w-full rounded-[inherit]"
                />
                <Header lang={lang as "en" | "tr"} />
                <main className="min-h-screen">{children}</main>
                <Footer lang={lang as "en" | "tr"} />
              </div>
            </div>
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
