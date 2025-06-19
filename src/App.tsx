import { Route, Routes } from 'react-router-dom';
import Main from './pages/content/main/Main';
import Contents from './pages/content/Contents';
import QuickBtns from './components/quickBtns/QuickBtns';
import Finish from './pages/content/finish/Finish';
import ProjectDetail from './pages/detail/ProjectDetail';

export default function App() {
  return (
    <>
      <QuickBtns />
      <Routes>
        <Route path='/:name' element={<ProjectDetail />} />
      </Routes>

      <Main />
      <Contents />
      <Finish />
    </>
  );
}