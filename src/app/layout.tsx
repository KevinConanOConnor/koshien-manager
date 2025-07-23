// src/app/layout.tsx
import './globals.css';
import SideNav from '@/components/SideNav';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kōshien Manager',
  description: 'High school baseball simulation game',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen bg-gray-100 text-gray-900">
        <SideNav />
        <main className="flex-1 p-6 overflow-y-auto">
          {children}
        </main>
      </body>
    </html>
  );
}
