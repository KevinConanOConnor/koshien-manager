'use client';

import { useRouter, usePathname } from 'next/navigation';
import { Home, Users, Calendar, BarChart } from 'lucide-react';
import clsx from 'clsx';

const navItems = [
  { label: 'Dashboard', href: '/dashboard', icon: Home },
  { label: 'Player Test', href: '/player', icon: Users },
  { label: 'Hitters', href: '/hitters', icon: BarChart },
  { label: 'test', href: '/test', icon: Calendar },
];

export default function SideNav() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <aside className="w-56 h-screen bg-[#111827] text-white flex flex-col py-6 px-4 border-r border-gray-800 shadow-md">
      <h1 className="text-2xl font-bold mb-8 tracking-tight">
        <span className="text-amber-400">🏫</span> Kōshien Manager
      </h1>

      <nav className="flex flex-col gap-2">
        {navItems.map(({ label, href, icon: Icon }) => {
          const active = pathname.startsWith(href);

          return (
            <button
              key={href}
              onClick={() => router.push(href)}
              className={clsx(
                'flex items-center gap-3 px-4 py-2 rounded-lg transition-all',
                'hover:bg-gray-800 hover:text-amber-400',
                active
                  ? 'bg-gray-800 text-amber-400 font-semibold'
                  : 'text-gray-300'
              )}
            >
              <Icon size={18} />
              <span className="text-sm">{label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
