import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type ServiceItemProps = {
  title: string;
  summary: string;
  to: string;
};

export function ServiceItem({ title, summary, to }: ServiceItemProps) {
  return (
    <li className="border-b">
      <Link
        to={to}
        className="group grid grid-cols-[1fr_auto] items-center gap-x-6 gap-y-2 py-7 md:grid-cols-[1fr_1.3fr_auto]"
      >
        <h3 className="decoration-2 underline-offset-4 group-hover:text-primary group-hover:underline">
          {title}
        </h3>
        <p className="col-start-1 text-muted-foreground md:col-start-2">
          {summary}
        </p>
        <ArrowRight
          className="col-start-2 row-start-1 text-primary transition-transform duration-300 ease-out group-hover:translate-x-1 md:col-start-3"
          aria-hidden="true"
        />
      </Link>
    </li>
  );
}
