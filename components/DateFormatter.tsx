import { formatDate } from '@/lib/utils';

export default function DateFormatter({ dateString }: { dateString: string }) {
  return <time dateTime={dateString} className="text-slate-500 text-sm">{formatDate(dateString)}</time>;
}