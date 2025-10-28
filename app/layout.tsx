import type { Metadata } from 'next';
import { Inter, DM_Serif_Display } from 'next/font/google';
import './index.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const dmSerifDisplay = DM_Serif_Display({ 
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dm-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Indieverse.mov - Stories Beyond the Shoreline',
  description: 'A curated collection of independent films that explore the human condition, crafted by visionary storytellers pushing the boundaries of cinematic art.',
  keywords: ['independent films', 'cinema', 'art', 'storytelling', 'indieverse'],
  authors: [{ name: 'Indieverse.mov' }],
  openGraph: {
    title: 'Indieverse.mov - Stories Beyond the Shoreline',
    description: 'A curated collection of independent films that explore the human condition, crafted by visionary storytellers pushing the boundaries of cinematic art.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Indieverse.mov',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Indieverse.mov - Stories Beyond the Shoreline',
    description: 'A curated collection of independent films that explore the human condition, crafted by visionary storytellers pushing the boundaries of cinematic art.',
  },
  robots: {
    index: true,
    follow: true,
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
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`${inter.variable} ${dmSerifDisplay.variable} font-sans`}>{children}</body>
    </html>
  );
}
