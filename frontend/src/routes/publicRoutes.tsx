import { Navigate, Route } from 'react-router-dom';
import { ContactPage } from '@/pages/ContactPage/ContactPage';
import { FaqsPage } from '@/pages/FaqsPage/FaqsPage';
import { HomePage } from '@/pages/HomePage/HomePage';
import { NeedHelpPage } from '@/pages/NeedHelpPage/NeedHelpPage';
import { PreventionPage } from '@/pages/PreventionPage/PreventionPage';
import { ReintegrationPage } from '@/pages/ReintegrationPage/ReintegrationPage';
import { ResponseServicesPage } from '@/pages/ResponseServicesPage/ResponseServicesPage';
import { SymposiumPage } from '@/pages/SymposiumPage/SymposiumPage';
import { TreatmentPage } from '@/pages/TreatmentPage/TreatmentPage';
import { UpdatesPage } from '@/pages/UpdatesPage/UpdatesPage';
import PublicLayout from '@/layouts/PublicLayout';

export const publicRoutes = (
  <Route element={<PublicLayout />}>
    <Route index element={<HomePage />} />
    <Route path="prevention-and-engagement" element={<PreventionPage />} />
    <Route path="response-services" element={<ResponseServicesPage />} />
    <Route path="treatment-and-rehabilitation" element={<TreatmentPage />} />
    <Route path="reintegration-and-aftercare" element={<ReintegrationPage />} />
    <Route path="annual-pema-symposium" element={<SymposiumPage />} />
    <Route path="updates" element={<UpdatesPage />} />
    <Route path="faqs" element={<FaqsPage />} />
    <Route path="contact-us" element={<ContactPage />} />
    <Route path="i-need-help" element={<NeedHelpPage />} />
    <Route path="post-page" element={<Navigate to="/updates" replace />} />
  </Route>
);
