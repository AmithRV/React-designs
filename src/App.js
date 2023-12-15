import './App.css';
import './styles/formvalidation.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Suspense>
      <div className="app">
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
