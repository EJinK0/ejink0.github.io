import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import MainPage from './pages/MainPage/MainPage';
import GamePage from './pages/GamePage/GamePage';
import SNSPage from './pages/SNSPage/SNSPage';
import Join from './pages/SNSPage/Join/Join';
import TodoListPage from './pages/ToDoListPage/TodoListPage';
import ArrayExamplePage from './pages/ArrayExamplePage/ArrayExamplePage';
import MainFeed from './pages/SNSPage/MainFeed/MainFeed';
import ScssExamplePage from './pages/ScssExamplePage/ScssExamplePage';
import HookExamplePage from './pages/HookExamplePage/HookExamplePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/mainpage' element={<MainPage />} />
      <Route path='/gamepage' element={<GamePage />} />

      <Route path='/snspage' element={<SNSPage />} />
      <Route path='/join' element={<Join />} />
      <Route path='/mainFeed' element={<MainFeed />} />

      <Route path='/todolist' element={<TodoListPage />} />
      <Route path='/arrayExamplePage' element={<ArrayExamplePage />} />
      <Route path='/scssExamplePage' element={<ScssExamplePage />} />
      <Route path='hookExamplePage' element={<HookExamplePage />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
