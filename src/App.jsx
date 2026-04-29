import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { ErrorBoundary } from './components/ErrorBoundary';

const HomePage        = lazy(() => import('./pages/HomePage').then((m) => ({ default: m.HomePage })));
const Metodologie     = lazy(() => import('./pages/Metodologie').then((m) => ({ default: m.Metodologie })));
const AvizLegal       = lazy(() => import('./pages/AvizLegal').then((m) => ({ default: m.AvizLegal })));
const Contact         = lazy(() => import('./pages/Contact').then((m) => ({ default: m.Contact })));
const Confidentialitate = lazy(() => import('./pages/Confidentialitate').then((m) => ({ default: m.Confidentialitate })));
const RecentUpdates = lazy(() => import('./pages/RecentUpdates').then((m) => ({ default: m.RecentUpdates })));
const PoliticianPage  = lazy(() => import('./pages/PoliticianPage').then((m) => ({ default: m.PoliticianPage })));
const GlosarPage      = lazy(() => import('./pages/GlosarPage').then((m) => ({ default: m.GlosarPage })));
const ListaPage       = lazy(() => import('./pages/Lista').then((m) => ({ default: m.ListaPage })));
const PartidPage      = lazy(() => import('./pages/PartidPage').then((m) => ({ default: m.PartidPage })));
const StatusPage      = lazy(() => import('./pages/StatusPage').then((m) => ({ default: m.StatusPage })));
const JudetPage       = lazy(() => import('./pages/JudetPage').then((m) => ({ default: m.JudetPage })));
const NotFound        = lazy(() => import('./pages/NotFound').then((m) => ({ default: m.NotFound })));

function PageFallback() {
  return (
    <div className="app-loading-shell" aria-busy="true" aria-live="polite">
      <div className="app-loading-card">
        <p className="app-kicker">Se incarca arhiva</p>
        <h1 className="app-title">Politicieni Corupti</h1>
        <div className="app-loading-line" />
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <ErrorBoundary>
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/actualizari" element={<RecentUpdates />} />
            <Route path="/politician/:slug" element={<PoliticianPage />} />
            <Route path="/glosar" element={<GlosarPage />} />
            <Route path="/lista" element={<ListaPage />} />
            <Route path="/partid/:slug" element={<PartidPage />} />
            <Route path="/status/:statusKey" element={<StatusPage />} />
            <Route path="/judet/:slug" element={<JudetPage />} />
            <Route path="/metodologie" element={<Metodologie />} />
            <Route path="/aviz-legal" element={<AvizLegal />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/confidentialitate" element={<Confidentialitate />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
