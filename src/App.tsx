import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './layout/default/layout';
import GaragePage from './pages/garage/garage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<GaragePage />} />
        {/* <Route path='/winners' element={<WinnersPage />} /> */}
        <Route path='*' element={<Navigate to='/' />} />
      </Route>
    </Routes>
  );
}

export default App;
