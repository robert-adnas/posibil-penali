import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { Metodologie } from './pages/Metodologie';
import { AvizLegal } from './pages/AvizLegal';
import { Contact } from './pages/Contact';
import { Confidentialitate } from './pages/Confidentialitate';
import { PoliticianPage } from './pages/PoliticianPage';
import { GlosarPage } from './pages/GlosarPage';
import { ListaPage } from './pages/Lista';

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/politician/:slug" element={<PoliticianPage />} />
        <Route path="/glosar" element={<GlosarPage />} />
        <Route path="/lista" element={<ListaPage />} />
        <Route path="/metodologie" element={<Metodologie />} />
        <Route path="/aviz-legal" element={<AvizLegal />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/confidentialitate" element={<Confidentialitate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
