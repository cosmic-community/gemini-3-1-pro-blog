import { getAllPosts } from '@/lib/cosmic';
import PostCard from '@/components/PostCard';

export const revalidate = 60;

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <div className="space-y-12">
      <section className="text-center py-12 md:py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-4">
          The Content Blog
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Exploring ideas, stories, and perspectives from our diverse team of authors.
        </p>
      </section>

      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-900">Latest Posts</h2>
        </div>
        
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-slate-200">
            <p className="text-slate-500">No posts found. Add some content in your Cosmic dashboard.</p>
          </div>
        )}
      </section>
    </div>
  );
}