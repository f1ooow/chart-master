import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RadarChart from './components/charts/RadarChart';
import BarChart from './components/charts/BarChart';
import ColumnChart from './components/charts/ColumnChart';
import './styles/App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/radar" element={<RadarChart />} />
          <Route path="/bar" element={<BarChart />} />
          <Route path="/column" element={<ColumnChart />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;