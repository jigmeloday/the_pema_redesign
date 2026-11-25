import Footer from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { Outlet } from 'react-router-dom';

export default function PublicLayout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      {/* Grows to fill the screen, so short pages keep the footer at the bottom */}
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
