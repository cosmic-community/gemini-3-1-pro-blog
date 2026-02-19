// app/posts/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/cosmic';
import Markdown from '@/components/Markdown';
import CategoryBadge from '@/components/CategoryBadge';
import Avatar from '@/components/Avatar';
import DateFormatter from '@/components/DateFormatter';

export const revalidate = 60;

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto">
      <header className="mb-10 text-center">
        <div className="flex justify-center gap-2 mb-6">
          {post.metadata.categories?.map(category => (
            <CategoryBadge key={category.id} category={category} />
          ))}
        </div>
        
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
          {post.title}
        </h1>
        
        <div className="flex items-center justify-center gap-6 text-slate-600">
          <Avatar author={post.metadata.author} />
          <span>•</span>
          <DateFormatter dateString={post.created_at} />
        </div>
      </header>

      <div className="mb-10 rounded-xl overflow-hidden shadow-lg aspect-video">
        <img
          src={`${post.metadata.cover_image.imgix_url}?w=1200&h=675&fit=crop&auto=format,compress`}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-3xl mx-auto">
        <p className="text-xl text-slate-600 mb-8 font-serif leading-relaxed italic border-l-4 border-slate-200 pl-4">
          {post.metadata.excerpt}
        </p>
        
        <Markdown content={post.metadata.content} />
        
        <hr className="my-12 border-slate-200" />
        
        <div className="flex flex-col md:flex-row items-center gap-6 bg-white p-8 rounded-xl border border-slate-200">
          <img
            src={`${post.metadata.author.metadata.avatar.imgix_url}?w=150&h=150&fit=crop&auto=format,compress`}
            alt={post.metadata.author.title}
            className="w-20 h-20 rounded-full object-cover border-2 border-slate-100"
          />
          <div className="text-center md:text-left">
            <h3 className="text-lg font-bold text-slate-900 mb-2">About {post.metadata.author.title}</h3>
            <p className="text-slate-600 text-sm mb-4">{post.metadata.author.metadata.bio}</p>
          </div>
        </div>
      </div>
    </article>
  );
}