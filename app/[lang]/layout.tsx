import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/layout/ThemeProvider";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
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
          <div className="px-3 py-3 sm:px-10 sm:py-12 md:pl-28">
            <div className="relative isolate mx-auto max-w-[1360px] rounded-[28px] bg-background p-3 sm:rounded-[44px] sm:p-6">
              {/* Ambient background effects: warm glow + dust (light), stars (dark) */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 -z-10 overflow-hidden rounded-[inherit]"
              >
                <div className="absolute inset-0 dark:hidden [background:radial-gradient(900px_520px_at_100%_0%,rgba(244,194,138,0.30),transparent_70%),radial-gradient(700px_480px_at_0%_38%,rgba(255,226,190,0.32),transparent_70%),radial-gradient(800px_520px_at_100%_72%,rgba(244,194,138,0.20),transparent_70%)]" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/img/bg-day.svg" alt="" className="absolute inset-0 h-full w-full dark:hidden" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/img/bg-night.svg" alt="" className="absolute inset-0 hidden h-full w-full dark:block" />
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/img/paper.svg"
                alt=""
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-[5] h-full w-full rounded-[inherit] mix-blend-multiply dark:hidden"
              />
              <Header lang={lang as "en" | "tr"} />
              <main className="min-h-screen">{children}</main>
              <Footer lang={lang as "en" | "tr"} />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}