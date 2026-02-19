// app/categories/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { getCategoryBySlug, getPostsByCategory } from '@/lib/cosmic';
import PostCard from '@/components/PostCard';

export const revalidate = 60;

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = await getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const posts = await getPostsByCategory(category.id);

  return (
    <div>
      <section className="text-center py-12 mb-8">
        <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-4">
          Category
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{category.title}</h1>
        {category.metadata.description && (
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {category.metadata.description}
          </p>
        )}
      </section>

      <section>
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-slate-200">
            <p className="text-slate-500">No posts found in this category.</p>
          </div>
        )}
      </section>
    </div>
  );
}