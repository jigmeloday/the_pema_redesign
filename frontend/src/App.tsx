import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex min-h-svh flex-col">
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
