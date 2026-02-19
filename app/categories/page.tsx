import Link from 'next/link';
import { getAllCategories } from '@/lib/cosmic';

export const revalidate = 60;

export default async function CategoriesPage() {
  const categories = await getAllCategories();

  return (
    <div className="space-y-12">
      <section className="text-center py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Categories</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Browse articles by topic.
        </p>
      </section>

      {categories.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(category => (
            <Link 
              key={category.id} 
              href={`/categories/${category.slug}`}
              className="block p-8 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-200 transition-all group"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                {category.title}
              </h3>
              {category.metadata.description && (
                <p className="text-slate-600 text-sm">{category.metadata.description}</p>
              )}
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-slate-500">No categories found.</p>
        </div>
      )}
    </div>
  );
}