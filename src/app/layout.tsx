import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'NothingBox Labs',
  description: 'Next-generation web applications ecosystem engineered with Apple-inspired precision and browser-native performance.',
  openGraph: {
    title: 'NothingBox Labs',
    description: 'Next-generation web applications ecosystem engineered with Apple-inspired precision and browser-native performance.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
