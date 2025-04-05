import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  const charts = [
    {
      type: 'radar',
      title: '雷达图',
      description: '展示多维度数据分析，适用于多个维度的数据对比'
    },
    {
      type: 'bar',
      title: '柱形图',
      description: '展示数据对比和趋势分析，适合时间序列数据展示'
    },
    {
      type: 'column',
      title: '条形图',
      description: '展示分类数据的对比，适合处理不同类别的数据比较'
    }
  ];

  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="main-title">做图大师</h1>
        <p className="subtitle">不专业的图表制作工具，让数据可视化更简单</p>
      </header>
      <div className="charts-grid">
        {charts.map((chart) => (
          <Link to={`/${chart.type}`} className="chart-card" key={chart.type}>
            <h2 className="chart-title">{chart.title}</h2>
            <p className="chart-description">{chart.description}</p>
            <div className="card-footer">
              <span className="explore-text">开始制作</span>
              <span className="arrow">→</span>
            </div>
          </Link>
        ))}
      </div>

      <footer className="home-footer">
        <p>选择适合您的图表类型，开始创作吧！</p>
      </footer>
    </div>
  );
};

export default Home;