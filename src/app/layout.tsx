import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import { twMerge } from 'tailwind-merge';

const dm_sans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Light Saas Landing Page',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={twMerge(dm_sans.className, 'antialiased bg-main-background')}
      >
        {children}
      </body>
    </html>
  );
}
