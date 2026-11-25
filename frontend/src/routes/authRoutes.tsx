/* eslint-disable react-refresh/only-export-components -- guard and routes are kept together */
import { Navigate, Outlet, Route } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { LoginPage } from '@/pages/LoginPage/LoginPage';

// Only for logged-out visitors; logged-in users go to the dashboard.
function AuthRoute() {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to="/dashboard" replace /> : <Outlet />;
}

export const authRoutes = (
  <Route element={<AuthRoute />}>
    <Route path="login" element={<LoginPage />} />
  </Route>
);
