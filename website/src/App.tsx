import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { News } from './pages/News';
import { NewsArticle } from './pages/NewsArticle';
import { Advisories } from './pages/Advisories';
import { AdvisoryDetail } from './pages/AdvisoryDetail';
import { Download } from './pages/Download';
import { Publishers } from './pages/Publishers';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { AccountDeletion } from './pages/AccountDeletion';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { NotFound } from './pages/NotFound';

function ExternalFileRedirect({ to }: { to: string }) {
  React.useEffect(() => {
    window.location.replace(to);
  }, [to]);
  return null;
}

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <Routes>
          <Route path="/rss.xml" element={<ExternalFileRedirect to="/rss.xml" />} />
          <Route path="/feed.xml" element={<ExternalFileRedirect to="/rss.xml" />} />
          <Route path="/sitemap.xml" element={<ExternalFileRedirect to="/sitemap.xml" />} />
          <Route path="/support" element={<ExternalFileRedirect to="/support" />} />
          <Route path="/.well-known/security.txt" element={<ExternalFileRedirect to="/.well-known/security.txt" />} />
          <Route path="/security.txt" element={<ExternalFileRedirect to="/.well-known/security.txt" />} />
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:slug" element={<NewsArticle />} />
            <Route path="/advisories" element={<Advisories />} />
            <Route path="/advisories/:slug" element={<AdvisoryDetail />} />
            <Route path="/download" element={<Download />} />
            <Route path="/publishers" element={<Publishers />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/account-deletion" element={<AccountDeletion />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </MotionConfig>
  );
}