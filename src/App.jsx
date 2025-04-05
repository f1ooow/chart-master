import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RadarChart from './components/charts/RadarChart';
import BarChart from './components/charts/BarChart';
import ColumnChart from './components/charts/ColumnChart';
import './styles/App.css';

function App() {
  return (
    <HashRouter>  {/* 使用 HashRouter，不需要 basename */}
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/radar" element={<RadarChart />} />
          <Route path="/bar" element={<BarChart />} />
          <Route path="/column" element={<ColumnChart />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;