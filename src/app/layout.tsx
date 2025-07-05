// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import Navbar from './Navbar';
import Footer from './home/Footer';

export const metadata: Metadata = {
  title: 'My App',
  description: 'My Next.js application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
