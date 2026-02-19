import Link from 'next/link';
import { Category } from '@/lib/types';
import { cn } from '@/lib/utils';

export default function CategoryBadge({ 
  category, 
  className 
}: { 
  category: Category;
  className?: string;
}) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800 hover:bg-slate-200 transition-colors",
        className
      )}
    >
      {category.title}
    </Link>
  );
}