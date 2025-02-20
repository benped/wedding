import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import Schedule from './pages/Schedule';
import Hotels from './pages/Hotels';
import Minneapolis from './pages/Minneapolis';
import Registry from './pages/Registry';
import Mystery from './pages/Mystery';
import CountdownTimer from './components/CountdownTimer';
import PasswordProtection from './components/PasswordProtection';
import ProtectedRoute from './components/ProtectedRoute';
import FAQ from './pages/FAQ';

function App() {
  return (
    <Router>
      <div className="min-h-screen w-screen overflow-x-hidden bg-white">
        <Navigation />
        <Routes>
          <Route path="/password" element={<PasswordProtection />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/schedule"
            element={
              <ProtectedRoute>
                <Schedule />
              </ProtectedRoute>
            }
          />
          <Route
            path="/hotels"
            element={
              <ProtectedRoute>
                <Hotels />
              </ProtectedRoute>
            }
          />
          <Route
            path="/minneapolis"
            element={
              <ProtectedRoute>
                <Minneapolis />
              </ProtectedRoute>
            }
          />
          <Route
            path="/registry"
            element={
              <ProtectedRoute>
                <Registry />
              </ProtectedRoute>
            }
          />
          <Route
            path="/mystery"
            element={
              <ProtectedRoute>
                <Mystery />
              </ProtectedRoute>
            }
          />
          <Route
            path="/faq"
            element={
              <ProtectedRoute>
                <FAQ />
              </ProtectedRoute>
            }
          />
        </Routes>
        <CountdownTimer />
      </div>
    </Router>
  );
}

export default App;
