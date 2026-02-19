// app/authors/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { getAuthorBySlug, getPostsByAuthor } from '@/lib/cosmic';
import PostCard from '@/components/PostCard';

export const revalidate = 60;

export default async function AuthorProfilePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const author = await getAuthorBySlug(slug);

  if (!author) {
    notFound();
  }

  const posts = await getPostsByAuthor(author.id);

  return (
    <div>
      <section className="bg-white rounded-2xl p-8 md:p-12 mb-12 border border-slate-200 text-center shadow-sm">
        <img
          src={`${author.metadata.avatar.imgix_url}?w=200&h=200&fit=crop&auto=format,compress`}
          alt={author.title}
          className="w-32 h-32 rounded-full object-cover mx-auto mb-6 border-4 border-slate-50"
        />
        <h1 className="text-3xl font-bold text-slate-900 mb-4">{author.title}</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          {author.metadata.bio}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-slate-900 mb-8 pb-4 border-b border-slate-200">
          Posts by {author.title}
        </h2>
        
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-slate-500">This author hasn't published any posts yet.</p>
          </div>
        )}
      </section>
    </div>
  );
}