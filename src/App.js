import './App.css';
import './styles/formvalidation.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './pages/Login';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignUp from './pages/SignUp';

function App() {
  return (
    <Suspense>
      <div className="app">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
