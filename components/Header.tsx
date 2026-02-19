import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-200">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl text-slate-900 tracking-tight flex items-center gap-2">
          <span className="bg-slate-900 text-white w-8 h-8 flex items-center justify-center rounded-lg">B</span>
          <span>Blog</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            Home
          </Link>
          <Link href="/authors" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            Authors
          </Link>
          <Link href="/categories" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
            Categories
          </Link>
        </nav>

        <button className="md:hidden p-2 text-slate-600">
          <Menu className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
}