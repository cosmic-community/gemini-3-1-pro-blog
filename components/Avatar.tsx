import { Author } from '@/lib/types';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface AvatarProps {
  author: Author;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showName?: boolean;
}

export default function Avatar({ 
  author, 
  size = 'md', 
  className,
  showName = true 
}: AvatarProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16'
  };

  return (
    <Link 
      href={`/authors/${author.slug}`}
      className={cn("inline-flex items-center gap-2 group", className)}
    >
      <img
        src={`${author.metadata.avatar.imgix_url}?w=100&h=100&fit=crop&auto=format,compress`}
        alt={author.title}
        className={cn("rounded-full object-cover border border-slate-200", sizeClasses[size])}
      />
      {showName && (
        <span className="font-medium text-slate-900 group-hover:text-blue-600 transition-colors">
          {author.title}
        </span>
      )}
    </Link>
  );
}