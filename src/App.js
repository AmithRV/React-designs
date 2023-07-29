import './App.css';
import './styles/formvalidation.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './pages/Login';
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Suspense>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
