import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import SNSPage from './pages/SNSPage/SNSPage';
import Join from './pages/SNSPage/Join/Join';
import MainFeed from './pages/SNSPage/MainFeed/MainFeed';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/loginPage' element={<SNSPage />} />
      <Route path='/joinPage' element={<Join />} />
      <Route path='/mainFeed' element={<MainFeed />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
