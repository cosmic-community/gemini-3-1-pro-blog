import Link from 'next/link';
import { Author } from '@/lib/types';

export default function AuthorCard({ author }: { author: Author }) {
  return (
    <Link 
      href={`/authors/${author.slug}`}
      className="flex flex-col items-center text-center p-6 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
    >
      <img
        src={`${author.metadata.avatar.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
        alt={author.title}
        className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-slate-100"
      />
      <h3 className="text-lg font-bold text-slate-900 mb-2">{author.title}</h3>
      <p className="text-slate-600 text-sm line-clamp-3">{author.metadata.bio}</p>
      <span className="mt-4 text-sm font-medium text-blue-600 group-hover:underline">View Profile →</span>
    </Link>
  );
}