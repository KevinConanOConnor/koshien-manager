'use client';

import { useRouter, usePathname } from 'next/navigation';
import clsx from 'clsx';

const navItems = [
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Player Test', href: '/player' },
  { label: 'Scouting', href: '/scouting' },
  { label: 'Schedule', href: '/schedule' },
];

export default function SideNav() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <aside className="w-48 h-screen bg-gray-900 text-white flex flex-col p-4">
      <h1 className="text-xl font-bold mb-6">🏫 Kōshien Manager</h1>

      {navItems.map((item) => (
        <button
          key={item.href}
          onClick={() => router.push(item.href)}
          className={clsx(
            'text-left px-3 py-2 rounded hover:bg-gray-700 transition',
            pathname.startsWith(item.href) ? 'bg-gray-700 font-semibold' : ''
          )}
        >
          {item.label}
        </button>
      ))}
    </aside>
  );
}
