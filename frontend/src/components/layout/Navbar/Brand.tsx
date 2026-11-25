import { Link } from 'react-router-dom';
import { HeartHandshake } from 'lucide-react';

export function Brand() {
  return (
    <Link to="/" className="flex shrink-0 items-center gap-2.5 rounded-2xl">
      <span className="flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground xl:size-10 min-[94rem]:size-12">
        <HeartHandshake size={24} strokeWidth={1.75} aria-hidden="true" />
      </span>
      <span className="flex flex-col">
        <span className="text-xl leading-tight font-bold tracking-tight whitespace-nowrap xl:text-lg min-[94rem]:text-xl">
          The PEMA
        </span>
        <span className="text-xs leading-tight whitespace-nowrap text-muted-foreground xl:hidden min-[94rem]:block">
          Care • Support • Wellbeing
        </span>
      </span>
    </Link>
  );
}
