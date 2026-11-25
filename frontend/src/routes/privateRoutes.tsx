/* eslint-disable react-refresh/only-export-components -- guard and routes are kept together */
import { Navigate, Outlet, Route } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { DashboardPage } from '@/pages/DashboardPage/DashboardPage';

// Only for logged-in users. This is not security: the API must also check.
function PrivateRoute() {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
}

export const privateRoutes = (
  <Route element={<PrivateRoute />}>
    <Route path="dashboard" element={<DashboardPage />} />
  </Route>
);
