import type { Metadata } from 'next';
import './globals.css';
import Link from 'next/link';
import { HublyLogo } from '@/components/hubly-logo';

export const metadata: Metadata = {
  title: 'Hubly | Forum Communautaire',
  description: 'Un forum communautaire moderne pour apprendre, partager et construire ensemble.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className="dark">
      <body className="min-h-screen bg-slate-950 text-slate-100 antialiased">
        <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.2),_transparent_35%),linear-gradient(180deg,#020817_0%,#0f172a_100%)]">
          <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
              <Link href="/" className="flex items-center gap-3" aria-label="Hubly home">
                <HublyLogo compact className="h-11 w-11" />
                <div>
                  <div className="text-xl font-black tracking-tight text-white">Hubly</div>
                  <div className="text-[10px] uppercase tracking-[0.24em] text-slate-400">community</div>
                </div>
              </Link>

              <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
                <Link href="/" className="transition hover:text-white">Accueil</Link>
                <Link href="/forum" className="transition hover:text-white">Forum</Link>
                <Link href="/create" className="transition hover:text-white">Créer un sujet</Link>
                <Link href="/admin" className="transition hover:text-white">Modération</Link>
              </nav>

              <div className="flex items-center gap-3">
                <Link href="/forum" className="hidden rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-sky-500 hover:text-white sm:inline-flex">
                  Explorer
                </Link>
                <Link href="/create" className="inline-flex rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-sky-400">
                  Rejoindre
                </Link>
              </div>
            </div>
          </header>

          {children}
        </div>
      </body>
    </html>
  );
}
