import { getAllAuthors } from '@/lib/cosmic';
import AuthorCard from '@/components/AuthorCard';

export const revalidate = 60;

export default async function AuthorsPage() {
  const authors = await getAllAuthors();

  return (
    <div className="space-y-12">
      <section className="text-center py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Authors</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Meet the voices behind our stories.
        </p>
      </section>

      {authors.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {authors.map(author => (
            <AuthorCard key={author.id} author={author} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-slate-500">No authors found.</p>
        </div>
      )}
    </div>
  );
}