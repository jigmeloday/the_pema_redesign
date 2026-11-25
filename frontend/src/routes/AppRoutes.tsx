import { Route, Routes } from 'react-router-dom';
import App from '@/App';
import { NotFoundPage } from '@/pages/NotFoundPage/NotFoundPage';
import { authRoutes } from './authRoutes';
import { privateRoutes } from './privateRoutes';
import { publicRoutes } from './publicRoutes';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<App />}>
        {publicRoutes}
        {authRoutes}
        {privateRoutes}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
