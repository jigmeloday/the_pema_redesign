import { Link } from 'react-router-dom';
import type { NavGroupItem } from '@/types/nav.type';

type FooterColumnProps = {
  column: NavGroupItem;
};

export function FooterColumn({ column }: FooterColumnProps) {
  return (
    <nav aria-label={column.label}>
      <h2 className="text-base">{column.label}</h2>
      <ul className="mt-3 flex flex-col gap-1">
        {column.children.map((link) => (
          <li key={link.to}>
            <Link
              to={link.to}
              className="inline-block rounded-sm py-1 text-navy-foreground/80 decoration-2 underline-offset-4 hover:text-navy-foreground hover:underline"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
