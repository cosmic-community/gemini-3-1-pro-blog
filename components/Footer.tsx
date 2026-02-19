import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-slate-900 mb-4">Blog</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              A modern blog built with Next.js and Cosmic CMS. Showcasing the power of headless content management.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-4">Links</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
              <li><Link href="/authors" className="hover:text-blue-600">Authors</Link></li>
              <li><Link href="/categories" className="hover:text-blue-600">Categories</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-4">Powered By</h3>
            <p className="text-slate-600 text-sm">
              <a href="https://www.cosmicjs.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">Cosmic CMS</a>
            </p>
            <p className="text-slate-600 text-sm mt-2">
              <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">Next.js</a>
            </p>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-200 text-center text-slate-500 text-sm">
          &copy; {new Date().getFullYear()} Modern Content Blog. All rights reserved.
        </div>
      </div>
    </footer>
  );
}