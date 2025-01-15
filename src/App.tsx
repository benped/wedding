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

function App() {
  return (
    <Router>
      <div className="min-h-screen w-screen overflow-x-hidden bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/minneapolis" element={<Minneapolis />} />
          <Route path="/registry" element={<Registry />} />
          <Route path="/mystery" element={<Mystery />} />
        </Routes>
        <CountdownTimer />
      </div>
    </Router>
  );
}

export default App;
