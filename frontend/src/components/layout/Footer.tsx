import { Link } from 'react-router-dom';
import { FOOTER_LINKS } from '@/constants/nav.constant';

const linkClass =
  'rounded-sm underline-offset-4 hover:text-primary hover:underline';

export default function Footer() {
  return (
    <footer className="border-t bg-card px-4 py-10 sm:px-7 lg:px-28">
      <nav aria-label="Footer">
        <ul className="flex flex-wrap items-start gap-x-16 gap-y-6">
          {FOOTER_LINKS.map((item) => (
            <li key={item.label}>
              {item.children ? (
                <>
                  <p className="font-semibold">{item.label}</p>
                  <ul className="mt-2 flex flex-col gap-2">
                    {item.children.map((child) => (
                      <li key={child.to}>
                        <Link to={child.to} className={linkClass}>
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link to={item.to} className={`font-semibold ${linkClass}`}>
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
