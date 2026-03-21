import { HashRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { Metodologie } from './pages/Metodologie';
import { AvizLegal } from './pages/AvizLegal';
import { Contact } from './pages/Contact';
import { Confidentialitate } from './pages/Confidentialitate';

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/metodologie" element={<Metodologie />} />
        <Route path="/aviz-legal" element={<AvizLegal />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/confidentialitate" element={<Confidentialitate />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
