import Link from 'next/link';
import { Post } from '@/lib/types';
import CategoryBadge from './CategoryBadge';
import Avatar from './Avatar';
import DateFormatter from './DateFormatter';

export default function PostCard({ post }: { post: Post }) {
  return (
    <article className="flex flex-col h-full bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
      <Link href={`/posts/${post.slug}`} className="block relative aspect-video overflow-hidden">
        <img
          src={`${post.metadata.cover_image.imgix_url}?w=800&h=450&fit=crop&auto=format,compress`}
          alt={post.title}
          className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
        />
      </Link>
      
      <div className="flex flex-col flex-1 p-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {post.metadata.categories?.map(category => (
            <CategoryBadge key={category.id} category={category} />
          ))}
        </div>
        
        <Link href={`/posts/${post.slug}`} className="block group mb-3">
          <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2 line-clamp-2">
            {post.title}
          </h2>
          <p className="text-slate-600 line-clamp-3 text-sm leading-relaxed">
            {post.metadata.excerpt}
          </p>
        </Link>
        
        <div className="mt-auto pt-4 flex items-center justify-between border-t border-slate-100">
          <Avatar author={post.metadata.author} size="sm" />
          <DateFormatter dateString={post.created_at} />
        </div>
      </div>
    </article>
  );
}