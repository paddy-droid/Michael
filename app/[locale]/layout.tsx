import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import Navbar from "@/components/Navbar";
import CookieBanner from "@/components/CookieBanner";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    metadataBase: new URL('https://researchcontrol.de'),
    title: t('title'),
    description: t('description'),
  };
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  // Await params in Next.js 15+ (if that's the version, otherwise it's direct access, but await is safe usually)
  // Actually in standard Next 14 params is not a promise, but in 15 it might be.
  // The user package.json said next 16.0.10, so I assume await is required or good practice.
  // But wait, if params is a plain object, await does nothing.
  // However, `getMessages` needs to know the locale implicitly or we pass it? 
  // getMessages() automatically reads from request locale if configured in next-intl.

  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} antialiased font-sans bg-slate-50 text-slate-800 overflow-x-hidden`}
      >
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
