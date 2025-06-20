import { Route, Routes } from 'react-router-dom';
import Main from './pages/content/main/Main';
import Contents from './pages/content/Contents';
import QuickBtns from './components/quickBtns/QuickBtns';
import ProjectDetail from './pages/detail/ProjectDetail';
import Fw from './pages/content/menu/25fw';
import Sena from './pages/content/menu/Sena';
import Hyewon from './pages/content/menu/Hyewon';
import Jooha from './pages/content/menu/Jooha';

export default function App() {
  return (
    <>
      <QuickBtns />
      <Routes>
        <Route path="/" element={
          <>
            <Main />
            <Contents />
          </>
        } />
        <Route path="/product/:name" element={<ProjectDetail />} />
        <Route path="/25fw" element={<Fw />} />
        <Route path="/Sena" element={<Sena />} />
        <Route path="/Jooha" element={<Jooha />} />
        <Route path="/Hyewon" element={<Hyewon />} />
      </Routes>
    </>
  );
}
