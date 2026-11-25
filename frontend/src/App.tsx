import { useEffect } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { buttonVariants } from '@/components/ui/button-variants';

const NAV_LINKS = [
  { to: '/home', label: 'Home' },
  { to: '/prevention-and-engagement', label: 'Prevention' },
  { to: '/response-services', label: 'Response' },
  { to: '/treatment-and-rehabilitation', label: 'Treatment' },
  { to: '/reintegration-and-aftercare', label: 'Aftercare' },
  { to: '/annual-pema-symposium', label: 'Symposium' },
  { to: '/updates', label: 'Updates' },
  { to: '/faqs', label: 'FAQ' },
  { to: '/contact-us', label: 'Contact' },
];

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-svh flex-col">
      <header className="border-b">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-3">
          <Link to="/" className="font-semibold">
            The PEMA Secretariat
          </Link>
          <Link
            to="/i-need-help"
            className={buttonVariants({ variant: 'help' })}
          >
            I Need Help
          </Link>
          <nav aria-label="Main" className="w-full">
            <ul className="flex flex-wrap gap-x-5">
              {NAV_LINKS.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      isActive
                        ? 'inline-block py-2 font-semibold text-primary underline underline-offset-8'
                        : 'inline-block py-2 text-muted-foreground hover:text-foreground'
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
