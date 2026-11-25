import { NAV_LINKS } from '@/constants/nav.constant';
import { Button } from '../ui/button';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { HeartHandshake } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <nav className="flex h-20 items-center justify-between px-28">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-700 text-white">
            <HeartHandshake size={25} />
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900">
              The PEMA
            </h1>
            <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-slate-500">
              Care • Support • Wellbeing
            </p>
          </div>
        </Link>

        <div className="flex items-center gap-8">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {NAV_LINKS.map((item) => (
                <NavigationMenuItem key={item.label}>
                  {item.children ? (
                    <>
                      <NavigationMenuTrigger className="h-auto bg-transparent px-3 py-2 text-sm font-medium text-slate-600 hover:bg-transparent hover:text-teal-700 data-[state=open]:bg-transparent data-[state=open]:text-teal-700">
                        {item.label}
                      </NavigationMenuTrigger>

                      <NavigationMenuContent>
                        <ul className="grid w-64 gap-1 p-2">
                          {item.children.map((child) => (
                            <li key={child.to}>
                              <NavigationMenuLink
                                href={child.to}
                                className="block rounded-md px-4 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-teal-50 hover:text-teal-800"
                              >
                                {child.label}
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavLink
                      to={item.to!}
                      end={item.to === '/'}
                      className={({ isActive }) =>
                        `relative block px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                          isActive
                            ? 'text-teal-700'
                            : 'text-slate-600 hover:text-teal-700'
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-3 border-l border-slate-200 pl-7">
            <Button onClick={() => navigate('/contact')}>Need help?</Button>
            <Button onClick={() => navigate('/appointment')}>
              Book appointment
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
