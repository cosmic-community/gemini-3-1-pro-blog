import ReactMarkdown from 'react-markdown';
import { cn } from '@/lib/utils';

export default function Markdown({ content, className }: { content: string; className?: string }) {
  return (
    <ReactMarkdown
      className={cn("prose prose-slate prose-lg max-w-none", className)}
      components={{
        img: ({ node, ...props }) => (
          <img {...props} className="rounded-lg shadow-md my-8" loading="lazy" />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
}